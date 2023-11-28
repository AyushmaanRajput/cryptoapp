import { Flex, Input, Stack, Select } from "@chakra-ui/react";
import React from "react";

export const Toolbar = ({ setSearch, setOrder, setCurrency }) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Input
        placeholder="Search Crypto Coin"
        maxW="500px"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flex alignItems={"center"} gap="1rem">
        <Select
          placeholder="Sort By Market Cap"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="market_cap_asc">Low To High</option>
          <option value="market_cap_desc">High To Low</option>
        </Select>
        <Select
          placeholder="Currency"
          defaultValue={"inr"}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="inr">₹INR</option>
          <option value="usd">$USD</option>
          <option value="eur">€EURO</option>
        </Select>
      </Flex>
    </Flex>
  );
};
