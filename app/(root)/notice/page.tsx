import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { client } from "@/sanity/lib/client";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import { JSX, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export const metadata = {
  title: 'Notice',
  openGraph: {
    url: 'https://jalalpurhighschool.com/notice',
    images: [`https://jhs-six.vercel.app/api/og?title=Notice&width=640&height=320`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notice',
  }

}

type notice = {
  _id: string,
  title: string,
  description: string,
  date: string,
  image: string | any,
}

export const revalidate = 60;

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

  const noticesByYear = notice.reduce((groupedNotice: any[][], notice: { date: string | number | Date; map: (arg0: (n: notice) => JSX.Element) => string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | Iterable<ReactNode> | null | undefined; }) => {
    const year = new Date(notice.date).getFullYear();

    if (!groupedNotice[year]) {
      groupedNotice[year] = [];
    }
    groupedNotice[year].push(notice);

    return groupedNotice;
  }, {});
  const sortedYears = Object.keys(noticesByYear).sort((a, b) => Number(b) - Number(a));

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
        {sortedYears.map((year) => (
          <div key={year}>
            <h2 className='text-l font-semibold text-left m-2 text-gray-800 md:text-xl'>
              {year}
              <Separator className=' w-14 h-1 mt-1 bg-gray-800 rounded-full' />
            </h2>
            {noticesByYear[year]
              .sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((n: notice) => (<div key={n._id} className='p-1.5'>
                <Dialog>
                  <DialogTrigger className="flex w-full items-start justify-start h-full p-2 text-sm font-medium text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                    <Bookmark className='w-6 h-6 text-gray-800 mr-2' />
                    {n.title} - {new Date(n.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </DialogTrigger>
                  <DialogContent>
                    <div className='flex flex-col items-center justify-center'>
                      {n.image && n.image.asset && n.image.asset.url ? (
                        <Image
                          src={n.image.asset.url}
                          alt={n.title}
                          width={500}
                          height={300}
                          placeholder='blur'
                          blurDataURL={n.image.asset.metadata.lqip}
                          className='rounded-lg'
                        />
                      ) : null}
                    </div>
                    <DialogTitle>{n.title}</DialogTitle>
                    <DialogDescription>{n.description}</DialogDescription>
                    <DialogDescription>{new Date(n.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>
              ))}

          </div>
        ))}
      </div>
    </>
  );
};

export default Notice;