import axios from "axios";
import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
import { IGitUser } from "../interface/getUset.interface";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const GitUser = () => {
  const [since, setSince] = useState(0);
  const [userList, setUserList] = useState([] as IGitUser[]);
  const [isLoading, setIsLoading] = useState(false);

  const [startPage, setStartPage] = useState(0);
  useEffect(() => {
    setIsLoading(false);
    axios({
      method: "GET",
      url: "https://api.github.com/users",
      params: {
        since,
        per_page: 10,
      },
    })
      .then((res) => res.data)
      .then((newUserList: IGitUser[]) => {
        setUserList((prevUseList) => [...prevUseList, ...newUserList]);
        setStartPage((prev) => prev + 1);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        setIsLoading(true);
      });
  }, [since]);
  const loadFunc = (event: any) => {
    setTimeout(() => {
      console.log(event);
      const lastElementId = userList.length > 0 ? userList.slice(-1)[0].id : 0;
      console.log(lastElementId);
      setSince(lastElementId);
    }, 2000);
  };
  return (
    <>
      <h3>Git User List</h3>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={isLoading}
        loader={
          <div
            className="loader text-center d-flex justify-content-center mb-2"
            key={startPage}
          >
            <Spinner animation="border" variant="primary" />
            Loading ...
          </div>
        }
      >
        <div className="row my-3">
          {userList.map((user) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-3 " key={user.id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={user.avatar_url}
                    alt={user.login}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                    <Link
                      to={`/git-user/${user.login}`}
                      className="btn btn-primary me-1"
                    >
                      View Profile
                    </Link>
                    <Link
                      to={`/git-user/${user.login}/followers`}
                      className="btn btn-primary"
                    >
                      Follower List
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        className="pagination-list"
      /> */}
    </>
  );
};

export default GitUser;
