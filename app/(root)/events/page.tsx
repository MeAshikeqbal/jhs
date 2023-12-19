
import { client } from '@/sanity/lib/client'


type Event = {
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

  const currentEventsQuery = `*[_type == "events" && date == "${currentDate}"]{
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
  const currentEvents = await client.fetch(currentEventsQuery);

  return (
    <div>
      <h1>Events</h1>
      <h2>Current Events</h2>
      <ul>
        {currentEvents.map((event:Event) => (
          <li key={event.title}>{event.title}</li>
        ))}
      </ul>
      <h2>Future Events</h2>
      <ul>
        {futureEvents.map((event:Event) => (
          <li key={event.title}>{event.title}</li>
        ))}
      </ul>
      <h2>Past Events</h2>
      <ul>
        {pastEvents.map((event:Event) => (
          <li key={event.title}>{event.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Events