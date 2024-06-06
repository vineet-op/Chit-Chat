import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "./context/ChatProvider";
import SideDrawer from "./SubComponent/SideDrawer";
import MyChats from "./SubComponent/MyChats";
import ChatBox from "./SubComponent/ChatBox";

import { Box } from "@chakra-ui/react";

const Chatpage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
        h={"91.5"}
        p={"10px"}
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default Chatpage;
