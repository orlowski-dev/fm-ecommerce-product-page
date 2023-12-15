import { useEffect, useLayoutEffect, useRef } from "react";
import "./Drawer.scss";
import { IconButton } from "./buttons";
import { motion } from "framer-motion";

interface DrawerProps {
  open?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const drawerVariants = {
  open: {
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const drawerContentVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      duration: 0.2,
    },
  },
};

const Drawer = ({ open, onClose, children }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // on open state chagne
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "auto";
  }, [open]);

  // on page size change
  useLayoutEffect(() => {
    const onScreenSizeChange = () => {
      if (window.innerWidth > 766) {
        onClose();
      }
    };
    window.addEventListener("resize", onScreenSizeChange);

    return () => window.removeEventListener("resize", onScreenSizeChange);
  }, [onClose]);

  return (
    <motion.div
      initial={{ display: "none" }}
      animate={open ? "open" : "closed"}
      variants={drawerVariants}
      className="drawer"
      ref={drawerRef}
      id="mobile-nav"
      role="navigation"
      onClick={onClose}
    >
      <motion.div
        className="content"
        animate={open ? "open" : "closed"}
        variants={drawerContentVariants}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header>
          <IconButton
            aria-description="Close menu"
            id="mobile-menu"
            description="Close menu"
            onClick={onClose}
          >
            <img src="/assets/images/icon-close.svg" alt="close icon" />
          </IconButton>
        </header>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
