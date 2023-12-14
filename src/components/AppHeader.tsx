import "./AppHeader.scss";
import { DesktopNavigation } from "./Navigation";
import ShoppingCart from "./ShoppingCart";
import { IconButton } from "./buttons";

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="left-side">
        <div className="mbl-only">
          <IconButton
            aria-description="Mobile menu button"
            aria-haspopup="true"
            aria-expanded="false"
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
      </div>
      <div className="right-side">
        <ShoppingCart />
        <IconButton aria-description="Your profile">
          <img
            src="/assets/images/image-avatar.png"
            alt="avatar"
            style={{ width: 36, height: 36 }}
          />
        </IconButton>
      </div>
    </header>
  );
};

export default AppHeader;
