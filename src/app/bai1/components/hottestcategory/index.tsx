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
import styles from "./index.module.css"; // Updated to `styles` for clarity
import { Music_icon87b8e70SvgIcon } from "@/components/Icons/Music_icon87b8e70SvgIcon copy";
import { Poker_icon7d5d412SvgIcon } from "@/components/Icons/Poker_icon7d5d412SvgIcon";

const hottestCategories = [
  {
    icon: "/assets/app_icon_small3x2014dac2Png.png",
    iconComponent: Music_icon87b8e70SvgIcon,
    title: "Music",
    backgroundColor: "#5C6EFF",
    description:
      "Music makes everything better, and these games will groove to it!",
    banner: "/assets/music_pic_enf1afa3Png.png",
    games: [
      { text: "1", icon: "/assets/app_icon_small3x1fcf1f40Png.png" },
      { text: "", icon: "/assets/app_icon_small3x394ce800Png2.png" },
      { text: "", icon: "/assets/app_icon_small3xE48dcbf8Png2.png" },
      { text: "", icon: "/assets/app_icon_small3x57f0ea81Png.png" },
    ],
  },
  {
    icon: "/assets/app_icon_small3x2014dac2Png.png",
    iconComponent: Poker_icon7d5d412SvgIcon,
    title: "Table Game",
    backgroundColor: "#19796A",
    description: "The classic table games for gentlemen and ladies.",
    banner: "/assets/music_pic_enf1afa3Png.png",
    games: [
      { text: "1", icon: "/assets/app_icon_small3x1fcf1f40Png.png" },
      { text: "", icon: "/assets/app_icon_small3x394ce800Png2.png" },
      { text: "", icon: "/assets/app_icon_small3xE48dcbf8Png2.png" },
      { text: "", icon: "/assets/app_icon_small3x57f0ea81Png.png" },
    ],
  },
];

export default function HottestCategory() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Hottest Category</p>
        {!isMobile ? (
          <div className={styles.navigation}>
            <ChevronLeft />
            <ChevronRight />
          </div>
        ) : (
          <Select>
            <SelectTrigger style={{ width: "120px" }}>
              <SelectValue placeholder="Release Date" />
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
      <div className={styles.categoryGrid}>
        {hottestCategories.slice(0, isMobile ? 1 : 2).map((category) => (
          <div key={category.title} className={styles.categoryCard}>
            <div className={styles.cardContent}>
              <div
                className={styles.cardHeader}
                style={{ background: category.backgroundColor }}
              >
                <div className={styles.cardOverride}>
                  <category.iconComponent />
                  <p>{category.title}</p>
                  <p>{category.description}</p>
                </div>
              </div>
              <div className={styles.gameIcons}>
                {category.games.slice(0, 2).map((game) => (
                  <Image
                    src={game.icon}
                    alt={game.text || "Game Icon"}
                    width={0}
                    height={0}
                    layout="responsive"
                    key={game.text}
                  />
                ))}
              </div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.gameIcons}>
                {category.games.slice(2).map((game) => (
                  <Image
                    src={game.icon}
                    alt={game.text || "Game Icon"}
                    width={0}
                    height={0}
                    layout="responsive"
                    key={game.text}
                  />
                ))}
              </div>
              <div className={styles.bannerImage}>
                <Image
                  style={{ objectFit: "cover", borderRadius: "20px" }}
                  src={category.banner}
                  alt="Banner"
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
        <div className={styles.sliderActions}>
          {[...Array(5)].map((_, index) => (
            <div key={index} className={styles.carouselIcon}></div>
          ))}
        </div>
      )}
      {isMobile && (
        <div className={styles.centeredAction}>
          <Button className={styles.loadMoreButton}>Load more +</Button>
        </div>
      )}
    </div>
  );
}
