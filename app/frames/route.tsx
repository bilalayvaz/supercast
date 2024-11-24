import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  
  return {
    image: <div tw="flex">Welcome</div>,
    imageOptions: { aspectRatio: "1:1" },
    buttons: [
      // With query params
      <Button
        action="post"
        target={{ pathname: "/route1", query: { foo: "bar" } }}
      >
        Go to route 1
      </Button>,
      // Without query params
      <Button action="post" target="/route2">
        Go to route 2
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
