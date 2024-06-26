"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function PendenteComponent() {
    return (
        <Flex
            shadow={"2xl"}
            borderRadius={"15px"}
            w={"250px"}
            bg={"white"}
            p={"30px"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box w={"100%"}>
                <Text
                    w={"50%%"}
                    fontSize={"20px"}
                    textAlign={"center"}
                    color="#00713D"
                    alignItems={"center"}
                    fontWeight={"bold"}
                >
                    PENDENTES
                </Text>

                <Text
                    w={"50%%"}
                    fontSize={"40px"}
                    textAlign={"center"}
                    color="#00713D"
                    alignItems={"center"}
                    fontWeight={"thin"}
                >
                    0
                </Text>
            </Box>
        </Flex>
    );
}
