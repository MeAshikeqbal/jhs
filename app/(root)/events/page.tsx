
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { client } from '@/sanity/lib/client'
import { Calendar, CalendarCheck, CalendarDays, CalendarX } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { Key, ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, ReactPortal } from 'react'


type Event = {
  _id: string
  title: string
  description: string
  date: string
  image: {
    asset: {
      _id: string
      url: string
      metadata: {
        lqip: string
      }
    }
  }

}

export async function Events() {

  const currentDate = new Date().toISOString();

  const pastEventsQuery = `*[_type == "events" && date < "${currentDate}"]{
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
}`;

  const futureEventsQuery = `*[_type == "events" && date > "${currentDate}"]{
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
}`;

  const pastEvents = await client.fetch(pastEventsQuery);
  const futureEvents = await client.fetch(futureEventsQuery);

  return (
    <div>
      <div className='flex flex-col items-center justify-center p-1 '>
        <h1 className='text-3xl font-bold text-center text-gray-800 md:text-4xl'>
          Events
        </h1>
        <h2 className='text-l font-semibold text-center text-gray-800 md:text-xl'>
          All acadamic events
          <div className='flex justify-center'>
            <Separator className='w-4/5 h-1 mt-1 bg-gray-800 rounded-full' />
          </div>
        </h2>
      </div>
      <div>
        <div className="justify-center items-center flex-col max-w-6xl mx-auto">
          <h2 className='text-l font-semibold text-left m-2 text-gray-800 md:text-xl'>
            Upcoming Events
            <Separator className=' w-36 h-1 mt-1 bg-gray-800 rounded-full' />
          </h2>


          {futureEvents.length > 0 ? (
            futureEvents.map((event: { _id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | Iterable<ReactNode> | null | undefined; date: string | number | Date; image: { asset: { url: string | StaticImport; metadata: { lqip: string | undefined } } } }) => (
              <div
                key={event._id}
                className='flex p-1.5'
              >

                <Dialog
                >
                  <DialogTrigger
                    className="flex w-full items-start justify-start h-full p-2 text-sm font-medium text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
                  >
                    <h3
                      className='flex items-center justify-center'
                    >
                      <CalendarCheck className='w-6 h-6 text-gray-800 mr-2' />
                      {event.title} - {new Date(event.date).toLocaleDateString('en-GB',{ day: '2-digit', month: 'short', year: 'numeric' })}
                    </h3>
                  </DialogTrigger>
                  <DialogContent>
                    <Image
                      src={event.image.asset.url}
                      alt={String(event.title)}
                      width={500}
                      height={300}
                      placeholder='blur'
                      blurDataURL={event.image.asset.metadata.lqip}
                    />
                    <DialogTitle>{event.title}</DialogTitle>
                    <DialogDescription>{event.description}</DialogDescription>
                    <DialogDescription>{new Date(event.date).toLocaleDateString('en-GB',{ day: '2-digit', month: 'long', year: 'numeric' })}</DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>

            ))
          ) : (
            <p
              className='m-2 text-gray-800'
            >No event scaduled</p>
          )}
        </div>
      </div>
      <div>
        <div className="justify-center items-center flex-col max-w-6xl mx-auto">
          <h2 className='text-l font-semibold text-left m-2 text-gray-800 md:text-xl'>
            Past Events
            <Separator className=' w-36 h-1 mt-1 bg-gray-800 rounded-full' />
          </h2>
          {pastEvents.length > 0 ? (
            pastEvents.map((event: { _id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | Iterable<ReactNode> | null | undefined; date: string | number | Date; image: { asset: { url: string | StaticImport; metadata: { lqip: string | undefined } } } }) => (
              <div
                key={event._id}
                className='flex p-1.5'
              >

                <Dialog>
                  <DialogTrigger
                    className="flex w-full items-start justify-start h-full p-2 text-sm font-medium text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
                  >
                    <h3
                      className='flex items-center justify-center'
                    >
                      <CalendarX className='w-6 h-6 text-gray-800 mr-2' />
                      {event.title} - {new Date(event.date).toLocaleDateString('en-GB',{ day: '2-digit', month: 'short', year: 'numeric' })}
                    </h3>
                  </DialogTrigger>
                  <DialogContent>
                    <Image
                      src={event.image.asset.url}
                      alt={String(event.title)}
                      width={500}
                      height={300}
                      placeholder='blur'
                      blurDataURL={event.image.asset.metadata.lqip}
                    />
                    <DialogTitle>{event.title}</DialogTitle>
                    <DialogDescription>{event.description}</DialogDescription>
                    <DialogDescription> {new Date(event.date).toLocaleDateString('en-GB',{ day: '2-digit', month: 'long', year: 'numeric' })}
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>

            ))
          ) : (
            <p
              className='m-2 text-gray-800'
            >No past events</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Events