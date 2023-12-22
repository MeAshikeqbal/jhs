import { Separator } from '@/components/ui/separator'
import { client } from '@/sanity/lib/client'
import PortableText from 'react-portable-text'

export const metadata = {
  title: 'HM Desk',
  openGraph: {
    images: [`https://${process.env.VERCEL_URL}/api/og?title=HM%20Desk&width=640&height=320`],
  },
  twitter:{
    card: 'summary_large_image',
    title: 'HM Desk',
  }

}

type HmDask = {
  name: string,
  designation: string,
  title: string,
  content: Array<string>
}

export const revalidate = 60;


export async function hmDask() {

  const hmDask = await client.fetch(`*[_type == "hmdesk"]{
    _id,
    name,
    designation,
    content,
    title
  }`)

  return (
    <article>
      <div
        className='p-3 max-w-6xl mx-auto'
      >
        <div
          className='flex flex-col items-center justify-center p-1'
        >


          <h1
            className='text-4xl font-bold text-center flex flex-col items-center justify-center text-gray-800 md:text-4xl'
          >
            {hmDask[0].title}
            <Separator
            className='w-4/5 h-1 mt-1 bg-gray-800 rounded-full'
            />
          </h1>


          <PortableText
            className=' text-gray-800 text-justify mt-2'
            content={hmDask[0].content}
          />
        </div>
      <h3 className=' text-blue-900 mt-2'>
        -{hmDask[0]?.name}, {hmDask[0]?.designation}
      </h3>
      </div>
    </article>
  )
}

export default hmDask