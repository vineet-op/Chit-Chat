import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:4000/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat.id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chatpage;
