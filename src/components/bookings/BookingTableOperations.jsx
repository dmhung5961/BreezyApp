import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "🔽Date: Recent First" },
          { value: "startDate-asc", label: "🔼Date: Earlier First" },
          { value: "totalPrice-asc", label: "🔼Amount: Low to High" },
          {
            value: "totalPrice-desc",
            label: "🔽Amount: High to Low",
          },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
