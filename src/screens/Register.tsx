import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import FormLabel from "../components/FormLabel";
import Text from "../components/Text";

function Register() {
  const { register, errors } = useForm();
  return (
    <Container className="text-black h-full flex justify-center items-center  shadow-md">
      <Container className="bg-white w-96 p-8 rounded-xl">
        <Heading className="font-medium text-2xl text-black mt-3 text-center">
          Register
        </Heading>

        <form>
          <Container className="my-5 text-sm">
            <FormLabel htmlFor="username" className="block">
              Username
            </FormLabel>
            <Input
              type="text"
              autoFocus
              ref={register}
              id="username"
              className="rounded-md px-4 py-3 mt-3 focus:outline-none border border-gray-500 w-full"
              placeholder="Username"
            />
          </Container>

          <Container className="my-5 text-sm">
            <FormLabel htmlFor="password" className="block">
              Password
            </FormLabel>
            <Input
              type="password"
              ref={register}
              id="password"
              className="rounded-md px-4 py-3 mt-3 focus:outline-none border border-gray-500 w-full"
              placeholder="Password"
            />
          </Container>

          <Container className="my-5 text-sm">
            <FormLabel htmlFor="password" className="block">
              Confirm Password
            </FormLabel>
            <Input
              type="password"
              id="password"
              ref={register}
              className="rounded-md px-4 py-3 mt-3 focus:outline-none border border-gray-500 w-full"
              placeholder="Password"
            />
            <Container className="flex justify-end mt-2 text-xs text-gray-600">
              <Link to="/reset">
                <Text className="text-primary">{"Forgot Password?"}</Text>
              </Link>
            </Container>
          </Container>

          <Button variant="outline" hoverVariant="solid">
            Register
          </Button>
        </form>

        <Text className="mt-12 text-xs text-center font-light flex justify-center">
          <Text className="text-gray">{" Already have an account?"}</Text>
          <Link to="/login" className="text-black font-medium">
            <Text className="ml-1 text-primary">{"Login"}</Text>
          </Link>
        </Text>
      </Container>
    </Container>
  );
}

export default Register;
