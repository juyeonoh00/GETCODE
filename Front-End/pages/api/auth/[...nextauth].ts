import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SEC || '',
        }),
    ],
    callbacks: {
        async jwt({token, user, account}){
            if(account && user){
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({session, token}){
            session.user.accessToken = token.accessToken as string;
            session.user.refreshToken = token.refreshToken as string;
            return session;
        }
    }
})