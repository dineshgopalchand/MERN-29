import React from "react";
import { useParams } from "react-router-dom";

const GitFollower = (props: any) => {
  const paramsValue = useParams();
  console.log(paramsValue);

//   https://api.github.com/users/defunkt/followers?page=2&per_page=2
  return <div>GitFollower</div>;
};

export default GitFollower;
