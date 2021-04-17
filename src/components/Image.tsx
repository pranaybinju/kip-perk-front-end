interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}
const Image = (props: ImageProps) => {
  return <img {...props} />;
};

export default Image;
