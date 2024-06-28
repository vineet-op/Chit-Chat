import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "./context/ChatProvider";
import SideDrawer from "./SubComponent/SideDrawer";
import MyChats from "./SubComponent/MyChats";
import ChatBox from "./SubComponent/ChatBox";

import { Box } from "@chakra-ui/react";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <Box w={"100%"}>
      {user && <SideDrawer />}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
        h={"91.5"}
        p={"10px"}
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </Box>
  );
};

export default Chatpage;
