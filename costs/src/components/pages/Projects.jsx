import React from "react";
import Message from "../layout/Message";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();

  let message = "";
  console.log(location);
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div>
      <h1>Meus Projetos</h1>
      {message && <Message msg={message} type="success"></Message>}
    </div>
  );
};

export default Projects;