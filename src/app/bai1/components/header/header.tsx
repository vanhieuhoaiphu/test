"use client";
import { MoreIcon } from "@/components/Icons/MoreIcon";
import classes from "./index.module.css";
import { White_logoIcon2 } from "@/components/Icons/White_logoIcon2";
import { useState } from "react";
import { X } from "lucide-react";
const MenuHeader = [
  { text: "HOME", isActive: false },
  { text: "GAMES", isActive: true },
  { text: "NEWS" },
  { text: "MATH" },
  { text: "COMPANY" },
  { text: "EVENTS" },
  { text: "PARTNERS" },
];

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className={classes.header}>
      <div className={classes["header-container"]}>
        <div>
          <White_logoIcon2 className={classes.logo} />
        </div>

        <div className={`${classes["menu-list"]} ${show && classes.show}`}>
          {MenuHeader?.map((item) => (
            <div key={item.text}>
              <div
                className={`${classes["menu-item"]} ${
                  item?.isActive ? classes.active : ""
                } `}
              >
                {item.text}
              </div>
            </div>
          ))}

          <X onClick={() => setShow(false)} className={classes["icon-close"]} />
        </div>

        <div className={classes["icon-right"]}>
          <MoreIcon
            className={classes["icon-more"]}
            onClick={() => {
              setShow(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
