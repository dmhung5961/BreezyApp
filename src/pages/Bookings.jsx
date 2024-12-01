import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../components/bookings/BookingTable";
import BookingTableOperations from "../components/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <Row>
        <BookingTable />
      </Row>
    </>
  );
}

export default Bookings;
