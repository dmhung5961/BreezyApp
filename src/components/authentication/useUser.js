import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    isLoading: isAuthorizing,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isAuthorizing,
    user,
    error,
    isAuthenticated: user?.role === "authenticated",
  };
}
