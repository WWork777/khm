import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/mainPage/Hero/Hero";
import About from "./components/mainPage/About/About";
import Products from "./components/mainPage/Products/Products";
import Contacts from "./components/mainPage/Contacts/Contacts";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Products/>
    <Contacts/>
    </>
  );
}
