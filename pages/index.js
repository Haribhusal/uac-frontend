import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import TextInput from "../components/TextInput";
import CustomSelect from "../components/CustomSelect";
import Link from "next/link";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Interested from "../sections/Interested";
import Counter from "../components/Counter";
import Blog from "../sections/Blog";
import Services from "../sections/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Univa Education Consultancy | Putalisadak Kathmandu</title>
        <meta
          name="description"
          content="Work in Korea, Study in Korea, Work in Japan, Work in Japan, Work in Malta, Study aboroad, educational consultancy in kathmandu, consultancy in putalisadak"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/univa-logo.png" />
      </Head>
      <Hero />
      <Services/>
      <About />
      <Interested />
      <Blog />
      {/* <Counter /> */}
    </>
  );
}
