import CabinTable from "../components/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../components/cabins/AddCabin";
import CabinTableOperation from "../components/cabins/CabinTableOperation";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <CabinTableOperation />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
