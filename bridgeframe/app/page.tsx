
// import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
 
import { Frame, getFrameFlattened } from "frames.js";

const FRAMES_URL = process.env.FRAMES_URL || "http://localhost:3002"
const imageUrl = new URL("/gettingstarted.png", FRAMES_URL).href
const postUrl = new URL("/api/frame", FRAMES_URL).href


const initialFrame: Frame = {
  image: imageUrl,
  version: "vNext",
  buttons: [
    {
      label: "Getting Started 🚀",
      action: "post"
    },
  ],
  postUrl: postUrl,
};

// const frameMetadata = getFrameMetadata({
//   buttons: [
//       {label: 'Getting Started 🚀', action: 'post'},
//   ],
//   image: imageUrl,
//   post_url: postUrl,

// });
let frameMetadata: any = getFrameFlattened(initialFrame)

export const metadata: Metadata = {
  title: 'Frame Bridge.',
  description: 'Bridge ERC20 tokens in a Frame',
  openGraph: {
    title: 'Frame Bridge.',
    description: 'Bridge ERC20 tokens in a Frame',
    images: [imageUrl],
  },
  other: frameMetadata,
};

export default async function Page() {
    return (<div>Frame Bridge</div>);
}