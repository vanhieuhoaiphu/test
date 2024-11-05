"use client";
import { MoreIcon } from "@/components/Icons/MoreIcon";
import { White_logoIcon2 } from "@/components/Icons/White_logoIcon2";
import { useState } from "react";
import { X } from "lucide-react";
import styles from "./index.module.css";

const menuItems = [
  { text: "HOME", isActive: false },
  { text: "GAMES", isActive: true },
  { text: "NEWS" },
  { text: "MATH" },
  { text: "COMPANY" },
  { text: "EVENTS" },
  { text: "PARTNERS" },
];

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <White_logoIcon2 className={styles.logo} />

        <div className={`${styles.menuList} ${isMenuVisible ? styles.show : ''}`}>
          {menuItems.map(item => (
            <div key={item.text} className={`${styles.menuItem} ${item.isActive ? styles.active : ''}`}>
              {item.text}
            </div>
          ))}
          <X onClick={() => setIsMenuVisible(false)} className={styles.iconClose} />
        </div>

        <div className={styles.iconRight}>
          <MoreIcon
            className={styles.iconMore}
            onClick={() => setIsMenuVisible(true)}
          />
        </div>
      </div>
    </div>
  );
}
