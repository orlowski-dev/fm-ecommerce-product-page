import "./Navigation.scss";

const links = [
  { name: "Collections", path: "/" },
  { name: "Men", path: "/" },
  { name: "Women", path: "/" },
  { name: "About", path: "/" },
  { name: "Contact", path: "/" },
];

export const DesktopNavigation = () => {
  return (
    <nav className="dsk-only desktop-navigation" id="desktop-nav">
      <ul>
        {links.map((link, index: number) => (
          <a href={link.path} key={index}>
            <li>{link.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export const MobileNavigation = () => {
  return (
    <nav className="mbl-only mobile-navigation" id="mobile-nav">
      <ul>
        {links.map((link, index: number) => (
          <a href={link.path} key={index}>
            <li>{link.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};
