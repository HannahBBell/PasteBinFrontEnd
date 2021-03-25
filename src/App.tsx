import React, { useEffect, useState } from 'react';
import './App.css';
import MappedPostCard from './components/PostCard';
import Modal from './components/modal';

export interface postTypes {
  id: number;
  title: string | null;
  content: string;
};

function App() {

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [allPosts, setAllPosts] = useState<postTypes[]>([]);
  const [isModalShown, setIsModalShown] = useState(false)
  const [selectedPostCard, setSelectedPostCard] = useState<postTypes>()
  // console.log(contentInput)


  const areInputsFilled = () => titleInput!=="" && contentInput!=="" ? true : false

  //Inserts new post into db 
  const updatePost = async() => {
    if (areInputsFilled()) {
      const dataToSend = {
        title: titleInput,
        content: contentInput
      }
      await fetch("https://hmpastebin.herokuapp.com/posts", {
        method: "POST",
        body: JSON.stringify(dataToSend),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      setTitleInput("")
      setContentInput("")
      getPosts()
    }
    else {
      alert("You dumbass why is your post incomplete?!?")
    }}

  //Gets all posts from DB 
  const getPosts = async() => {
    const response = await fetch("https://hmpastebin.herokuapp.com/posts");
    const {data} = await response.json();
    setAllPosts(data);
  }

  useEffect(() => {getPosts()}, [])
  
  const deletePosts = async(id: number) => {
    await fetch(`https://hmpastebin.herokuapp.com/posts/${id}`, {method: "DELETE"});
    getPosts();
  };

  return (
    <div className="App">
      <h1>HMPasteBin</h1>
      <p>Disclaimer: The website has been designed to look GROSS</p>
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
      <MappedPostCard setIsModalShown={setIsModalShown} allPosts={allPosts} setSelectedPostCard={setSelectedPostCard} deletePosts={deletePosts}/>
      <Modal content={selectedPostCard?.content} title={selectedPostCard?.title} isModalShown={isModalShown} setIsModalShown={setIsModalShown} />
    </div>
  );
}

export default App;
