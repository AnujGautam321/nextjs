import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"
import User from "../../../../models/User";

 
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.Google_Client_ID,
            clientSecret: process.env.Google_Client_SECRET,
        }),
        CredentialsProvider({
            id:"credentials",
            name: "Credentials",
            async authorize(credentials) {              
                await connect();
                
                try {
                    //Checking if the user exists
                    const user = await User.findOne({
                         email: credentials.email, 
                        });
                    
                    if (user) {
                        //Check password
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong credentials!");
                        }

                    } else {
                        throw new Error("User not found!");
                    }

                } catch (err) {
                  throw new Error(err);                   
                }
            }
        })
    ],
    pages: {
        error: "/dashboard/login",
    },
});

export { handler as GET, handler as POST };