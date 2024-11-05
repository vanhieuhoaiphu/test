import { useMediaQuery } from "react-responsive";
import styles from "./index.module.css";
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

const hostGames = [
  {
    icon: "/assets/app_icon_small3xF4729b69Png.png",
    banner: "/assets/home_banner_en3x3f8420fcPng.png",
    title: "Mahjong Ways",
    description:
      "4TECH™ has just launched their very first Mahjong inspired slot machine game…",
    button: {
      text: "View",
    },
  },
  {
    icon: "/assets/app_icon_small3x2014dac2Png.png",
    banner: "/assets/hB54478fa6Png.png",
    title: "Wild Bandito",
    description:
      "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is active",
    button: {
      text: "View",
    },
  },
];

export default function HotGame() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <p className={styles.title}>Hot Game</p>
        {!isMobile ? (
          <div className={styles.navigation}>
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
      <div className={styles.grid}>
        {hostGames.slice(0, isMobile ? 1 : 2).map((item) => (
          <div className={styles.card} key={item.title}>
            <Image
              src={item.banner}
              alt={item.title}
              width={0}
              height={0}
              layout="responsive"
            />
            <div className={styles.infoCard}>
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
              />
              <div className={styles.cardDetails}>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>

              {item.button && !isMobile && (
                <Button className={styles.viewButton}>View</Button>
              )}
            </div>
            {isMobile && (
              <div
                style={{
                  display: "flex",
                  padding: "0 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {[
                  { title: "MEDIUM", subtitle: "Volatility" },
                  { title: "95.01%", subtitle: "RTP" },
                  { title: "x5000", subtitle: "Maximum Win" },
                ]?.map(({ title, subtitle }) => (
                  <div key={title}>
                    {title && (
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                      >
                        {title}
                      </p>
                    )}
                    {subtitle && (
                      <p
                        style={{
                          opacity: "0.5",
                          fontSize: "12px",
                          fontWeight: 400,
                        }}
                      >
                        {subtitle}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
