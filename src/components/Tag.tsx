import Container from "./Container";
import Text from "./Text";

type TagProps = {
  size: "sm" | "lg" | "md";
  children: string;
  colorScheme: "blue" | "red" | "orange" | "green" | "violet" | "gray";
};
const Tag = (props: TagProps) => (
  <>
    <Container
      className={`rounded-full py-${props.size} px-${props.size} bg-${props.colorScheme}-100`}
    >
      <Text
        className={`text-left text-${props.size} text-${props.colorScheme}-500`}
      >
        {props.children}
      </Text>
    </Container>
  </>
);

Tag.defaultProps = {
  size: "sm",
  colorScheme: "orange",
};
export default Tag;
