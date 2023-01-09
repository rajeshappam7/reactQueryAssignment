import React from "react";
import { useParams } from "react-router-dom";
import { useUserData } from "./View-user";

const ViewUserDetails = () => {
  const { id } = useParams();
  const { isLoading, data, isError, error, isFetching } = useUserData(id);
  if (isLoading || isFetching) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <p>UserName:{data?.data.name}</p>
      <p>UserEmail:{data?.data.email}</p>
      <p>UserNumber:{data?.data.number}</p>
    </div>
  );
};
export default ViewUserDetails;
