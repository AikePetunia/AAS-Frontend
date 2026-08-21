import { useQuery } from "@tanstack/react-query";
import { getStores } from "./getStores";

export const useStores = () => {
  return useQuery({
    queryKey: ["stores"],
    queryFn: getStores,
    // ttl
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
  });
};
