import React, { useState } from "react";
import "./App.css";
import Content from "./pages/Content";
import Nav from "./pages/Nav";

const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0,
    };
    summary[item.id].count++;
    return summary;
  }, {});

  return Object.values(groupedItems);
};

function App() {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    // mutation does not rtigger rerender
    // cart.push(item)
    // setCart(cart)
  };

  return (
    <div className="app">
      <div>{cart.length} items</div>
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="app-content">
        <Content
          cart={summarizeCart(cart)}
          onAddToCart={addToCart}
          tab={activeTab}
        />
      </main>
    </div>
  );
}

export default App;

// import React, { createContext, useState } from "react";
// import Body from "./components/Body";
// import Nav from "./components//Nav";

// import "./Context.css";

// const UserContext = createContext();

// function App() {
//   const [user, setUser] = useState({
//     avatar: "https://source.unsplash.com/random/400x400/?face",
//     name: "Somebody",
//     followers: 1234,
//     following: 123,
//   });
//   return (
//     <div className="app">
//       <UserContext.Provider value={user}>
//         <Nav user={user} />
//         <Body user={user} />
//       </UserContext.Provider>

//     </div>
//   );
// }

// // pull the data from Context with useContext hook
// export default App;

// import React, { useReducer } from "react";
// // import Slider from "./components/Slider";
// import "./App.css";

// const actionTypes = {
//   INCREMENT: "INCREMENT",
//   DECREMENT: "DECREMENT",
// };

// function reducer(state, action) {
//   console.log(action.type);
//   switch (action.type) {
//     case actionTypes.INCREMENT:
//       return state + 1;
//     case actionTypes.DECREMENT:
//       return state - 1;

//     default:
//       return state;
//   }
// }

// function App() {
//   const [count, dispatch] = useReducer(reducer, 0);

//   return (
//     <div className="App">
//       {/* <Slider /> */}
//       <h1>{count}</h1>
//       <button
//         className="counter-btn"
//         onClick={() => dispatch({ type: actionTypes.INCREMENT })}
//       >
//         +
//       </button>
//       <button
//         className="counter-btn"
//         onClick={() => dispatch({ type: actionTypes.DECREMENT })}
//       >
//         -
//       </button>

//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import "./App.css";
// import Post from "./components/Post";
// import Pagination from "./components/Pagination";
// // import ClassComponent from './components/ClassComponent';
// import axios from "axios";

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage, setPostsPerPage] = useState(12);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       console.log(res);
//       //  setPosts(res.data.slice(0, 12))
//       setPosts(res.data);
//       setLoading(false);
//     };
//     fetchPosts();
//   }, []);

//   // if(loading) {
//   //   return <h1>Loading...</h1>
//   // }

//   // get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   // change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="App container">
//       {/* <ClassComponent /> */}
//       <h1 className="my-5">
//         <span className="text-primary">Dev</span> posts
//       </h1>

//       <div className="posts-container">
//         {loading && <h1 className="text-primary">Loading...</h1>}
//         {currentPosts &&
//           currentPosts.map((post) => (
//             <Post key={post.id} title={post.title} body={post.body} />
//           ))}
//       </div>
//       <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={posts.length}
//         paginate={paginate}
//       />
//     </div>
//   );
// }

// export default App;
