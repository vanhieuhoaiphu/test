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

import styles from "./index.module.css"; // Changed to 'styles' for clarity

export function CarouselDemo() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  return (
    <div className={styles.carouselContainer}> {/* Renamed to 'carouselContainer' */}
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className={styles.carouselItem}> {/* Renamed to 'carouselItem' */}
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
                  <div className={styles.carouselTitle}> {/* Renamed to 'carouselTitle' */}
                    <h2>Chicky Run</h2>
                    <div className={styles.carouselDetails}> {/* Renamed to 'carouselDetails' */}
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
      <div className={styles.slideActions}> {/* Renamed to 'slideActions' */}
        <div className={styles.carouselIcon}></div> {/* Renamed to 'carouselIcon' */}
        <div className={styles.carouselIcon}></div> {/* Renamed to 'carouselIcon' */}
        <div className={styles.circleBorder}> {/* Renamed to 'circleBorder' */}
          <div className={styles.circle}></div> {/* Renamed to 'circle' */}
        </div>
        <div className={styles.carouselIcon}></div> {/* Renamed to 'carouselIcon' */}
        <div className={styles.carouselIcon}></div> {/* Renamed to 'carouselIcon' */}
      </div>
    </div>
  );
}
