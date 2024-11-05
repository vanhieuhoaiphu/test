import { useMediaQuery } from "react-responsive";
import classes from "./index.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const HostGame = [
  {
    icon: "/assets/app_icon_small3xF4729b69Png.png",
    banner: "/assets/home_banner_en3x3f8420fcPng.png",
    title: "Mahjong Ways",
    description:
      "4TECH™ has just launched their very first Mahjong inspired slot machine gam…",
    button: {
      text: "view",
    },
  },
  {
    icon: "/assets/app_icon_small3x2014dac2Png.png",
    banner: "/assets/hB54478fa6Png.png",
    title: "Wild Bandito",
    description:
      "Águila which means ‘The Eagle’ is a three- person Mexican bandit team that is activ",
    button: {
      text: "view",
    },
  },
];
export default function HotGame() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  return (
    <div>
      <div className={classes["title-session"]}>
        <p className={classes["custom-font-style"]}>Hot Game</p>
        {!isMobile ? (
          <div style={{ display: "flex", height: "30px" }}>
            <ChevronLeft />
            <ChevronRight />
          </div>
        ) : (
          <Select>
            <SelectTrigger style={{ width: "120px" }}>
              <SelectValue
                placeholder="Release Date"
                style={{ width: "120px" }}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="awst">
                Australian Western Standard Time (AWST)
              </SelectItem>
              <SelectItem value="acst">
                Australian Central Standard Time (ACST)
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>
      <div className={classes.grid}>
        {HostGame?.slice(0, isMobile ? 1 : 2)?.map((item) => (
          <div
            className={classes.cardHotGame}
            key={item.title}
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <div>
              <Image
                src={item.banner}
                alt="1"
                width={0}
                height={0}
                layout="responsive"
              />
              <div className={classes["info-card"]}>
                <Image src={item.icon} alt="2" width={100} height={100} />
                <div>
                  <p className={classes["custom-text-style1"]}>{item.title}</p>
                  <p style={{ fontSize: "13px" }}>{item.description}</p>
                </div>
                {item?.button && !isMobile && (
                  <Button className={classes["button-view"]}>View</Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
