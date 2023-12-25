import Header from "@/components/Header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { store } from "../utils/store";
import { Provider } from "react-redux";
import Footer from "@/components/Footer";
import { dividerClasses } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
