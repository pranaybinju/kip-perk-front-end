import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Heading,
  Input,
  FormLabel,
  Text
} from "../components";

function Reset() {
  return (
    <Container className="text-black h-full flex justify-center items-center  shadow-md">
      <Container className="bg-white w-96 p-8 rounded-xl">
        <Heading className="font-medium text-2xl mt-3 text-center">
          Reset
        </Heading>

        <form className="mt-6">
          <Container className="my-5 text-sm">
            <FormLabel htmlFor="username" className="block">
              Username
            </FormLabel>
            <Input
              type="text"
              autoFocus
              id="username"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none border border-gray-500 w-full"
              placeholder="Username"
            />
          </Container>

          <Button variant="outline" hoverVariant="solid">
            Register
          </Button>
        </form>

        <Text className="mt-12 text-xs text-center font-light text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-black font-medium">
            Register
          </Link>
        </Text>
      </Container>
    </Container>
  );
}

export default Reset;
