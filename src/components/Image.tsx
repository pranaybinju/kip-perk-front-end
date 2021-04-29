import userPlaceholder from "../assets/user_placeholder.jpg";

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}
const Image = (props: ImageProps) => {
  return <img alt="" {...props} src={props.src || userPlaceholder} />;
};

export default Image;
