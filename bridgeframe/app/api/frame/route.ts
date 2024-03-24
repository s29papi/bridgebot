import { NextRequest, NextResponse } from 'next/server';

const FRAMES_URL = process.env.FRAMES_URL || "http://localhost:3002"
const imageUrl = new URL("/selectroute.png", FRAMES_URL).href
const postUrl = new URL("/api/frame/find", FRAMES_URL).href

async function getResponse(req: NextRequest): Promise<NextResponse> {
  return  new NextResponse(`<!DOCTYPE html><html><head>
      <title>Search</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="og:image" content="${imageUrl}"/>
      <meta property="fc:frame:image" content="${imageUrl}"/>
      <meta property="fc:frame:input:text" content="E.g (1, 2)" />
      <meta property="fc:frame:button:1" content="Enter Route" />
      <meta property="fc:frame:button:1:action" content="post"/>
      <meta property="fc:frame:post_url" content="${postUrl}"/>
    </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
