import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { IGitUserDetail } from "../interface/getUset.interface";

const GitProfile = () => {
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({} as IGitUserDetail);
  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `https://api.github.com/users/${userId}`,
    })
      .then((res) => res.data)
      .then((newUserList: IGitUserDetail) => {
        setUserDetails(newUserList);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);
  return (
    <>
      {isLoading ? (
        <div className="loader text-center d-flex justify-content-center mb-2">
          <Spinner animation="border" variant="primary" />
          Loading ...
        </div>
      ) : (
        <>
          <div className="user-details">
            {/* {JSON.stringify(userDetails)} */}
            <img src={userDetails.avatar_url} alt={userDetails.name} />
            <h3>{userDetails.name}</h3>
            <Link
              to={`/git-user/${userDetails.login}/followers`}
              className="btn btn-primary me-1"
            >
              Followers
            </Link>
            <Link
              to={`/git-user/${userDetails.login}/repos`}
              className="btn btn-primary me-1"
            >
              Repo
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default GitProfile;
