import "./buttons.scss";

export const IconButton = (
  props: React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    description: string;
  }
) => {
  const { children, description, ...other } = props;
  return (
    <button {...other} className="btn icon-button">
      <span className="vh">{description}</span>
      {children}
    </button>
  );
};

export const SliderButton = (
  props: React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    description: string;
  }
) => {
  const { children, description, ...other } = props;
  return (
    <button {...other} className="btn slider-button">
      <span className="vh">{description}</span>
      {children}
    </button>
  );
};

export const Button = (
  props: React.HTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }
) => {
  return (
    <button {...props} className="btn button-orange">
      {props.children}
    </button>
  );
};
