import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import Table from "../components/Table";
import makeData from "../components/Table/makeData";

function Home() {
  const { register, errors } = useForm();
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const data = useMemo(() => makeData(100), []);

  return (
    <Container className="text-black h-full flex justify-center items-start">
      <Table pageSize={5} pageCount={20} columns={columns} data={data} />
    </Container>
  );
}

export default Home;
