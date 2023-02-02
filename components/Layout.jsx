// components/layout.js

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      {/* <NewHeader /> */}
      <Header/>
      <main style={{ minHeight: '100vh' }}>{children}</main>
      <Footer />
    </>
  );
}
