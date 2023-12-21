/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

      return new ImageResponse(
        <div
          style={{
            backgroundColor: '#CCCCCC', // dark background
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2em',
          }}
        >
          <img
            src='https://jhs-six.vercel.app/img/logo.png'
            alt='logo'
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              marginBottom: '1em',
              backdropFilter: 'blur(10px)', // make the logo a bit transparent
            }}
          />
          <div
            style={{
              color: '#ffffff', // white text
              fontSize: '48px',
              fontWeight: 'bold', // bold text
              textAlign: 'center',
            }}
          >
            {title?.toUpperCase()}
          </div>
        </div>,
      );
  } catch (e: any) {
    console.error(e);
    return new Response('Failed to generate the image', { status: 500 });
  }
}