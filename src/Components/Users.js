import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const newUser = (user) => {
  return axios.post("http://localhost:5000/users", user);
};

const getUsers = () => {
  return axios.get("http://localhost:5000/users");
};

const removeUser = (id) => {
  return axios.delete(`http://localhost:5000/users/${id}`);
};

export const useUsersData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    onSuccess,
    onError,
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useAddUsersData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: newUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
