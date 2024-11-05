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

import classes from "./index.module.css";

export function CarouselDemo() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  return (
    <div className={classes.container}>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className={classes.carousel}>
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
                  <div className={classes["carousel-title"]}>
                    <h2>Chicky Run</h2>
                    <div className={classes["carousel-details"]}>
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
      <div className={classes["slide-action"]}>
        <div className={classes["icon-carousel"]}></div>
        <div className={classes["icon-carousel"]}></div>
        <div className={classes["cricle-border"]}>
          <div className={classes["cricle"]}></div>
        </div>
        <div className={classes["icon-carousel"]}></div>
        <div className={classes["icon-carousel"]}></div>
      </div>
    </div>
  );
}
