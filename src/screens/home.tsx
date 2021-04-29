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

  return (
    <Container className="flex flex-col mx-auto p-4 w-11/12 text-gray-700">
      <Heading className="text-primary mb-5">Your Feed</Heading>
      {verification
        .filter(
          (verification: any) =>
            verification.Status === VerificationStatusEnum.Approved
        )
        .map((approvedVerification: any) => (
          <Container
            className={`grid grid-flow-col grid-cols-3 grid-rows-1 gap-16 bg-white  bg-gradient-to-r from-transparent to-${colorMapper(
              approvedVerification.ClaimFor,
              "100"
            )} p-4 shadow-md rounded-lg mb-4`}
          >
            <Container className="flex flex-col ">
              <Image
                className="mx-4 rounded-full h-10 w-10 object-cover self-center"
                src={approvedVerification.ImageURL}
              />

              <Text className="text-3xl font-bold text-center">{`${approvedVerification.FirstName} ${approvedVerification.LastName}`}</Text>
            </Container>

            <Container className="flex flex-1 flex-col self-center align-end">
              <Container className="flex flex-row">
                <StarIcon className="h-8 w-8 text-yellow-500 align-text-bottom inline" />

                <Text className="text-xl ml-1 font-bold">{`earned ${approvedVerification.PointsToClaim} Points for`}</Text>
              </Container>

              <Text
                className={`text-${colorMapper(
                  approvedVerification.ClaimFor,
                  "500"
                )} text-lg font-bold ml-1`}
              >
                {ClaimEnum[approvedVerification.ClaimFor]}
              </Text>
            </Container>

            <Container className="relative self-center mr-8">
              <Text className="font-black text-md text-center">
                {dayjs(approvedVerification.ClaimDate).format("dd DD/MM/YYYY")}
              </Text>
            </Container>
          </Container>
        ))}
    </Container>
  );
}

export default Home;
