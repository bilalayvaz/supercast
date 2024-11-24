import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  
  return {
    image: (
      <div tw="flex">
        <img 
          src="https://r.resimlink.com/e58AK.png" 
          alt="initial"
          width={1152} // Genişlik 444px
          height={1152} // Yükseklik 444px
        />
      </div>
    ),
    imageOptions: { aspectRatio: "1:1" },
    buttons: [
      // With query params
      <Button action="post" target="/route1">
        → Next
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
