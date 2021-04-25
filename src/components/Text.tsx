import { forwardRef } from "react";

interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}
const Text = forwardRef((props: TextProps, ref: any) => {
  return <p {...props}>{props.children}</p>;
});

export default Text;
