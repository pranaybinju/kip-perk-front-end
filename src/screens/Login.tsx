import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

import { useForm } from "react-hook-form";
import Container from "../components/Container";
import Button from "../components/Button";
import Image from "../components/Image";
import Heading from "../components/Heading";
import Input from "../components/Input";
import FormLabel from "../components/FormLabel";
import Text from "../components/Text";
import Gift from "../assets/undraw_gift1.svg";
import React, { useCallback } from "react";
import { userJSON } from "../data/users";
import LocalStorageService from "../utils/localstorage";
function Login() {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const { loggedInUser, setCurrentUser } = useUserContext();

  const onLogin = useCallback(
    (data: any) => {
      //api call for login
      const user = userJSON.find(
        (user: any) =>
          user.UserName === data.UserName && user.Password === data.Password
      );
      if (user) {
        LocalStorageService.writeItem("loggedInUser", JSON.stringify(user));
        setCurrentUser(user);
        history.push("/");
      } else {
        return;
      }
    },
    [setCurrentUser]
  );

  return (
    <Container className="text-black h-full flex md:flex-row flex-col justify-center items-center">
      <Image
        alt="login-img"
        className="h-40 md:h-80 w-40 flex-1 object-contain"
        src={Gift}
      />
      <Container className="m-10 md:flex-1 bg-white">
        <Container className="py-8 px-8 rounded-md shadow-lg">
          <Heading className="font-medium text-2xl text-center">Login</Heading>

          <form
            onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              handleSubmit(onLogin)();
            }}
          >
            <Container className="my-5 text-sm">
              <FormLabel htmlFor="UserName" className="block">
                Username
              </FormLabel>
              <Input
                type="text"
                ref={register({
                  required: true,
                })}
                autoFocus
                id="UserName"
                name="UserName"
                className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full"
                placeholder="UserName"
              />
            </Container>

            <Container className="my-5 text-sm">
              <FormLabel htmlFor="Password" className="block ">
                Password
              </FormLabel>
              <Input
                type="Password"
                ref={register({
                  required: true,
                })}
                name="Password"
                id="Password"
                className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none  w-full"
                placeholder="Password"
              />
              <Container className="flex justify-end mt-2 text-xs">
                <Link to="/reset">
                  <Text className="text-primary">{"Forgot Password?"}</Text>
                </Link>
              </Container>
            </Container>

            <Button type="submit" variant="outline" hoverVariant="solid">
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
