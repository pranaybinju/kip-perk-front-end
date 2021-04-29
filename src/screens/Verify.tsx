import { useCallback, useMemo, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import dayjs from "dayjs";
import { toast, ToastContainer, Flip } from "react-toastify";

import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Text,
  Table,
  Button,
  IconButton,
  Modal,
  Tag,
  VerificationForm,
  Heading,
} from "../components";
import { TabPanel, TabBody, TabHeader } from "../components/TabComponent";
import useVisibilityToggler from "../hooks/useVisibilityToggler";
import { verificationJSON } from "../data/verification";
import { ClaimEnum, VerificationStatusEnum } from "../data/enum";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import LocalStorageService from "../utils/localstorage";

function Verify() {
  const [claimToVerify, setClaimToVerify] = useState<any>(null);
  const history = useHistory();
  //temp state for demo
  const [verificationData, setVerificationData] = useState(
    LocalStorageService.readItem("verification")
      ? JSON.parse(
          //@ts-ignore
          LocalStorageService.readItem("verification")
        )
      : verificationJSON
  );

  const methods = useForm();
  const {
    isOpen: isApproveFormVisible,
    onOpen: openApproveForm,
    onClose: closeApproveForm,
  } = useVisibilityToggler();

  const {
    isOpen: isRejectFormVisible,
    onOpen: openRejectForm,
    onClose: closeRejectForm,
  } = useVisibilityToggler();

  const columnsAll = useMemo(
    () => [
      {
        Header: "Name",
        accessor: ({ FirstName, LastName }: any) => (
          <Text>{`${FirstName} ${LastName}`}</Text>
        ),
      },
      {
        Header: "Claim For",
        accessor: ({ ClaimFor }: any) => (
          <Text>{`${ClaimEnum[ClaimFor]}`}</Text>
        ),
      },
      {
        Header: "Date Of Claim",
        accessor: ({ ClaimDate }: any) => (
          <Text>{`${dayjs(ClaimDate).format("DD/MM/YYYY")}`}</Text>
        ),
      },
      {
        Header: "Witnesses",
        accessor: ({ Witnesses }: any) => {
          return Witnesses.map((witness: any) => (
            <Container className="my-md">
              <Tag>{`${witness.FirstName} ${witness.LastName}`}</Tag>
            </Container>
          ));
        },
      },

      {
        Header: "Status",
        Cell: ({ row }: any) =>
          row.original.Status === VerificationStatusEnum.Approved ? (
            <Text className={`text-green-400 text-center`}>
              {VerificationStatusEnum[row.original.Status]}
            </Text>
          ) : row.original.Status === VerificationStatusEnum.Rejected ? (
            <Text className={`text-red-400 text-center`}>
              {VerificationStatusEnum[row.original.Status]}
            </Text>
          ) : (
            <Container className="flex flex-col">
              <Text className={`text-black text-center`}>{"Pending"}</Text>
              <Container className="flex flex-row justify-center ">
                <IconButton
                  onClick={() => {
                    setClaimToVerify(row.original);
                    openRejectForm();
                  }}
                  className={`mr-2 first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-transparent bg-white`}
                  icon={<XIcon className="h-5 w-5 text-red-500" />}
                ></IconButton>
                <IconButton
                  onClick={() => {
                    setClaimToVerify(row.original);
                    openApproveForm();
                  }}
                  className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-transparent bg-white`}
                  icon={<CheckIcon className="h-5 w-5 text-green-500" />}
                ></IconButton>
              </Container>
            </Container>
          ),
      },
    ],
    [openApproveForm, openRejectForm]
  );

  const columnsVerified = useMemo(
    () => [
      {
        Header: "Name",
        accessor: ({ FirstName, LastName }: any) => (
          <Text>{`${FirstName} ${LastName}`}</Text>
        ),
      },
      {
        Header: "Claim For",
        accessor: ({ ClaimFor }: any) => (
          <Text>{`${ClaimEnum[ClaimFor]}`}</Text>
        ),
      },
      {
        Header: "Date Of Claim",
        accessor: ({ ClaimDate }: any) => (
          <Text>{`${dayjs(ClaimDate).format("DD/MM/YYYY")}`}</Text>
        ),
      },

      {
        Header: "Date Of Verification",
        accessor: ({ DateOfVerification }: any) => (
          <Text>{`${dayjs(DateOfVerification).format("DD/MM/YYYY")}`}</Text>
        ),
      },

      {
        Header: "Status",
        Cell: ({ row }: any) =>
          row.original.Status === VerificationStatusEnum.Approved ? (
            <Text className={`text-green-400 text-center`}>
              {VerificationStatusEnum[row.original.Status]}
            </Text>
          ) : (
            <Text className={`text-red-400 text-center`}>
              {VerificationStatusEnum[row.original.Status]}
            </Text>
          ),
      },

      {
        Header: "Remarks",
        accessor: ({ Remarks }: any) => <Text>{`${Remarks}`}</Text>,
      },
    ],
    []
  );

  const approvedClaims = useMemo(
    () =>
      verificationData.filter(
        (datum: any) => datum.Status === VerificationStatusEnum.Approved
      ),
    [verificationData]
  );

  const rejectedClaims = useMemo(
    () =>
      verificationData.filter(
        (datum: any) => datum.Status === VerificationStatusEnum.Rejected
      ),
    [verificationData]
  );

  const pendingClaims = useMemo(
    () =>
      verificationData.filter(
        (datum: any) => datum.Status === VerificationStatusEnum.Pending
      ),
    [verificationData]
  );

  const onApproveClaim = useCallback(
    (data: any) => {
      const updatedVerification = verificationData.map((datum: any) => {
        if (datum?.ClaimId === claimToVerify.ClaimId) {
          return {
            ...datum,
            Remarks: data.note,
            DateOfVerification: dayjs().format(),
            Status: VerificationStatusEnum.Approved,
          };
        }
        return datum;
      });
      LocalStorageService.writeItem(
        "verification",
        JSON.stringify(updatedVerification)
      );

      setVerificationData(updatedVerification);

      setClaimToVerify(null);
      closeApproveForm();

      toast.success(
        `${claimToVerify.FirstName} ${claimToVerify.LastName}'s claim for ${
          ClaimEnum[claimToVerify.ClaimFor]
        } approved`,
        {
          position: toast.POSITION.TOP_CENTER,
          pauseOnHover: false,
        }
      );
    },
    [
      claimToVerify?.ClaimId,
      claimToVerify?.ClaimFor,
      claimToVerify?.FirstName,
      claimToVerify?.LastName,
      closeApproveForm,
      verificationData,
    ]
  );

  const onRejectClaim = useCallback(
    (data: any) => {
      setVerificationData(
        verificationData.map((datum: any) => {
          if (datum?.ClaimId === claimToVerify.ClaimId) {
            return {
              ...datum,
              Remarks: data.reason,
              DateOfVerification: dayjs().format(),
              Status: VerificationStatusEnum.Rejected,
            };
          }
          return datum;
        })
      );

      toast.error(
        `${claimToVerify.FirstName} ${claimToVerify.LastName}'s claime for ${
          ClaimEnum[claimToVerify.ClaimFor]
        } rejected`,
        {
          position: toast.POSITION.TOP_CENTER,
          pauseOnHover: false,
        }
      );
      LocalStorageService.writeItem(
        "verification",
        JSON.stringify(
          verificationData.map((datum: any) => {
            if (datum?.ClaimId === claimToVerify.ClaimId) {
              return {
                ...datum,
                Remarks: data.reason,
                DateOfVerification: dayjs().format(),
                Status: VerificationStatusEnum.Rejected,
              };
            }
            return datum;
          })
        )
      );
      setClaimToVerify(null);
      closeRejectForm();
    },
    [
      verificationData,
      closeRejectForm,
      claimToVerify?.ClaimId,
      claimToVerify?.ClaimFor,
      claimToVerify?.LastName,
      claimToVerify?.FirstName,
    ]
  );

  return (
    <Container>
      <Heading className="text-primary my-4">Verify Claims</Heading>

      <TabPanel color="primary">
        <TabHeader>
          <Text>{"All"}</Text>
          <Text>{"Pending"}</Text>
          <Text>{"Approved"}</Text>
          <Text>{"Rejected"}</Text>
        </TabHeader>
        <TabBody className="px-0 py-0">
          <Container>
            <Container className="text-black  flex justify-center items-start">
              <Table columns={columnsAll} data={verificationData} />
            </Container>
          </Container>

          <Container>
            <Container className="text-black  flex justify-center items-start">
              <Table columns={columnsAll} data={pendingClaims} />
            </Container>
          </Container>

          <Container>
            <Container className="text-black  flex justify-center items-start">
              <Table columns={columnsVerified} data={approvedClaims} />
            </Container>
          </Container>

          <Container>
            <Container className="text-black  flex justify-center items-start">
              <Table columns={columnsVerified} data={rejectedClaims} />
            </Container>
          </Container>
        </TabBody>
      </TabPanel>
      <FormProvider {...methods}>
        <Modal
          title={"Approve Claim"}
          isOpen={isApproveFormVisible}
          footer={
            <Container className="flex flex-row">
              <Button
                onClick={() => {
                  closeApproveForm();
                  setClaimToVerify(null);
                }}
                className="border border-primary rounded-md p-2 w-20 mr-4"
                variant="outline"
              >
                {"Cancel"}
              </Button>
              <Button onClick={methods.handleSubmit(onApproveClaim)}>
                {"Submit"}
              </Button>
            </Container>
          }
          hideModal={() => {
            closeApproveForm();
            setClaimToVerify(null);
          }}
        >
          <VerificationForm claimToVerify={claimToVerify} type="Approve" />
        </Modal>

        <Modal
          title={"Reject Claim"}
          isOpen={isRejectFormVisible}
          footer={
            <Container className="flex flex-row">
              <Button
                onClick={() => {
                  setClaimToVerify(null);
                  closeRejectForm();
                }}
                className="border border-primary rounded-md p-2 w-20 mr-4"
                variant="outline"
              >
                {"Cancel"}
              </Button>
              <Button onClick={methods.handleSubmit(onRejectClaim)}>
                {"Submit"}
              </Button>
            </Container>
          }
          hideModal={() => {
            setClaimToVerify(null);
            closeRejectForm();
          }}
        >
          <VerificationForm claimToVerify={claimToVerify} type="Reject" />
        </Modal>
      </FormProvider>
      <ToastContainer transition={Flip} autoClose={3000} />
    </Container>
  );
}

export default Verify;
