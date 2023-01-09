import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUser = ({ queryKey }) => {
  const userId = queryKey[1];
  return axios.get(`http://localhost:5000/users/${userId}`);
};

export const useUserData = (userId) => {
  return useQuery({ queryKey: ["user", userId], queryFn: fetchUser });
};
