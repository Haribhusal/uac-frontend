import * as React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

import store from "../store";

export default function App({ Component, pageProps, router }) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
