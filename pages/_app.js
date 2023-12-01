import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { useState } from "react";
import { StoreProvider } from "@/utils/store";
import store from "../utils/store";
import { Provider } from "react-redux";

import cartitem from "./cart";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        {/* </cartitem> */}
      </Provider>
    </>
  );
}
