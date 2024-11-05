"use client";
import Image from "next/image";
import classes from "./index.module.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMediaQuery } from "react-responsive";
import { VuesaxBoldPeopleIcon } from "@/components/Icons/VuesaxBoldPeopleIcon";
import { VuesaxBoldPenTool2Icon } from "@/components/Icons/VuesaxBoldPenTool2Icon";
import { VuesaxBoldCalendarTickIcon } from "@/components/Icons/VuesaxBoldCalendarTickIcon";
import { MapIcon } from "@/components/Icons/MapIcon";
const Card = [
  {
    title: "E-Space",
    banner: "/assets/bitmap.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    title: "The Last Game",
    banner: "/assets/bitmap2.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "E-Space",
    banner: "/assets/bitmap3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "E-Space",
    banner: "/assets/bitmap4.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "E-Space",
    banner: "/assets/bitmap5.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "E-Space",
    banner: "/assets/bitmap6.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "E-Space",
    banner: "/assets/bitmap7.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "E-Space",
    banner: "/assets/bitmap8.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "E-Space",
    banner: "/assets/bitmap9.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "E-Space",
    banner: "/assets/bitmap10.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "E-Space",
    banner: "/assets/bitmap11.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Kingland",
    banner: "/assets/bitmap12.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function Session() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  const renderItem = (list: any) =>
    list?.map((item: any) => (
      <div
        key={item.title}
        className={classes["grid-item"]}
        style={{
          backgroundImage: `linear-gradient(360deg, rgba(0, 9, 225, 0.5) 6.79%, rgba(0, 0, 0, 0) 61.34%), url(${item.banner})`,
        }}
      >
        <p className={classes["custom-font-style"]}>{item.title}</p>
        <p>{item.description}</p>
      </div>
    ));
  return (
    <div style={{ marginTop: "128px" }}>
      <div className={classes.about}>
        <div>
          <h2 className={classes["about-us"]}>About Us</h2>
          <p>
            Browse our selection of free online games and have a great time
            without leaving the site! Our Kids Games option also includes game
            reviews, extensive game cheats and walkthroughs, and much more. We
            have exclusive free downloads, videos, and articles as well. Etech
            reviews the most popular kids games from all the most popular video
            gaming platforms, so you don’t need to search around for fun
            anywhere else on the Internet. Explore a whole new world of gaming
            on Etech.
          </p>
          <div></div>
          <div className={classes.number}>
            <div>
              <p className={classes.text}>
                600<span style={{ fontSize: "40px" }}>M</span>+
              </p>
              <p>Users</p>
            </div>
            <div>
              <p className={classes.text}>135+</p>
              <p>Games</p>
            </div>
          </div>
        </div>
        <div className={classes["custom-background-padding"]}>
          <div className={classes["flex-start"]}>
            <div className={classes["bg-icon"]}>
              <VuesaxBoldPeopleIcon style={{ width: "24px" }} />
            </div>
            <div>
              <p style={{ fontSize: "24px", fontWeight: 700 }}>24-Hour</p>
              <p>
                24/7 access ensures operators&apos; businesses runs smoothly all
                year long.
              </p>
            </div>
          </div>
          <div className={classes["flex-container1"]}>
            <div className={classes["bg-icon"]}>
              <VuesaxBoldPenTool2Icon style={{ width: "24px" }} />
            </div>
            <div>
              <p className={classes["custom-font-style2"]}>Design</p>
              <p>
                Combining imaginative universes, play dynamics, and
                unprecedented gameplay, our games transcend the boundaries of
                the virtual world by weaving innovative gameplay.
              </p>
            </div>
          </div>
          <div className={classes["flex-container1"]}>
            <div className={classes["bg-icon"]}>
              <VuesaxBoldCalendarTickIcon style={{ width: "24px" }} />
            </div>

            <div>
              <p className={classes["custom-font-style2"]}>Team</p>
              <p>
                Etech is an award-winning, international studio of designers,
                artists, animators and producers that create content for the
                biggest names in film and video games.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "68px" }}>
        <Image
          src={"/assets/illustrator.png"}
          alt="banner"
          width={"400"}
          className={classes["custom-auto-margin"]}
          height={0}
        />

        <MapIcon className={classes.earth} />
      </div>
      <div className={classes["custom-margin"]}>
        <p className={classes["custom-text-style3"]}>Our Games</p>
        <p style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
          As a pioneer of mobile app gamification, we take pride in originality
          and individuality, providing global players with state-of-the-art
          games that feature splendid storylines, sensational sound effects and
          magnificent animation that never cease to impress.
        </p>
      </div>
      <div className={classes.ourgame}>
        <div>{renderItem(Card?.slice(0, 3))}</div>
        <div style={{ marginTop: "40px" }}>{renderItem(Card?.slice(3, 6))}</div>
        {!isMobile && (
          <>
            <div>{renderItem(Card?.slice(6, 9))}</div>
            <div style={{ marginTop: "40px" }}>
              {renderItem(Card?.slice(9, 12))}
            </div>
          </>
        )}
      </div>

      <div className={classes["custom-full-width "]}>
        <div>
          <p
            className={classes["about-us"]}
            style={{ textAlign: "center", marginTop: "128px" }}
          >
            Our Partners
          </p>
        </div>
        <Carousel
          style={{ width: "100%" }}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent style={{ width: "100%" }}>
            {[
              "/assets/rectangle56.png",
              "/assets/rectangle55.png",
              "/assets/rectangle54.png",
              "/assets/rectangle53.png",
              "/assets/rectangle52.png",
            ].map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className={classes["custom-flex-center"]}>
                  <Image
                    src={item}
                    height={120}
                    width={120}
                    alt=""
                    layout="responsive"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
