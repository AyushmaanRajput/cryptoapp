import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const Pagination = ({ page, totalPages = 25, setPage }) => {
  const coins = useSelector((store) => store.appReducer.coins);
  return (
    <>
      {coins.length > 0 ? (
        <Flex gap="1rem" alignItems={"center"} justifyContent={"center"}>
          <Button
            size={"sm"}
            variant={1 == page ? "disabled" : "outline"}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
};
