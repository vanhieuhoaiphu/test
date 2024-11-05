import { useMediaQuery } from "react-responsive";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import classes from "./index.module.css";
import { Music_icon87b8e70SvgIcon } from "@/components/Icons/Music_icon87b8e70SvgIcon";
import { Poker_icon7d5d412SvgIcon } from "@/components/Icons/Poker_icon7d5d412SvgIcon";

const HottestCategoryData = [
  {
    icon: "/assets/app_icon_small3x2014dac2Png.png",
    iconText: Music_icon87b8e70SvgIcon,
    title: "Music",
    bg: "#5C6EFF",
    description:
      "Music makes everything better, and these games will grove to it!",
    banner: "/assets/music_pic_enf1afa3Png.png",
    games: [
      {
        text: "1",
        icon: "/assets/app_icon_small3x1fcf1f40Png.png",
      },
      {
        text: "",
        icon: "/assets/app_icon_small3x394ce800Png2.png",
      },
      {
        text: "",
        icon: "/assets/app_icon_small3xE48dcbf8Png2.png",
      },

      {
        text: "",
        icon: "/assets/app_icon_small3x57f0ea81Png.png",
      },
    ],
  },
  {
    icon: "/assets/app_icon_small3x2014dac2Png.png",
    iconText: Poker_icon7d5d412SvgIcon,
    title: "Table Game",
    bg: "#19796A",
    description: "The classic table games for the gentlemen and ladies.",
    banner: "/assets/music_pic_enf1afa3Png.png",
    games: [
      {
        text: "1",
        icon: "/assets/app_icon_small3x1fcf1f40Png.png",
      },
      {
        text: "",
        icon: "/assets/app_icon_small3x394ce800Png2.png",
      },
      {
        text: "",
        icon: "/assets/app_icon_small3xE48dcbf8Png2.png",
      },

      {
        text: "",
        icon: "/assets/app_icon_small3x57f0ea81Png.png",
      },
    ],
  },
];
export default function HottestCategory() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  return (
    <div className={classes.mt10}>
      <div className={classes["title-session"]}>
        <p className={classes["text-title"]}>Hottest Category</p>
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
      <div className={classes.grid} style={{ marginTop: "30px" }}>
        {HottestCategoryData?.slice(0, isMobile ? 1 : 2)?.map((item) => (
          <div key={item.title} className={classes.cardHottest}>
            <div className={classes["flex-space"]}>
              <div
                className={classes["card-item"]}
                style={{
                  background: item.bg,
                }}
              >
                <div className={classes["card-item-square"]}>
                  <item.iconText />
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={classes["grid-column"]}>
                {item.games.slice(0, 2)?.map((game) => (
                  <Image
                    src={game.icon}
                    alt="2"
                    width={0}
                    height={0}
                    layout="responsive"
                    key={game.text}
                  />
                ))}
              </div>
            </div>
            <div className={classes["flex-space"]}>
              <div className={classes["grid-column"]}>
                {item.games.slice(2, 4)?.map((game) => (
                  <Image
                    src={game.icon}
                    alt="2"
                    width={0}
                    height={0}
                    layout="responsive"
                    key={game.text}
                  />
                ))}
              </div>
              <div className={classes.image}>
                <Image
                  style={{ objectFit: "cover", borderRadius: "20px" }}
                  src={item.banner}
                  alt="2"
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {isMobile && (
        <div className={classes["slide-action"]}>
          <div className={classes["icon-carousel"]}></div>
          <div className={classes["icon-carousel"]}></div>
          <div
            style={{
              borderRadius: "50%",
              border: "1px solid #9B9B9B",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                margin: "4px",
                background: "#9B9B9B",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div className={classes["icon-carousel"]}></div>
          <div className={classes["icon-carousel"]}></div>
        </div>
      )}

      {isMobile && (
        <div className={classes["flex-center"]}>
          <Button className={classes["load-more"]}>Load more +</Button>
        </div>
      )}
    </div>
  );
}
