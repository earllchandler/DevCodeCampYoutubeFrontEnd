import React, {useState, useEffect} from 'react';
import axios from "axios";




function App() {
  useEffect(()=> {
    getAllComments();
  },[])
  async function getAllComments(){
    try{
      let response = await axios.get('http://localhost:3009/api/comments')
      console.log(response.data);
    } 
    catch(err){
      console.console.log(err.message)
    }
  }
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
