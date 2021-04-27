interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Container = (props: ContainerProps) => {
  return <div {...props}>{props.children}</div>;
};

export default Container;
