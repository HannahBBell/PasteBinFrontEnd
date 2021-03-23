import React, { useEffect, useState } from 'react';
import './App.css';
import PostCard from './components/PostCard';

interface postTypes {
  id: number,
  title: string | null,
  content: string
};

function App() {

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [allPosts, setAllPosts] = useState<postTypes[]>([]);
  // console.log(titleInput)
  // console.log(contentInput)

  //Inserts new post into db 
  const updatePost = async() => {
    console.log("Update function called")
    const dataToSend = {
      title: titleInput,
      content: contentInput
    }
    const response = await fetch("https://hmpastebin.herokuapp.com/posts", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    setTitleInput("")
    setContentInput("")
  }

  //Gets all posts from DB 
  const getPosts = async() => {
    const response = await fetch("https://hmpastebin.herokuapp.com/posts");
    const {data} = await response.json();
    setAllPosts(data);
  }

  useEffect(() => {getPosts()}, [])
  console.log(allPosts)
  return (
    <div className="App">
      <h1>HMPasteBin</h1>
      <label className="label" htmlFor="title">Title</label>
      <input value={titleInput} id="title" type="text" placeholder="Enter post title..." onChange={event => setTitleInput(event.target.value)}></input>
      <br/>
      <br/>
      <label className="content-label label" htmlFor="content">Content</label>
      <textarea value={contentInput} id="content" cols={50} rows={4} placeholder="Enter post content..."onChange={event => setContentInput(event.target.value)} ></textarea>
      <br/>
      <br/>
      <button className="submit-button" onClick={()=> updatePost()}>Submit</button>
      <br/>
      <br/>
      <hr/>
      <PostCard/>
    </div>
  );
}

export default App;
