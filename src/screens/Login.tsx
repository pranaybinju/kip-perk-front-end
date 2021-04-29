import { Link, useHistory } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

import { useForm } from "react-hook-form";
import {
  Container,
  Button,
  Image,
  Heading,
  Input,
  FormLabel,
  ErrorLabel,
  Text,
} from "../components";

import Gift from "../assets/undraw_gift1.svg";
import Bow from "../assets/bow.png";
import React, { useCallback } from "react";
import { userJSON } from "../data/users";
import { verificationJSON } from "../data/verification";
import { claims } from "../data/claim";
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

        if (LocalStorageService.readItem("verification") === null) {
          LocalStorageService.writeItem(
            "verification",
            JSON.stringify(verificationJSON)
          );
        }
        if (LocalStorageService.readItem("claims") === null) {
          LocalStorageService.writeItem("claims", JSON.stringify(claims));
        }

        setCurrentUser(user);
        history.push("/");
      } else {
        return;
      }
    },
    [setCurrentUser, history]
  );

  return (
    <Container className="p-2">
      <Container className="flex justify-center align-center">
        <Heading className="text-primary italic text-6xl flex flex-row">
          Kip-Perk
          <Image
            alt="login-img"
            className="h-14  w-20 object-contain"
            src={Bow}
          />
        </Heading>
      </Container>

      <Container className="text-black h-full flex md:flex-row flex-col justify-center items-center">
        <Image
          alt="login-img"
          className="h-40 md:h-80 w-40 flex-1 object-contain"
          src={Gift}
        />
        <Container className="m-10 md:flex-1 bg-white">
          <Container className="py-8 px-8 rounded-md shadow-lg">
            <Heading className="font-medium text-2xl text-center">
              Login
            </Heading>

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
                    required: {
                      value: true,
                      message: "Please enter Username",
                    },
                  })}
                  autoFocus
                  id="UserName"
                  name="UserName"
                  className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full"
                  placeholder="UserName"
                />
                {errors.UserName && (
                  <ErrorLabel>{errors.UserName.message}</ErrorLabel>
                )}
              </Container>

              <Container className="my-5 text-sm">
                <FormLabel htmlFor="Password" className="block ">
                  Password
                </FormLabel>
                <Input
                  type="Password"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please enter Password",
                    },
                  })}
                  name="Password"
                  id="Password"
                  className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none  w-full"
                  placeholder="Password"
                />

                {errors.Password && (
                  <ErrorLabel>{errors.Password.message}</ErrorLabel>
                )}
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
    </Container>
  );
}

export default Login;
