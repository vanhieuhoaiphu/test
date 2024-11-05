"use client";
import { MoreIcon } from "@/components/Icons/MoreIcon";
import classes from "./index.module.css";
import { White_logoIcon2 } from "@/components/Icons/White_logoIcon2";
import { useState } from "react";
import { X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
const MenuHeader = [
  { text: "ABOUT", isActive: false },
  { text: "GAMES", isActive: true },
  { text: "PARTNERS" },
  { text: "CONTACT US" },
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
          <div>
            <div className={classes["menu-item"]}>
              <Popover>
                <PopoverTrigger asChild>
                  <div>
                    <Image
                      src={"/assets/78e0c9406a81fbb09f1d7a70fa3ac969.png"}
                      alt=""
                      width={"40"}
                      height={"40"}
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div
                    style={{
                      display: "flex",
                      columnGap: "10px",
                      alignItems: "center",
                      borderBottom: "1px solid #C4C4C4",
                    }}
                  >
                    <Image
                      src={"/assets/1d84c4886fb2e673f2f9443c82a6404b.png"}
                      alt=""
                      width={"40"}
                      height={"40"}
                    />
                    <label>Vietnamese</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      columnGap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={"/assets/78e0c9406a81fbb09f1d7a70fa3ac969.png"}
                      alt=""
                      width={"40"}
                      height={"40"}
                    />

                    <label>English</label>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
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
