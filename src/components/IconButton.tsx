import Button, { ButtonProps } from "./Button";

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
}
const IconButton = ({ icon, ...rest }: IconButtonProps) => (
  <Button {...rest}>
    <span className="-ml-px">{icon}</span>
  </Button>
);

IconButton.defaultProps = Button.defaultProps;
export default IconButton;
