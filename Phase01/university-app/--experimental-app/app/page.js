export default function HomePage() {
  return (
    <div>
      <header>
        <nav>
          <a href="/"><img src="/images/qulogo.png" alt="Qu Logo" className="qu-logo" /></a>
          <div className="btns">
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/dashboard" id="dashboard">Dashboard</a>
          </div>
          <div className="user-info">
            <img src="/images/user-icon.png" alt="User Icon" className="user-icon" />
            <span id="student-email">student@example.com</span>
          </div>
        </nav>
        <hr />
      </header>

      <main>
        <section id="welcome-bar">
          <h1 id="welcome-msg">Welcome to the Qatar University Student Management System</h1>
          <p id="welcome-sub">Access your academic dashboard, manage your plans, and explore university resources.</p>
        </section>

        <section id="about">
          <div className="hist">
            <h3 className="overview-title">Overview</h3>
            <p className="overview">
              Qatar University (QU), established in 1977, is Qatar’s leading higher education institution, known for academic 
              and research excellence. It offers high-quality education aligned with international standards, earning multiple
              accreditations. QU comprises 12 colleges, including Arts and Sciences, Business, Engineering, Medicine, and Law,
              and provides 51 bachelor’s and 53 master’s programs tailored to national needs. Research is a key focus, supported by
              a state-of-the-art Research Complex and 18 research centers, with over 500 projects in 130+ countries.
              The university emphasizes community engagement, student development, and leadership while fostering partnerships
              with industry, government, and academia to drive Qatar’s economic and social progress.
            </p>
          </div>

          <div className="mission">
            <h3 className="mission-title">Mission</h3>
            <p className="mission-p">
              Qatar University is a beacon of thought and creativity, with an Arabic-Islamic identity and a global outlook.
              The University aims to cultivate a conscious, influential generation that aspires to have a constructive impact.
              It is a center for innovation and for the development of knowledge-based solutions that respond to major national
              challenges in support of the sustainable human, social, economic, and environmental development of the State of Qatar.
            </p>
          </div>
        </section>

        <section id="top-bar">
          <div className="slider">
            <button className="prev">&#10094;</button>
            <div className="slides">
              <img className="slide" src="/images/1.jpg" alt="img - 1" />
              <img className="slide" src="/images/2.jpg" alt="img - 2" />
              <img className="slide" src="/images/3.jpg" alt="img - 3" />
              <img className="slide" src="/images/4.jpg" alt="img - 4" />
            </div>
            <button className="next">&#10095;</button>
          </div>
          <div className="video">
            <iframe
              className="intro-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wBoVS5hlhHc?si=hEq-KpwRcfECzVcK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section id="academic-plans">
          <h1>Our Colleges</h1>
          <div className="college-slider">
            {/* Full list of college cards from the original HTML should be pasted here */}
          </div>
        </section>
      </main>

      <footer>
        <section className="info">
          <div className="contact">
            <p className="phone">Phone: (+974)​​ 4403​-3333</p>
            <p className="box">P.O. Box: 2713 - Doha</p>
            <p className="email"><a id="email" href="mailto:QUMCC@qu.edu.qa">Email: QUMCC@qu.edu.qa</a></p>
          </div>

          <div className="social">
            <ul className="links">
              <li><a href="https://www.facebook.com/qataruniversity/"><img src="/images/brand-facebook.svg" alt="Facebook" /></a></li>
              <li><a href="https://x.com/qataruniversity"><img src="/images/brand-x.svg" alt="X" /></a></li>
              <li><a href="https://www.instagram.com/qataruniversity"><img src="/images/brand-instagram.svg" alt="Instagram" /></a></li>
              <li><a href="https://www.youtube.com/qataruniversity"><img src="/images/brand-youtube.svg" alt="YouTube" /></a></li>
              <li><a href="https://www.snapchat.com/add/qataruni"><img src="/images/brand-snapchat.svg" alt="Snapchat" /></a></li>
              <li><a href="https://www.linkedin.com/company/43068"><img src="/images/brand-linkedin.svg" alt="LinkedIn" /></a></li>
            </ul>
          </div>
        </section>

        <section>
          <form className="lang">
            <label className="choose-lang">Language: </label>
            <select id="lang-select">
              <option value="Arabic">Arabic</option>
              <option value="English">English</option>
            </select>
          </form>
          <p>​© 2025 Qatar University, All Rights Reserved</p>
        </section>
      </footer>
    </div>
  );
}
