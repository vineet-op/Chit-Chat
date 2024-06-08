import React from "react";
import { Skeleton, Stack } from "@chakra-ui/react";

const ChatLoading = () => {
  return (
    <Stack mt={5} gap={4}>
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
    </Stack>
  );
};

export default ChatLoading;
