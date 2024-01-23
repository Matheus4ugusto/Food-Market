"use client";

import {Box, Flex, Heading, Stack, Text} from "@chakra-ui/react";
import SearchForm from "@/components/SearchForm";
import StoreCard from "@/components/StoreCard";
import BannerCard from "@/components/BannerCards";
import {useEffect, useState} from "react";
import {getStores} from "@/services/store.service";

export default function Home() {
    const [stores, setStores] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getStores();
                setStores(data.content);
            } catch (error) {
                console.error("Um erro desconhecido aconteceu", error);
            }
        };
        fetchData();
    }, []);

    return (
        <Flex
            mt="3rem"
            as="main"
            flexDir={{base: "column"}}
            alignItems="center"
            p={{lg: "0 10%", base: "0 5%"}}
        >
            <Heading textAlign="center" mb="1rem">
                As Melhores comidas e Mequis do Brasil!
            </Heading>
            <Text textAlign="center" pb="2rem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                aspernatur unde suscipit quia.
            </Text>
            <SearchForm/>

            <Flex
                mt="2rem"
                w={{base: "90%", md: "80%", lg: "90%"}}
                gap="2rem"
                flexDir={{base: "column", md: "row"}}
            >
                <BannerCard
                    text="Lanches"
                    link="/"
                    src="/hamburguer.png"
                    color="orange"
                />
                <BannerCard
                    text="Mercados"
                    link="/"
                    src="/carrinho.png"
                    color="green"
                />
            </Flex>
            <Box w="100%" mt="2rem" as="section">
                <Heading fontSize="2xl" mb="2rem">
                    Lojas
                </Heading>
                <Stack
                    direction={{base: "column", lg: "row"}}
                    wrap="wrap"
                    justify="space-between"
                >
                    {stores?.map((store: any) => (
                        <StoreCard
                            key={store.id}
                            nome={store.name}
                            categoria="Vazia"
                            id={store.id}
                            image_logo={`http://127.0.0.1:8080/storage/${store.logoUrl}`}
                            taxaEntrega={0}
                            distancia="1km"
                            nota={5.3}
                            path=""
                            tempo="60min"/>
                    ))}
                </Stack>
            </Box>
        </Flex>
    );
}
