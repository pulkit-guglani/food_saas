// Third-party packages
import { useQuery } from "@tanstack/react-query";

// Custom packages
import { getUserDetail } from "@/api";

export function useUser() {
  return useQuery({
    queryKey: ["profile/jp"],
    queryFn: () => getUserDetail().then((res) => res),
    retry: false,
  });
}
