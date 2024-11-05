import classes from "./index.module.css";

import { ArrowRight } from "lucide-react";
import { AntDesignTwitterOutlinedIcon } from "@/components/Icons/AntDesignTwitterOutlinedIcon";
import { AntDesignFacebookFilledIcon } from "@/components/Icons/AntDesignFacebookFilledIcon";
import { AntDesignLinkedinFilledIcon } from "@/components/Icons/AntDesignLinkedinFilledIcon";
import { VuesaxBoldLocationIcon } from "@/components/Icons/VuesaxBoldLocationIcon";
import { VuesaxBoldMobileIcon } from "@/components/Icons/VuesaxBoldMobileIcon";
import { White_logoIcon2 } from "@/components/Icons/White_logoIcon2";

const Footer = () => {
  return (
    <footer className={classes["bg-footer"]}>
      <div className={classes.hori}></div>
      <footer className={classes.footer}>
        <div>
          <div className={classes.container31}>
            <div className={classes["logo-container"]}>
              <div style={{ marginBottom: "15px" }}>
                <White_logoIcon2 className={classes.icon14} />
              </div>

              <div className={classes["icon-container"]}>
                <AntDesignTwitterOutlinedIcon />
                <AntDesignFacebookFilledIcon />
                <AntDesignLinkedinFilledIcon />
              </div>
            </div>

            <div className={classes.class1}>
              <div>
                <div className={classes["font-700"]}>Address</div>

                <div style={{ display: "flex", columnGap: "10px" }}>
                  <VuesaxBoldLocationIcon style={{ height: "40px" }} />
                  Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                  US
                </div>
                <div
                  style={{
                    display: "flex",
                    columnGap: "10px",
                    marginTop: "40px",
                  }}
                >
                  <VuesaxBoldMobileIcon
                    color={"white"}
                    style={{ height: "40px" }}
                  />
                  Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                  US
                </div>
                <div>(+1) 555-0108-000 or (+236) 555-0108</div>
              </div>
              <div className={classes.sub}>
                <div className={classes["font-700"]}>Subscribe</div>
                <div>
                  Subscribe to our newsletter and be the first to know about our
                  updates
                </div>
                <div className={classes["custom-transparent-box"]}>
                  <input placeholder="Enter your email" />
                  <ArrowRight style={{ color: "white" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.horizontalDivider}></div>

        <div className={classes.cOPYRIGHT20152024ALLRIGHTSRESE}>
          2017 Copyright. Policy.
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
