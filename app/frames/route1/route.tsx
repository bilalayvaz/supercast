import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
  const foo = ctx.searchParams.foo;

  return {
    imageOptions: { aspectRatio: "1:1" },
    image: (
      <div tw="flex">
        <img 
          src="/images/castScheduling.png" 
          alt="schedule"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    ),
    buttons: [
      <Button action="post" target="/">
        Go back
      </Button>,
      <Button action="post" target="/route2">
        Go to route 2
      </Button>,
    ],
  };
});
