"use client";
import { MoreIcon } from "@/components/Icons/MoreIcon";
import { White_logoIcon2 } from "@/components/Icons/White_logoIcon2";
import { useState } from "react";
import { X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import styles from "./index.module.css";

const MENU_ITEMS = [
  { text: "ABOUT", isActive: false },
  { text: "GAMES", isActive: true },
  { text: "PARTNERS", isActive: false },
  { text: "CONTACT US", isActive: false },
];

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <White_logoIcon2 className={styles.logo} />
        </div>

        <nav
          className={`${isMenuVisible ? styles.show : ""} ${styles.menuList}`}
        >
          {MENU_ITEMS.map(({ text, isActive }) => (
            <div
              key={text}
              className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
            >
              {text}
            </div>
          ))}
          <div className={`${styles.languageSelector} ${styles.menuItem}`}>
            <Popover>
              <PopoverTrigger asChild>
                <div>
                  <Image
                    src="/assets/78e0c9406a81fbb09f1d7a70fa3ac969.png"
                    alt="Select language"
                    width={40}
                    height={40}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className={styles.languageOption}>
                  <Image
                    src="/assets/1d84c4886fb2e673f2f9443c82a6404b.png"
                    alt="Vietnamese flag"
                    width={40}
                    height={40}
                  />
                  <label>Vietnamese</label>
                </div>
                <div className={styles.languageOption}>
                  <Image
                    src="/assets/78e0c9406a81fbb09f1d7a70fa3ac969.png"
                    alt="English flag"
                    width={40}
                    height={40}
                  />
                  <label>English</label>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          {isMenuVisible && (
            <X
              onClick={() => setIsMenuVisible(false)}
              className={styles.iconClose}
            />
          )}
        </nav>

        <div className={styles.iconRight}>
          <MoreIcon
            className={styles.iconMore}
            onClick={() => setIsMenuVisible(true)}
          />
        </div>
      </div>
    </header>
  );
}
