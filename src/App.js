import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";
import Pagination from "./components/Pagination";
// import ClassComponent from './components/ClassComponent';
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      //  setPosts(res.data.slice(0, 12))
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // if(loading) {
  //   return <h1>Loading...</h1>
  // }

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App container">
      {/* <ClassComponent /> */}
      <h1 className="my-5">
        <span className="text-primary">Dev</span> posts
      </h1>

      <div className="posts-container">
        {loading && <h1 className="text-primary">Loading...</h1>}
        {currentPosts &&
          currentPosts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
