interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}
const Text = (props: TextProps) => {
  return <p {...props}>{props.children}</p>;
};

export default Text;
