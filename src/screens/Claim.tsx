import React, { useMemo } from "react";
import { useUserContext } from "../contexts/userContext";
import Select from "react-select";
import {
  Container,
  Button,
  Image,
  Heading,
  Input,
  FormLabel,
  ErrorLabel,
  Text,
  Textarea,
} from "../components";
import { RadioButtonGroup, RadioButton } from "../components/Radio/RadioButton";
import { Checkbox, CheckboxGroup } from "../components/Checkbox/CheckboxGroup";

import { ClaimEnum } from "../data/enum";
import { userJSON } from "../data/users";
function Claim() {
  const { loggedInUser } = useUserContext();

  const peerOptions = useMemo(
    () =>
      userJSON
        .map((user: any) => {
          return {
            ...user,
            label: `${user.FirstName} ${user.LastName}`,
            value: user.EmpId,
          };
        })
        .filter((mappedUser: any) => mappedUser.EmpId !== loggedInUser.EmpId),

    []
  );

  const claimOptions = useMemo(
    () =>
      loggedInUser?.Claims.map((claim: any) => {
        return {
          label: ClaimEnum[claim],
          value: claim,
        };
      }),

    []
  );
  return (
    <form className="w-8/12 align-start  justify-start text-black  px-8 rounded-md ">
      <Container className=" md:w-4/12 mt-2 text-md">
        <FormLabel htmlFor="type" className="block">
          Type
        </FormLabel>
        <Select
          options={claimOptions}
          classNamePrefix="react-select"
          placeholder="Select Claim Type"
        />
      </Container>

      <Container className="my-2 text-md">
        <FormLabel htmlFor="date" className="block">
          Date
        </FormLabel>
        <Input
          type="date"
          id="date"
          className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-4/12"
        />
      </Container>

      <Container className=" md:w-8/12 my-2 text-md">
        <FormLabel htmlFor="date" className="block">
          Peers
        </FormLabel>
        <Select
          options={peerOptions}
          isMulti
          classNamePrefix="react-select"
          placeholder="Select min 2 peers..."
        />
      </Container>

      <Container className="md:w-8/12 my-2 text-md">
        <FormLabel htmlFor="description" className="block">
          Description
        </FormLabel>
        <Textarea
          id="description"
          className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full"
        />
      </Container>

      <CheckboxGroup>
        <Checkbox
          className="text-black"
          label={`I hereby declare that the following submission is best to my
          knowledge.`}
          name={`agreement`}
        ></Checkbox>
      </CheckboxGroup>
      <Button type="submit">{"Submit"}</Button>
    </form>
  );
}

export default Claim;
