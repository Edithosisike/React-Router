import React from 'react';
import { useNavigate, useParams} from 'react-router-dom';

function Users () {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div> profile{username};
    <button
      onClick={() => {
      navigate("/home");
    }}
      >
      {""}
      change to Home
      </button>
    </div>
  );
}

export default Users;