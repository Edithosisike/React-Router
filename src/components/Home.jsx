import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  return (
    <div> home{" "}
      <button
        onClick={() => {
          navigate("/frontend");
        }}
      >
        {""}
        change to frontend
      </button>
    </div>
  );
}

export default Home;