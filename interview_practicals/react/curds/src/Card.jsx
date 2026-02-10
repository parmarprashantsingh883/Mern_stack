import { useState } from "react";

function Card() {
  const [follow, setFollow] = useState(false);
  const [count, setCount] = useState(100);

  function handleFollow() {
    if (follow) {
      
        
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }

    setFollow(!follow);
  }

  return (
    <>
    <div style={{border:"1px solid", padding:"20px", width:"200px"}}>
      <h3>User Name</h3>
      <p>Followers: {count}</p>

      <button onClick={handleFollow}>
        {follow ? "helooooo" : "Follow"}
      </button>

    </div>
    
    
  
    </>
  );
}

export default Card;
