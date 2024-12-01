import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "../../ui/Button";

function CheckinButton({ bookingId }) {
  return (
    <Button size="small" as={Link} to={`/checkin/${bookingId}`}>
      Check in
    </Button>
  );
}

CheckinButton.propTypes = {
  bookingId: PropTypes.number,
};

export default CheckinButton;
