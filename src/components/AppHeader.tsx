import { useState } from "react";
import "./AppHeader.scss";
import Drawer from "./Drawer";
import { DesktopNavigation, MobileNavigation } from "./Navigation";
import ShoppingCart from "./ShoppingCart";
import { IconButton } from "./buttons";

const AppHeader = () => {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <header className="app-header">
      <div className="left-side">
        <div className="mbl-only">
          <IconButton
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="mobile-nav"
            description="Open mobile menu button"
            onClick={() => setDrawerState((prev) => !prev)}
          >
            <img src="/assets/images/icon-menu.svg" alt="menu icon" />
          </IconButton>
        </div>
        <img
          src="/assets/images/logo.svg"
          height={20}
          width={138}
          alt="sneekers logo"
          className="logo"
        />
        <DesktopNavigation />
        <Drawer
          open={drawerState}
          onClose={() => {
            setDrawerState(false);
          }}
        >
          <MobileNavigation />
        </Drawer>
      </div>
      <div className="right-side">
        <ShoppingCart />
        <IconButton description="Your profile">
          <img
            src="/assets/images/image-avatar.png"
            alt="avatar"
            className="avatar"
          />
        </IconButton>
      </div>
    </header>
  );
};

export default AppHeader;
