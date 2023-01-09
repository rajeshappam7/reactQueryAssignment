import { Link } from "react-router-dom";
import { useUsersData, useDeleteUser } from "./Users";
import { AiFillDelete } from "react-icons/ai";
import "./Home.css";

export const Home = () => {
  const onSuccess = (res) => {
    console.log("affect after fetching");
  };
  const onError = () => {
    console.log("affect after error");
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useUsersData(
    onSuccess,
    onError
  );

  const { mutate: deleteMethod } = useDeleteUser();

  const deleteUser = (id) => {
    deleteMethod(id);
  };

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading || isFetching) {
    return <h2>Loading</h2>;
  }
  return (
    <div className="user-container">
      <button className="user-style-btn" onClick={refetch}>
        Get all users
      </button>
      {data?.data.map((user) => {
        return (
          <div key={user.id} className="link-container">
            <div className="link-style">
              <Link to={`/user/${user.id}`}>{user.name}</Link>
              <p>{user.number}</p>
            </div>
            <span
              onClick={() => {
                deleteUser(user.id);
              }}
              className="user-del"
            >
              <AiFillDelete />
            </span>
          </div>
        );
      })}
    </div>
  );
};
