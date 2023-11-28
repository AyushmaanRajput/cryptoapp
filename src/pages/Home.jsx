import React, { useEffect, useState } from "react";
import { getCoins } from "../redux/action";
import { useDispatch } from "react-redux";
import { Coins } from "../components/Coins";
import { Pagination } from "../components/Pagination";
import { Stack, useToast } from "@chakra-ui/react";
import { Toolbar } from "../components/Toolbar";

export const Home = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    const params = {
      per_page: 10,
      page: page,
      vs_currency: currency,
    };
    // if(search){
    // }
    if (order) {
      params.order = order;
    }
    dispatch(getCoins(params, toast));
  }, [page, currency, order, search]);
  return (
    <Stack p={4} minH={"25vh"} position={"relative"}>
      <Toolbar
        search={search}
        setSearch={setSearch}
        currency={currency}
        setCurrency={setCurrency}
        order={order}
        setOrder={setOrder}
      />
      <Coins currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </Stack>
  );
};
