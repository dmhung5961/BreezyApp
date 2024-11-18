import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

import Select from "../ui/Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  );
}

SortBy.propTypes = {
  options: PropTypes.array,
};

export default SortBy;
