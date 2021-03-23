import React from 'react';
import './App.css';
import PostCard from './components/PostCard';

function App() {
  return (
    <div className="App">
      <h1>HMPasteBin</h1>
      <label className="label" htmlFor="title">Title</label>
      <input id="title" type="text" placeholder="Enter post title..."></input>
      <br/>
      <br/>
      <label className="content-label label" htmlFor="content">Content</label>
      <textarea id="content" cols={50} rows={4} placeholder="Enter post content..."></textarea>
      <br/>
      <br/>
      <button className="submit-button">Submit</button>
      <br/>
      <br/>
      <hr/>
      <PostCard/>
    </div>
  );
}

export default App;
