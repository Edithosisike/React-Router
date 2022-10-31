import React from 'react';
import { useNavigate } from 'react-router-dom';

function Frontend () {
  let navigate = useNavigate();
  return (
    <div> frontend{" "}
    <button
      onClick={() => {
      navigate("/backend");
    }}
      >
      {""}
      change to backend
      </button>
    </div>
  );
}

export default Frontend;