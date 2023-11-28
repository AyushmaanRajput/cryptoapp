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
          defaultValue={"INR"}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="INR">₹INR</option>
          <option value="USD">$USD</option>
          <option value="EUR">€EURO</option>
        </Select>
      </Flex>
    </Flex>
  );
};
