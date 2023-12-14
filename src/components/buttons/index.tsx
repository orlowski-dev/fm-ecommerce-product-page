import "./buttons.scss";

export const IconButton = (
  props: React.HTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }
) => {
  const { children, ...rest } = props;
  return (
    <button {...rest} className="btn icon-button" aria-description="">
      {children}
    </button>
  );
};
