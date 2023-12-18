import BootstrapCarousel from "@/components/caroucel"
import { client } from "@/sanity/lib/client"

type poster = {
  _id: string,
  title: string,
  image: string | any,
}

export async function home() {

  const poster = await client.fetch(`*[_type == "poster" ]{
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
    }
  }`)

  console.log(poster)

  return (
    <div>

    </div>
  )
}

export default home