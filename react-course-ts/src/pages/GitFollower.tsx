import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const GitFollower = () => {
  const {userId} = useParams();
  const [searchParam,setSearchParams]=useSearchParams();
  const pageCount = 10;
  const navigate = useNavigate();
  const pageNumber=0;
  console.log(searchParam.getAll('ref'));
  const handlePageClick = ({selected}: {selected:number}) => {
    // navigate(`./?p=${selected+1}`);
    const nSearchParam=searchParam;
    nSearchParam.set('p',selected+1+'')
    navigate({
        pathname:'./',
        search:`${nSearchParam}`
    })

    // setSearchParams(sparams=>{
    //     console.log(sparams);
    //     sparams.set('p',selected+1+'')
    //     return sparams;
    // })
  };
  //   https://api.github.com/users/defunkt/followers?page=2&per_page=2
  return (
    <div>
      <h2><span style={{color:'red'}}>{ userId }</span> Follower List </h2>
      <div>Show all follower list here</div>
     <h3 className="text-center">Selected page: {pageNumber}</h3>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        className="pagination-list"
      />
    </div>
  );
};

export default GitFollower;
