import Add from "@/components/Add";
import End from "@/components/End";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Testomonials from "@/components/Testomonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Login />
      <Feature />
      <Add />
      <Testomonials />
      <End />
      <Footer />
    </>
  );
}
