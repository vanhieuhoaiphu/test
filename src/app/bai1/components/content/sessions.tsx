"use client";
import { Icon20_allgameA302cd6SvgIcon } from "@/components/Icons/Icon20_allgameA302cd6SvgIcon";
import { Icon20_homepageFacb932SvgIcon } from "@/components/Icons/Icon20_homepageFacb932SvgIcon";
import { Icon20_search21bc271SvgIcon } from "@/components/Icons/Icon20_search21bc271SvgIcon";
import { Icon20_timelinepage5d075c0SvgI } from "@/components/Icons/Icon20_timelinepage5d075c0SvgI";
import { useMediaQuery } from "react-responsive";
import HotGame from "../hotgame";
import HottestCategory from "../hottestcategory";
import classes from "./index.module.css";
import { Icon20_filterD6ce38dSvgIcon } from "@/components/Icons/Icon20_filterD6ce38dSvgIcon";

const NavBar = [
  {
    text: "Search",
    icon: Icon20_search21bc271SvgIcon,
    hori: true,
  },
  {
    text: "Game Home",
    icon: Icon20_homepageFacb932SvgIcon,
    isActive: true,
  },
  {
    text: "Timeline",
    icon: Icon20_timelinepage5d075c0SvgI,
  },
  {
    text: "All Games",
    icon: Icon20_allgameA302cd6SvgIcon,
  },
];
const NavBarMobile = [
  {
    text: "Home",
    icon: Icon20_homepageFacb932SvgIcon,
  },
  {
    text: "Timeline",
    icon: Icon20_timelinepage5d075c0SvgI,
  },
  {
    text: "All Games",
    icon: Icon20_allgameA302cd6SvgIcon,
    isActive: true,
  },
  {
    text: "Search",
    icon: Icon20_search21bc271SvgIcon,
  },
  {
    text: "Filter",
    icon: Icon20_filterD6ce38dSvgIcon,
    hori: true,
  },
];

export default function Session() {
  const isMobile = useMediaQuery({
    query: "(max-width: 760px)",
  });

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.menu}>
          {(isMobile ? NavBarMobile : NavBar)?.map((item) => (
            <div
              key={item.text}
              className={`${classes.action} ${
                item.isActive ? classes.active : ""
              }  ${item.hori ? classes.horizontal : ""}`}
            >
              <item.icon />
              <label>{item.text}</label>
            </div>
          ))}
        </div>
        <div style={{ flex: "1" }} className={classes.content}>
          <HotGame />
          <HottestCategory />
        </div>
      </div>
    </div>
  );
}
