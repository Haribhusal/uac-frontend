import Layout from "../components/Layout";
import "../styles/globals.css";
import 'tailwindcss/tailwind.css'
import { Provider } from "react-redux";
import 'react-loading-skeleton/dist/skeleton.css'

import store from "../store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
