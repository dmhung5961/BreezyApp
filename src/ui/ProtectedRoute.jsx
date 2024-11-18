import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "./Spinner";

import { useUser } from "../features/authentication/useUser";

const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-grey-50);
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthorizing, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isAuthorizing) navigate("/login");
  }, [isAuthenticated, isAuthorizing, navigate]);

  if (isAuthorizing) {
    //*If it's loading the user, show the spinner
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  if (isAuthenticated) return children; //*If it's authenticated, return all the routes
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
