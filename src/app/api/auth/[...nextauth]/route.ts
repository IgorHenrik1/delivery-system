import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',

            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'your@email.com',
                },
                password: {
                    label: 'Senha',
                    type: 'password',
                    placeholder: '******',
                },
            },
            async authorize(credentials, req) {
                const res = await fetch('http://localhost:3333/sessions', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                    headers: { 'Content-Type': 'application/json' },
                });
                const user = await res.json();

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user;
                }
                // Return null if user data could not be retrieved
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/',
    },
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user);

            return token;
        },
        async session({ session, token }) {
            session = token.user as any;
            return session;
        },
    },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
