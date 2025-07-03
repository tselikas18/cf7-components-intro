import {useEffect} from "react";
import {useParams} from "react-router";

const UserPage = () => {
  const {userId} = useParams();

  useEffect(() => {
    document.title = `User with id: ${userId}`;
  }, []);
  return (
      <>
        <h1>user with id: 12</h1>
      </>
  )
}

export default UserPage;