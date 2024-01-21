import "@/styles/globals.css";
import { Provider } from "react-redux";
import store, { persistor } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tanmay Assignment</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
