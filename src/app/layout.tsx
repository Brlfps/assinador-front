import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import { ReactNode } from "react";
import NextAuSessionProvider from "./components/providers/session_provaiders";
import PublicPageProvider from "./components/providers/publicPage";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
    title: "Assinador Front",
    description: "Assinador de documentos online",
};

interface RootLayoutProps {
    children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
    return (
        <html
            lang="pt-br"
            style={{ fontSize: "0.8rem", width: "100vw", height: "100vh" }}
        >
            <NextAuSessionProvider>
                <PublicPageProvider>
                    <Box 
                    // fontSize={{base: '', sm: '', md: "", xl: ''}}
                    >
                        <body className={fonts.rubik.variable}>
                            <Providers>{children}</Providers>
                        </body>
                    </Box>
                </PublicPageProvider>
            </NextAuSessionProvider>
        </html>
    );
}
