import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="attribution">
      <div>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/orlowski-dev"
          target="_blank"
        >
          orlowski-dev
        </a>
        .
      </div>
      <div>
        <p>
          Created with Vite and React.{" "}
          <a
            href="https://github.com/orlowski-dev/fm-ecommerce-product-page"
            target="_blank"
          >
            Source.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
