import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/app/lib/db";


const authOptions = ({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
      ],
    
    adapter: MongoDBAdapter(clientPromise),
})
const handler = NextAuth(authOptions as AuthOptions)

export { handler as GET, handler as POST }