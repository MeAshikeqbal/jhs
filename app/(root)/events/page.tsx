
import { client } from '@/sanity/lib/client'

export async function Events(){
  
  const events = await client.fetch(`*[_type == "events"]{
    _id,
    title,
    description,
    date{
      yyyy,
    },
    image{
      asset->{
        _id,
        url,
        metadata{
          lqip
        }
      }
    }
  } `)
  
  return (
    <div>
      <h1>Events</h1>
    </div>
  )
}

export default Events