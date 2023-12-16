import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { Card, CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

type gallery = {
    _id: string,
    title: string,
    image: string | any,
    description: string,
    date: string,
}


export async function Gallery() {

    const gallery = await client.fetch(`*[_type == "gallery"]{
        _id,
        title,
        image{
            asset->{
                _id,
                url,
                metadata{
                    lqip
                }
            }
        },
        description,
        date
    }`)

    return (
        <div>

            <div className='flex flex-col items-center justify-center p-1'>
                <h1
                className='text-3xl font-bold text-center text-gray-800 md:text-4xl'
                >Gallery</h1>
                <h2
                className='text-l font-semibold text-center text-gray-800 md:text-xl'
                >
                    Memorys capture in the frame
                    <div 
                    className='flex justify-center'
                    >
                    <Separator
                    className='w-4/5 h-1 mt-1 bg-gray-800 rounded-full'
                    />
                    </div>
                </h2>
            </div>

            <div className='md: flex flex-wrap justify-evenly'>
                {gallery.map((g: gallery) => (
                    <div key={g._id} className='p-2'>
                        <Card className='w-full md:w-96 rounded-sm hover:drop-shadow-xl'>
                            <Image
                                src={urlForImage(g.image)}
                                alt={g.title}
                                width={500}
                                height={500}
                                layout='responsive'
                                objectFit='cover'
                                quality={80}
                                placeholder='blur'
                                blurDataURL={g.image.asset.metadata.lqip}
                                className='rounded-t-sm'
                                loading='lazy'
                            />
                            <CardDescription className='pl-1'>
                                {g.title} <br />
                                {g.description} <br />
                                {g.date}
                            </CardDescription>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Gallery