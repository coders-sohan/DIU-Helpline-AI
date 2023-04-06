import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [chat, setChat] = useState();
  const [update, setUpdate] = useState();

  useEffect(() => {
    fetch("https://diu-helpline-ai-server.vercel.app/api/v1/send-message")
      .then((res) => res.json())
      .then((data) => {
        setChat(data);
      });
  }, [update]);

  return (
    <>
      <Navbar
        chat={chat}
        setChat={setChat}
        update={update}
        setUpdate={setUpdate}
      />
      <Home
        chat={chat}
        setChat={setChat}
        update={update}
        setUpdate={setUpdate}
      />
    </>
  );
}

export default App;
