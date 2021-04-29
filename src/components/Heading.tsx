interface HeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

const Heading = (props: HeadingProps) => {
  return (
    <h1 className={`font-medium text-2xl ${props.className}`}>
      {props.children}
    </h1>
  );
};

export default Heading;
