import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async () => {
  return {
    imageOptions: { aspectRatio: "1:1" },
    image: (
      <div tw="flex">
        <img 
          src="/images/moxieAndDegenClaim.png" 
          alt="schedule"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    ),
    buttons: [
      <Button action="post" target="/route2">
        Go to initial route
      </Button>,
      <Button
        action="post"
        target={{ pathname: "/route3", query: { foo: "baz" } }}
      >
        Go to route 3
      </Button>,
    ],
  };
});
