import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (ev) =>{
    ev.preventDefault();
    navigate(`/room/${roomCode}`);
  };
  return (
    <div className="home-page">
    <center><h4>AddaGhor</h4></center>
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <label>Enter Room Code</label>
          <input
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            type="text"
            required
            placeholder=" Enter Room Code"
          />
        </div>
        <button type="submit">Enter Room</button>
      </form>
    </div>
  );
};

export default HomePage;
