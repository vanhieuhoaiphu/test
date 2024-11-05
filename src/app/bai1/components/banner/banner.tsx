"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { ArrowRight } from "lucide-react";

import styles from "./index.module.css";

export function CarouselDemo() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className={styles.carouselItem}>
                <Image
                  src={
                    isMobile
                      ? "/assets/mobile.jpg"
                      : "/images/test1/Mask Group.png"
                  }
                  style={{
                    objectFit: "cover",
                  }}
                  alt=""
                  layout={isMobile ? "fill" : "responsive"}
                  {...(!isMobile && { width: 0, height: 0 })}
                />

                {isMobile && (
                  <div className={styles.carouselTitle}>
                    <h2 style={{ fontSize: "24px" }}>Chicky Run</h2>
                    <div className={styles.carouselDetails}>
                      <h2>Game Details</h2>
                      <ArrowRight size={"12px"} />
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className={styles.slideActions}>
        <div className={styles.carouselIcon}></div>
        <div className={styles.carouselIcon}></div>
        <div className={styles.circleBorder}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.carouselIcon}></div>
        <div className={styles.carouselIcon}></div>
      </div>
    </div>
  );
}
