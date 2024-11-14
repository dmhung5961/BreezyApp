import styled from "styled-components";
import PropTypes from "prop-types";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import CheckoutButton from "./CheckoutButton";
import CheckinButton from "./CheckinButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;
//eslint-disable-next-line
const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.nationality}`} />
      <Guest>{guests.fullName}</Guest>
      <span>{numNights} nights</span>

      {status === "unconfirmed" && <CheckinButton bookingId={id} />}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

TodayItem.propTypes = {
  activity: PropTypes.object,
};

export default TodayItem;