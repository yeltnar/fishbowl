import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const uuid_v4 = require('uuid/v4');

const too_many_ideas = "You already sent all your ideas";

function App() {

  let [ideas_left_count, setIdeasLeftCount] = useState(3);
  let [idea_value, setIdeaValue] = useState("");
  let user_idea = localStorage.getItem("fishbowl_user_id") || getNewUserId();
  let [idea_arr, setIdeaArr] = useState([]);

  return (
    <div className="App">
      <div>Ideas left {ideas_left_count}</div>
      <input type="text" value={idea_value} default="bad" onChange={ideaValueChange}></input>
      <br/>
      <button onClick={()=>{ addIdea(user_idea, idea_value) }}>Submit</button>
      <br/>
      <div>{idea_arr.join(",")}</div>
    </div>
  );

  function ideaValueChange(asfd){
    setIdeaValue(asfd.target.value);
  }

  function addIdea( user_id, idea ){
    const new_idea_count = ideas_left_count-1;
    if( new_idea_count<0 ){
      alert(too_many_ideas);
    }else{
      setIdeasLeftCount( new_idea_count );
      idea_arr.push(idea);
      console.log( idea_arr );
      setIdeaArr( idea_arr );
      setIdeaValue("");
    }
  }
  
  function getNewUserId(){
    return uuid_v4();
  }
}

export default App;
