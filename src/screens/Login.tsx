import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import Button from "../components/Button";
import Image from "../components/Image";
import Heading from "../components/Heading";
import Input from "../components/Input";
import FormLabel from "../components/FormLabel";
import Text from "../components/Text";
import Gift from "../assets/undraw_gift1.svg";

function Login() {
  const { register, errors } = useForm();
  return (
    <Container className="text-black h-full flex justify-center items-center">
      <Image
        alt="login-img"
        className="h-80 w-40 flex-1 object-contain"
        src={Gift}
      />
      <Container className="m-10 flex-1 bg-white">
        <Container className="py-8 px-8 rounded-md shadow-lg">
          <Heading className="font-medium text-2xl text-center">Login</Heading>

          <form>
            <Container className="my-5 text-sm">
              <FormLabel htmlFor="username" className="block">
                Username
              </FormLabel>
              <Input
                type="text"
                ref={register}
                autoFocus
                id="username"
                className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full"
                placeholder="Username"
              />
            </Container>

            <Container className="my-5 text-sm">
              <FormLabel htmlFor="password" className="block ">
                Password
              </FormLabel>
              <Input
                type="password"
                ref={register}
                id="password"
                className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none  w-full"
                placeholder="Password"
              />
              <Container className="flex justify-end mt-2 text-xs">
                <Link to="/reset">
                  <Text className="text-primary">{"Forgot Password?"}</Text>
                </Link>
              </Container>
            </Container>

            <Button variant="outline" hoverVariant="solid">
              Login
            </Button>
          </form>

          <Text className="mt-12 text-xs text-center font-light flex justify-center">
            <Text className="text-gray">{"Don't have an account?"}</Text>
            <Link to="/register" className="text-black font-medium">
              <Text className="ml-1 text-primary">{"Register"}</Text>
            </Link>
          </Text>
        </Container>
      </Container>
    </Container>
  );
}

export default Login;
