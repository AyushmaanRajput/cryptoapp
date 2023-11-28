import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
  Flex,
  Stack,
  Image,
  Box,
  Text,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { SelectedCoin } from "./SelectedCoin";
import { Loader } from "./Loader";

export const Coins = ({ currency }) => {
  const toast = useToast();
  const { isLoading, isError, coins } = useSelector(
    (store) => store.appReducer
  );
  console.log(coins);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCoin, setSelectedCoin] = useState(null);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Stack w="100%" p={4}>
      <TableContainer mt={4}>
        <Table>
          <TableCaption>Crypto App</TableCaption>
          <Thead>
            <Tr>
              <Th textAlign={"center"}>Coins</Th>
              <Th textAlign={"center"}>Price</Th>
              <Th textAlign={"center"}>24h Change</Th>
              <Th textAlign={"center"}>Market Cap</Th>
            </Tr>
          </Thead>
          <Tbody>
            {coins.length > 0 &&
              coins.map((coin) => {
                return (
                  <Tr
                    key={coin.id}
                    transition="0.1s ease-in"
                    _hover={{ bg: "#4cd137", cursor: "pointer" }}
                    onClick={() => {
                      setSelectedCoin(coin);
                      onOpen();
                    }}
                  >
                    <Td textAlign={"center"} w="fit-content">
                      <Flex
                        alignItems={"center"}
                        justifyContent={"flex-start"}
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
                          <Text
                            textTransform={"uppercase"}
                            fontSize={"1.25rem"}
                          >
                            {coin.symbol}
                          </Text>
                          <Text>{coin.name}</Text>
                        </Stack>
                      </Flex>
                    </Td>
                    <Td textAlign={"center"}>
                      {currency == "inr"
                        ? "₹"
                        : currency == "usd"
                        ? "$"
                        : currency == "eur"
                        ? "€"
                        : ""}
                      {coin.current_price}
                    </Td>
                    <Td textAlign={"center"}>
                      <Text
                        color={
                          coin.price_change_percentage_24h > 0 ? "green" : "red"
                        }
                      >
                        {coin.price_change_percentage_24h}%
                      </Text>
                    </Td>
                    <Td textAlign={"center"}>
                      {currency == "inr"
                        ? "₹"
                        : currency == "usd"
                        ? "$"
                        : currency == "eur"
                        ? "€"
                        : ""}
                      {coin.market_cap}
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
          {selectedCoin && (
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{selectedCoin.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <SelectedCoin coin={selectedCoin} />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="teal" onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          )}
        </Table>
      </TableContainer>
    </Stack>
  );
};
