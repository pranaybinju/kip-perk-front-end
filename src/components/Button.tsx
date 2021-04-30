export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "solid" | "ghost" | "outline";
  hoverVariant: "solid" | "ghost" | "outline";
}
const Button = (props: ButtonProps) => {
  let className = ``;

  switch (props.variant) {
    case "solid":
      className = `border border-primary bg-primary text-white`;
      break;
    case "outline":
      className = `border border-primary text-primary`;
      break;
    case "ghost":
      className = `border-none text-primary`;
      break;
  }

  switch (props.hoverVariant) {
    case "solid":
      className += ` duration-300 hover:bg-primary hover:text-white`;
      break;
    case "outline":
      className += ` duration-300 hover:border hover:border-primary hover:text-primary`;
      break;
    case "ghost":
      className += ` duration-300 hover:border-none hover:text-primary`;
      break;
  }

  return (
    <button
      className={`rounded-md text-center p-2  w-20 ${className} ${props.className}`}
      {...{...props, variant: null, hoverVariant: null}}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  variant: "solid",
  hoverVariant: "solid",
};
export default Button;
