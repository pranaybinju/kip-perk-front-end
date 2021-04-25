import { useCallback, useMemo, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Text from "../components/Text";

import Table from "../components/Table";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import { TabPanel, TabBody, TabHeader } from "../components/TabComponent";
import Modal from "../components/Modal";
import Tag from "../components/Tag";
import VerificationForm from "../components/VerificationForm";
import useVisibilityToggler from "../hooks/useVisibilityToggler";
import { verificationJSON } from "../data/verification";
import { ClaimEnum, VerificationStatusEnum } from "../data/enum";
import { FcCheckmark } from "react-icons/fc";
import { RiCloseFill } from "react-icons/ri";

function Verifications() {
  const [claimToVerify, setClaimToVerify] = useState<any>(null);

  //temp state for demo
  const [verificationData, setVerificationData] = useState(verificationJSON);
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
        accessor: ({ ClaimDate }: any) => <Text>{`${ClaimDate}`}</Text>,
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
                  icon={<RiCloseFill fill="red" size="1.5rem" />}
                ></IconButton>
                <IconButton
                  onClick={() => {
                    setClaimToVerify(row.original);
                    openApproveForm();
                  }}
                  className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-transparent bg-white`}
                  icon={<FcCheckmark size="1.5rem" />}
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
        accessor: ({ ClaimDate }: any) => <Text>{`${ClaimDate}`}</Text>,
      },

      {
        Header: "Date Of Verification",
        accessor: ({ DateOfVerification }: any) => (
          <Text>{`${DateOfVerification}`}</Text>
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
        (datum) => datum.Status === VerificationStatusEnum.Approved
      ),
    [verificationData]
  );

  const rejectedClaims = useMemo(
    () =>
      verificationData.filter(
        (datum) => datum.Status === VerificationStatusEnum.Rejected
      ),
    [verificationData]
  );

  const pendingClaims = useMemo(
    () =>
      verificationData.filter(
        (datum) => datum.Status === VerificationStatusEnum.Pending
      ),
    [verificationData]
  );

  const onApproveClaim = useCallback(
    (data: any) => {
      setVerificationData(
        verificationData.map((datum: any) => {
          if (datum?.ClaimId === claimToVerify.ClaimId) {
            return {
              ...datum,
              Remarks: data.note,
              DateOfVerification: "2021-04-25T12:49:51.141Z",
              Status: VerificationStatusEnum.Approved,
            };
          }
          return datum;
        })
      );
      setClaimToVerify(null);
      closeApproveForm();
    },
    [claimToVerify?.ClaimId, closeApproveForm, verificationData]
  );

  const onRejectClaim = useCallback(
    (data: any) => {
      setVerificationData(
        verificationData.map((datum: any) => {
          if (datum?.ClaimId === claimToVerify.ClaimId) {
            return {
              ...datum,
              Remarks: data.reason,
              DateOfVerification: "2021-04-25T12:49:51.141Z",
              Status: VerificationStatusEnum.Rejected,
            };
          }
          return datum;
        })
      );
      setClaimToVerify(null);
      closeRejectForm();
    },
    [verificationData, closeRejectForm, claimToVerify?.ClaimId]
  );

  return (
    <Container className="m-4">
      <TabPanel color="purple">
        <TabHeader>
          <Text>{"All"}</Text>
          <Text>{"Pending"}</Text>
          <Text>{"Approved"}</Text>
          <Text>{"Rejected"}</Text>
        </TabHeader>
        <TabBody>
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
    </Container>
  );
}

export default Verifications;
