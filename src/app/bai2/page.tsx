"use client";
import { useEffect, useRef, useState } from "react";
import { CarouselDemo } from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Session from "./components/session/sessions";
import "./index.css";
import { ArrowDown, ArrowUp } from "lucide-react";
export default function Page() {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowIcon(false);
    } else {
      setShowIcon(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div>
      <div style={{ display: "none" }} ref={ref}></div>
      <div
        style={{
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          position: "fixed",
          top: "95vh",
          right: "40px",
          boxShadow: "0px 4px 10px 0px #0000004D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
        }}
      >
        {!showIcon ? <ArrowUp /> : <ArrowDown />}
      </div>
      <Header />
      <CarouselDemo />
      <Session />
      <Footer />
    </div>
  );
}
