import React, { useState } from "react";
import dayjs from "dayjs";
import { StarIcon } from "@heroicons/react/solid";
import { Container, Heading, Image, Text } from "../components";
import { verificationJSON } from "../data/verification";
import LocalStorageService from "../utils/localstorage";
import { ClaimEnum, VerificationStatusEnum } from "../data/enum";
import { colorMapper } from "../utils/color-mapper";
function Home() {
  const [verification] = useState(
    LocalStorageService.readItem("verification")
      ? JSON.parse(
          //@ts-ignore
          LocalStorageService.readItem("verification")
        )
      : verificationJSON
  );
  console.log(verification);

  return (
    <Container className="flex flex-col mx-auto p-10 w-11/12 text-gray-700">
      <Heading className="text-primary mb-5">Your Feed</Heading>
      {verification
        .filter(
          (verification: any) =>
            verification.Status === VerificationStatusEnum.Approved
        )
        .map((approvedVerification: any) => (
          <Container
            className={`flex justify-between bg-white  bg-gradient-to-r from-transparent to-${colorMapper(
              approvedVerification.ClaimFor
            )} py-4 shadow-md rounded-lg mb-4`}
          >
            <Container className="flex flex-col ml-4">
              <Image
                className="mx-4 rounded-full h-10 w-10 object-cover self-center"
                src={approvedVerification.ImageURL}
              />

              <Text className="text-3xl font-bold">{`${approvedVerification.FirstName} ${approvedVerification.LastName}`}</Text>
            </Container>

            <Container className="self-center">
              <Container className="flex flex-row">
                <StarIcon className="h-5 w-5 text-yellow-500 align-text-bottom inline" />

                <Text className="text-xl ml-1 font-bold">{`earned ${approvedVerification.PointsToClaim} Points for`}</Text>
              </Container>

              <Text className="text-purple-500 text-lg font-bold ml-1">
                {ClaimEnum[approvedVerification.ClaimFor]}
              </Text>
            </Container>

            <Container className="relative self-center mr-8">
              <Text className="font-black text-md">
                {dayjs(approvedVerification.ClaimDate).format("dd DD/MM/YYYY")}
              </Text>
            </Container>
          </Container>
        ))}
    </Container>
  );
}

export default Home;
