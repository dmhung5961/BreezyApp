import PropTypes from "prop-types";

import Button from "../../ui/Button";

import { useCheckOut } from "../bookings/useCheckOut";

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkout } = useCheckOut();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

CheckoutButton.propTypes = {
  bookingId: PropTypes.number,
};

export default CheckoutButton;
