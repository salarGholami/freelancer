import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function useUser() {
  return useQuery({
    queryKey: ["get-uer"],
    queryFn: getUser,
    retry: false,
  });
}
