import { Container, Button } from "./";

export default function Modal({
  isOpen,
  hideModal,
  title,
  footer,
  children,
}: any) {
  return (
    <>
      {isOpen ? (
        <>
          <Container className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <Container className="relative w-3xl my-6 mx-auto">
              {/*content*/}
              <Container className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <Container className="flex items-start justify-between p-lg border-b border-solid border-blueGray-200 rounded-t">
                  <h4 className="text-3xl font-semibold text-primary">
                    {title}
                  </h4>
                  <Button
                    className="p-1 ml-auto  border-0 text-black  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={hideModal}
                  >
                    ×
                  </Button>
                </Container>
                {/*body*/}
                <Container className="relative px-6 flex-auto overflow-auto h-80 max-h-80">
                  {children}
                </Container>
                {/*footer*/}
                <Container className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  {footer}
                </Container>
              </Container>
            </Container>
          </Container>
          <Container className="opacity-25 fixed inset-0 z-40 bg-black"></Container>
        </>
      ) : null}
    </>
  );
}
