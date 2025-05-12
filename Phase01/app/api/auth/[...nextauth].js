import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from '../../actions/statistics-actions';


export default NextAuth({
    
    // a translator between NextAuth and the database and you do not have to write SQL
    adapter: PrismaAdapter(prisma),


    // the third-party login
    providers: [
        GitHubProvider({
            // this will identifie your app to GitHub.
            clientId: process.env.GITHUB_ID,
            // like a prove for your app
            clientSecret: process.env.GITHUB_SECRET,
        })
    ]

});