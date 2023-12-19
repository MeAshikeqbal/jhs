import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { client } from "@/sanity/lib/client";
import { Bookmark } from "lucide-react";
import Image from "next/image";


type notice = {
  _id: string,
  title: string,
  description: string,
  date: string,
  image: string | any,
}

export async function Notice() {

  const notice = await client.fetch(`*[_type == "notice" ] | order(_createdAt asc)
  {
    _id,
    title,
    description,
    date,
    image{
      asset->{
        _id,
        url,
        metadata{
          lqip
        }
      }
    }
  }`)


  return (
    <>
      <div className='flex flex-col items-center justify-center p-1 '>
        <h1 className='text-3xl font-bold text-center text-gray-800 md:text-4xl'>
          Notice
        </h1>
        <h2 className='text-l font-semibold text-center text-gray-800 md:text-xl'>
          Acadamic Notice
          <div className='flex justify-center'>
            <Separator className='w-4/5 h-1 mt-1 bg-gray-800 rounded-full' />
          </div>
        </h2>
      </div>
      <div className="justify-center items-center flex-col max-w-6xl mx-auto">
        {notice.map((n: notice) => (
          <div key={n._id} className='p-1.5'>
            <Dialog>
              <DialogTrigger
                className="flex w-full items-start justify-start h-full p-2 text-sm font-medium text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
              >
                <Bookmark className='w-6 h-6 text-gray-800 mr-2'/>
                {n.title} - {n.date}
              </DialogTrigger>
              <DialogContent>
                <div className='flex flex-col items-center justify-center'>
                  <Image
                    src={n.image.asset.url}
                    alt={n.title}
                    width={500}
                    height={300}
                    placeholder='blur'
                    blurDataURL={n.image.asset.metadata.lqip}
                    className='rounded-lg'
                  />
                </div>
                <DialogTitle>{n.title}</DialogTitle>
                <DialogDescription>{n.description}</DialogDescription>
                <DialogDescription>{n.date}</DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notice;