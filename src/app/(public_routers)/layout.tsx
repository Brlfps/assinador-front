import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import PublicPageProvider from "../components/providers/publicPage";

interface PublicRouterProps {
  children: ReactNode;
}

export default async function PublicRouter({ children }: PublicRouterProps) {
  return (
    <>

      <Box h={'100vh'} w={'100vw'} bg={"#00713D"} >
        {children}
      </Box>
    </>
  );
}
