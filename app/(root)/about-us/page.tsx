import { Separator } from '@/components/ui/separator';
import { client } from '@/sanity/lib/client'
import PortableText from 'react-portable-text';

type AboutUs = {
  title: string,
  content: string
}


export async function AboutUs() {
  const aboutus = await client.fetch(`*[_type == "aboutus"]{
    _id,
    title,
    content,
  }`);
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
            {aboutus[0]?.title}
            <Separator
            className='w-4/5 h-1 mt-1 bg-gray-800 rounded-full'
            />
          </h1>
        </div>
        <PortableText
        content={aboutus[0]?.content}
        className=' text-gray-800 text-justify mt-2'
        />
      </div>
    </article>

    );
}


export default AboutUs