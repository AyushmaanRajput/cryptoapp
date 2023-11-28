import { Flex, Box, Image, Stack, Text, Container } from "@chakra-ui/react";
import React from "react";

export const SelectedCoin = ({ coin }) => {
  return (
    <Container w="100%" p={0}>
      <Text as={"h1"} fontSize={"3rem"}>
        #{coin.market_cap_rank}
      </Text>
      <Flex
        mb={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        <Box>
          <Image
            src={coin.image}
            alt={coin.symbol}
            w={"3rem"}
            objectFit={"cover"}
          />
        </Box>
        <Stack>
          <Text textTransform={"uppercase"} fontSize={"1.25rem"}>
            {coin.symbol}
          </Text>
          <Text>{coin.name}</Text>
        </Stack>
      </Flex>
      <Flex
        mb={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        <Text
          textTransform="uppercase"
          letterSpacing={"1px"}
          fontWeight={"600"}
        >
          Current Price:{" "}
          <span style={{ fontWeight: "400", letterSpacing: "0.5px" }}>
            ₹{coin.current_price}
          </span>
        </Text>
        <Text
          textTransform="uppercase"
          letterSpacing={"1px"}
          fontWeight={"600"}
        >
          <Text
            textTransform="uppercase"
            letterSpacing={"1px"}
            fontWeight={"600"}
          >
            Price Change (24 hours):{" "}
            <span style={{ fontWeight: "400", letterSpacing: "0.5px" }}>
              ₹{coin.price_change_24h}
            </span>
          </Text>
        </Text>
      </Flex>
      <Flex
        mb={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        <Text
          textTransform="uppercase"
          letterSpacing={"1px"}
          fontWeight={"600"}
        >
          Lowest :{" "}
          <span style={{ fontWeight: "400", letterSpacing: "0.5px" }}>
            ₹{coin.low_24h}
          </span>
        </Text>
        <Text
          textTransform="uppercase"
          letterSpacing={"1px"}
          fontWeight={"600"}
        >
          Highest:{" "}
          <span style={{ fontWeight: "400", letterSpacing: "0.5px" }}>
            ₹{coin.high_24h}
          </span>
        </Text>
      </Flex>
      <Flex
        mb={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        <Text
          textTransform="uppercase"
          letterSpacing={"1px"}
          fontWeight={"600"}
        >
          Total Supply : {coin.total_supply.toFixed(2)}
        </Text>
        <Text
          textTransform="uppercase"
          letterSpacing={"1px"}
          fontWeight={"600"}
        >
          Max Supply : {coin.max_supply ? coin.max_supply : "Unknown"}
        </Text>
      </Flex>
      <Stack>
        <Text
          textTransform="uppercase"
          letterSpacing={"1px"}
          fontWeight={"600"}
        >
          Circulating Supply :{" "}
          <span style={{ fontWeight: "400", letterSpacing: "0.5px" }}>
            {coin.circulating_supply.toFixed(2)}
          </span>
        </Text>
        <Text
          textTransform="uppercase"
          letterSpacing={"1px"}
          fontWeight={"600"}
        >
          All Time High :{" "}
          <span style={{ fontWeight: "400", letterSpacing: "0.5px" }}>
            ₹{coin.ath}
          </span>
        </Text>
        <Text
          textTransform="uppercase"
          letterSpacing={"1px"}
          fontWeight={"600"}
        >
          Last Updated :{" "}
          <span style={{ fontWeight: "400", letterSpacing: "0.5px" }}>
            {coin.last_updated.toString()}
          </span>
        </Text>
      </Stack>
    </Container>
  );
};
