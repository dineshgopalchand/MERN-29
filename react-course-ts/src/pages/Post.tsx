import { useFetch } from "usehooks-ts";
import Card from "../UI/Card";

const url = `http://jsonplaceholder.typicode.com/posts`;

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Post() {
  const { data: postList, error } = useFetch<IPost[]>(url);

  if (error) return <p>There is an error.</p>;
  if (!postList) return <p>Loading...</p>;
  const postListElement = postList.map((post) => {
    const cardHeader = <b>{post.title}</b>;
    const cardBody = <div>{post.body}</div>;
    const cardFooter = <div>
        <a style={{
            border:'1px solid blue',
            backgroundColor:'lightblue',
            textDecoration:'none'
        }} href={`post/${post.id}`}>View Post</a>
    </div>
    return (
      <div className="col-3 my-1" key={post.id}>
        <Card header={cardHeader} body={cardBody} footer={cardFooter}/>
      </div>
    );
  });
  return (
    <>
    <div className="c-card">sadfsd</div>
      <div className="row">{postListElement}</div>
    </>
  );
}
