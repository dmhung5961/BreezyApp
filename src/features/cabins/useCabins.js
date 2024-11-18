import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"], //identifies each data which would be read from the cache
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}
