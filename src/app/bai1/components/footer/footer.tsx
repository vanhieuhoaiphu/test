"use client";
import classes from "./index.module.css";

import { White_logoIcon } from "@/components/Icons/White_logoIcon";
import { useMediaQuery } from "react-responsive";
import { PlusIcon } from "lucide-react";
import { Twitter8aef3bbSvgIcon } from "@/components/Icons/Twitter8aef3bbSvgIcon";
import { Linkedin612a2c3SvgIcon } from "@/components/Icons/Linkedin612a2c3SvgIcon";
import { Youtube98263c9SvgIcon } from "@/components/Icons/Youtube98263c9SvgIcon";

const Data = [
  {
    titleHeader: "WEB MAP",
    items: [
      { text: "Home", isActive: false },
      { text: "Games", isActive: true },
      { text: "News" },
      { text: "Math" },
      { text: "Company" },
      { text: "Events" },
      { text: "Partners" },
    ],
  },
  {
    titleHeader: "ABOUT US",
    items: [
      { text: "Licensing", isActive: false },
      { text: "Certification", isActive: true },
      { text: "Responsible Gaming" },
      { text: "Exhibitions" },
      { text: "Copyright Protection" },
      { text: "Privacy Policy" },
    ],
  },
  {
    titleHeader: "EVENTS",
    items: [
      { text: "PG ICE 2017", isActive: false },
      { text: "PG ICE 2018", isActive: true },
      { text: "PG ICE 2019" },
      { text: "About ICE" },
    ],
  },
  {
    titleHeader: "OUR PARTNERS",
    items: [
      { text: "Relax Gaming", isActive: false },
      { text: "Leander Games", isActive: true },
    ],
  },
];
const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 760px)",
  });
  return (
    <footer>
      {!isMobile && <div className={classes["bg-footer"]}></div>}
      <footer className={classes.footer}>
        <div>
          <div className={classes["container-item"]}>
            {!isMobile && (
              <div className={classes.street}>
                <div style={{ marginBottom: "15px" }}>
                  <White_logoIcon />
                </div>
                <div className={classes.vallettaBuildingsSouthStreetVa}>
                  <div>Valletta Buildings, South Street,</div>
                  <div>Valletta - VLT 1103 Malta</div>
                </div>
                <div className={classes["icon-style"]}>
                  <Twitter8aef3bbSvgIcon
                    style={{ height: "20px", width: "auto" }}
                  />
                  <Linkedin612a2c3SvgIcon
                    style={{ height: "20px", width: "auto" }}
                  />
                  <Youtube98263c9SvgIcon
                    style={{ height: "20px", width: "auto" }}
                  />
                </div>
              </div>
            )}

            <div className={classes["container-item"]}>
              {Data?.map((item) => (
                <div
                  key={item.titleHeader}
                  onClick={(e) => {
                    const content = e.currentTarget.querySelector(
                      `.${classes.listItem}`
                    ) as HTMLElement;
                    if (content) {
                      content.style.display =
                        content.style.display === "none" ? "block" : "none";
                    }
                  }}
                >
                  <div className={classes["headeing-footer"]}>
                    {item.titleHeader}
                    {isMobile && <PlusIcon size={"14px"} color="#464646" />}
                  </div>
                  <div
                    className={classes.listItem}
                    style={isMobile ? { display: "none" } : {}}
                  >
                    {item?.items?.map((item2) => (
                      <div
                        className={classes["item-menu-footer"]}
                        key={item2.text}
                        style={{ marginTop: "10px" }}
                      >
                        <div className={classes.news}>{item2.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.horizontalDivider}></div>
        {isMobile && (
          <div className={classes.div15}>
            <div>
              <div
                style={{
                  marginTop: "10px",
                }}
                className={classes["item-menu-footer"]}
              >
                Valletta Buildings, South Street,
              </div>
              <div
                style={{
                  marginTop: "10px",
                }}
                className={classes["item-menu-footer"]}
              >
                Valletta - VLT 1103 Malta
              </div>
            </div>
          </div>
        )}
        <div className={classes["item-menu-footer"]}>
          COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
        </div>
        {isMobile && (
          <div className={classes["icon-style"]}>
            <Twitter8aef3bbSvgIcon />
            <Linkedin612a2c3SvgIcon />
            <Youtube98263c9SvgIcon />
          </div>
        )}
      </footer>
    </footer>
  );
};

export default Footer;
