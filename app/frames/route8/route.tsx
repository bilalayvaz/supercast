import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async () => {
  return {
    imageOptions: { aspectRatio: "1:1" },
    image: (
      <div tw="flex">
        <img 
          src="https://r.resimlink.com/Tm2k_Z7qeI.png" 
          alt="tippingDegenInPercentage"
          width={1152} // Genişlik 444px
          height={1152} // Yükseklik 444px
        />
      </div>
    ),
    buttons: [
      <Button action="post" target="/route7">
        ← Back
      </Button>,
      <Button
        action="post"
        target={{ pathname: "/route9", query: { foo: "baz" } }}
      >
        → Next
      </Button>,
    ],
  };
});