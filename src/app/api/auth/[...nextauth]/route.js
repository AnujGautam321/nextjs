import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
 
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.Google_Client_ID,
            clientSecret: process.env.Google_Client_SECRET,
        }),
    ],
})

export { handler as GET, handler as POST };