import React, { useState, useCallback, useMemo } from "react";
import dayjs from "dayjs";
import { useUserContext } from "../contexts/userContext";
import Select from "react-select";
import { createGuid } from "../utils/unique-guid";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer, Flip } from "react-toastify";

import {
  Container,
  Button,
  Heading,
  Input,
  FormLabel,
  ErrorLabel,
  Textarea,
} from "../components";
import { Checkbox, CheckboxGroup } from "../components/Checkbox/CheckboxGroup";
import LocalStorageService from "../utils/localstorage";
import { ClaimEnum, VerificationStatusEnum } from "../data/enum";
import { userJSON } from "../data/users";
import { verificationJSON } from "../data/verification";
import "react-toastify/dist/ReactToastify.css";
const validate = (val: any) => {
  return (
    (val && val.length === 2) || "Please select 2 peers who accompanied you"
  );
};
function Claim() {
  const { loggedInUser } = useUserContext();
  const { register, errors, control, reset, handleSubmit } = useForm();
  const history = useHistory();

  const [verification, setVerification] = useState(
    LocalStorageService.readItem("verification")
      ? JSON.parse(
          //@ts-ignore
          LocalStorageService.readItem("verification")
        )
      : verificationJSON
  );
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

    [loggedInUser.EmpId]
  );

  const claimOptions = useMemo(
    () =>
      loggedInUser?.Claims.map((claim: any) => {
        return {
          label: ClaimEnum[claim],
          value: claim,
        };
      }),

    [loggedInUser?.Claims]
  );

  const onApplyClaim = useCallback(
    (data: any) => {
      LocalStorageService.writeItem(
        "verification",
        JSON.stringify([
          {
            ClaimId: createGuid(),
            EmpId: loggedInUser.EmpId,
            FirstName: loggedInUser.FirstName,
            LastName: loggedInUser.LastName,
            Email: loggedInUser.Email,
            ClaimFor: data.claimType.value,
            ImageURL: loggedInUser.ImageURL,
            Witnesses: data.peers,
            PointsToClaim: 10,
            ClaimDate: dayjs(data.date).format() ?? dayjs().format(),
            Status: VerificationStatusEnum.Pending,
            Remarks: "",
            DateOfVerification: "",
            Description: data.description,
          },
          ...verification,
        ])
      );
      setVerification([
        {
          ClaimId: createGuid(),
          EmpId: loggedInUser.EmpId,
          FirstName: loggedInUser.FirstName,
          LastName: loggedInUser.LastName,
          Email: loggedInUser.Email,
          ClaimFor: data.claimType.value,
          ImageURL: loggedInUser.ImageURL,
          Witnesses: data.peers,
          PointsToClaim: 10,
          ClaimDate: dayjs(data.date).format() ?? dayjs().format(),
          Status: VerificationStatusEnum.Pending,
          Remarks: "",
          DateOfVerification: "",
          Description: data.description,
        },
        ...verification,
      ]);

      toast.success(
        `Your claim for ${ClaimEnum[data.claimType.value]} submitted`,
        {
          position: toast.POSITION.TOP_CENTER,
          pauseOnHover: false,
          onClose: () => {
            reset({});
            history.push("/home");
          },
        }
      );
    },
    [
      history,
      loggedInUser.Email,
      loggedInUser.EmpId,
      loggedInUser.FirstName,
      loggedInUser.ImageURL,
      loggedInUser.LastName,
      reset,
      verification,
    ]
  );
  return (
    <>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          handleSubmit(onApplyClaim)();
        }}
        className="w-8/12 align-start  justify-start text-black py-4 px-8 rounded-md "
      >
        <Heading className="text-primary">Submit Your Claim</Heading>
        <Container className="cursor-pointer  md:w-4/12 text-md">
          <FormLabel htmlFor="type" className="block">
            Type
          </FormLabel>
          <Controller
            name="claimType"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please select Claim type",
              },
            }}
            as={
              <Select
                options={claimOptions}
                classNamePrefix="react-select"
                placeholder="Select Claim Type"
              />
            }
          />
          {errors.claimType && (
            <ErrorLabel>{errors.claimType.message}</ErrorLabel>
          )}
        </Container>

        <Container className="cursor-pointer  mt-2 text-md">
          <FormLabel htmlFor="date" className="block">
            Date
          </FormLabel>
          <Input
            ref={register({
              required: {
                value: true,
                message: "Please enter Date",
              },
            })}
            type="date"
            name="date"
            id="date"
            className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-4/12"
          />
        </Container>

        <Container className="cursor-pointer  md:w-8/12 mt-2 text-md">
          <FormLabel htmlFor="date" className="block">
            Peers
          </FormLabel>

          <Controller
            name="peers"
            control={control}
            rules={{
              // required: true,
              validate: validate,
            }}
            as={
              <Select
                options={peerOptions}
                isMulti
                name="peers"
                classNamePrefix="react-select"
                placeholder="Select 2 peers..."
              />
            }
          />

          {errors.peers && <ErrorLabel>{errors.peers.message}</ErrorLabel>}
        </Container>

        <Container className="cursor-pointer  md:w-8/12 mt-2 text-md">
          <FormLabel htmlFor="description" className="block">
            Description
          </FormLabel>
          <Textarea
            ref={register({
              required: {
                value: true,
                message: "Please enter Description",
              },
            })}
            name="description"
            id="description"
            className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full"
          />
          {errors.description && (
            <ErrorLabel>{errors.description.message}</ErrorLabel>
          )}
        </Container>

        <Controller
          name="agreement"
          control={control}
          rules={{
            validate: (val) =>
              val.length === 1 || "Please agree to the declaration",
          }}
          as={
            <CheckboxGroup>
              <Checkbox
                className="text-black"
                label={`I hereby declare that the following submission is best to my
              knowledge.`}
                name={`agreement`}
              ></Checkbox>
            </CheckboxGroup>
          }
        />
        {errors.agreement && (
          <ErrorLabel className="text-md text-red-500">
            {errors.agreement.message}
          </ErrorLabel>
        )}
        <Container className="mt-2">
          <Button type="submit">{"Submit"}</Button>
        </Container>

        <ToastContainer transition={Flip} autoClose={3000} />
      </form>
    </>
  );
}

export default Claim;
