import prisma from '../../../repo/prisma';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  
  if (!code) {
    return Response.redirect('/login.html?error=no_code');
  }
  
  try {
    // Exchange code for token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_ID,
        client_secret: process.env.GITHUB_SECRET,
        code
      })
    });
    
    const { access_token } = await tokenRes.json();
    
    // Get user profile
    const userRes = await fetch('https://api.github.com/user', {
      headers: { 'Authorization': `token ${access_token}` }
    });
    
    const githubUserData = await userRes.json();
    
    // Get user email (as it might be private)
    const emailsRes = await fetch('https://api.github.com/user/emails', {
      headers: { 'Authorization': `token ${access_token}` }
    });
    
    const emails = await emailsRes.json();
    const primaryEmail = emails.find(email => email.primary)?.email || githubUserData.email;
    
    if (!primaryEmail) {
      return Response.redirect('/login.html?error=no_email');
    }
    
    // Find or create user
    let user = await prisma.user.findUnique({ where: { email: primaryEmail } });
    
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: primaryEmail,
          name: githubUserData.name || 'GitHub User',
          image: githubUserData.avatar_url,
          role: 'student' // Default role
        }
      });
    }
    
    // Set localStorage items using a tiny script in the redirect page
    const dashboardUrl = getDashboardUrlByRole(user.role);
    
    // Create a redirect HTML that will set localStorage and then redirect
    const html = `
      <html>
        <head>
          <title>Redirecting...</title>
          <script>
            localStorage.setItem("uid", "${user.id}");
            localStorage.setItem("currentUserEmail", "${encodeURIComponent(user.email)}");
            localStorage.setItem("userRole", "${user.role || 'student'}");
            window.location.href = "${dashboardUrl}";
          </script>
        </head>
        <body>
          <p>Redirecting to your dashboard...</p>
        </body>
      </html>
    `;
    
    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html'
      }
    });
  } catch (error) {
    console.error('GitHub auth error:', error);
    return Response.redirect('/login.html?error=github_auth_failed');
  }
}

function getDashboardUrlByRole(role) {
  switch (role) {
    case 'student':
      return '/dashboard.html';
    case 'instructor':
      return '/instructor-dashboard.html';
    case 'admin':
      return '/admin.html';
    default:
      return '/dashboard.html';
  }
}