import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
  const foo = ctx.searchParams.foo;

  return {
    imageOptions: { aspectRatio: "1:1" },
    image: (
      <div tw="flex">
        <img 
          src="https://r.resimlink.com/eJb4NiRZ.png" 
          alt="schedule"
          width={1152} // Genişlik 444px
          height={1152} // Yükseklik 444px
        />
      </div>
    ),
    buttons: [
      <Button action="post" target="/">
        ← Back
      </Button>,
      <Button action="post" target="/route2">
        → Next
      </Button>,
    ],
  };
});
