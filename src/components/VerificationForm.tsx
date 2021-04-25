import { Controller, useFormContext } from "react-hook-form";
import Container from "../components/Container";
import Textarea from "../components/Textarea";
import FormLabel from "../components/FormLabel";
import { CheckboxGroup, Checkbox } from "../components/Checkbox/CheckboxGroup";
import { useCallback } from "react";

const VerificationForm = ({ type, claimToVerify }: any) => {
  const { register, errors, control } = useFormContext();

  return (
    <Container className="flex flex-col text-md">
      <form>
        <Container className="my-5 text-black">
          {type === "Reject" && (
            <>
              <FormLabel htmlFor="reason" className="block">
                {`Reason for Rejection`}
              </FormLabel>
              <Textarea
                name="reason"
                autoFocus
                ref={register({
                  required: true,
                })}
                id="reason"
                className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full h-20"
                placeholder="Enter Reason"
              />
            </>
          )}

          {type === "Approve" && (
            <>
              <FormLabel htmlFor="note">{`Notes for Approval`}</FormLabel>
              <Textarea
                name="note"
                ref={register({
                  required: true,
                })}
                autoFocus
                id="note"
                className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full h-20"
                placeholder="Enter Notes"
              />
            </>
          )}
        </Container>

        <FormLabel htmlFor="username" className="block text-black">
          {`Acknowledged by:`}
        </FormLabel>
        <Controller
          name="witnesses"
          control={control}
          as={
            <CheckboxGroup>
              {claimToVerify?.Witnesses.map((witness: any) => (
                <Checkbox
                  className="text-black"
                  label={`${witness.FirstName} ${witness.LastName}`}
                  name={`${witness.FirstName} ${witness.LastName}`}
                  value={`${witness.EmpId}`}
                ></Checkbox>
              ))}
            </CheckboxGroup>
          }
        />
      </form>
    </Container>
  );
};

export default VerificationForm;
