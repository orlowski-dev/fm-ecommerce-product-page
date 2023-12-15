import "./buttons.scss";

export const IconButton = (
  props: React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    description: string;
  }
) => {
  const { children, description, ...rest } = props;
  return (
    <button {...rest} className="btn icon-button" aria-description="">
      <span className="vh">{description}</span>
      {children}
    </button>
  );
};
