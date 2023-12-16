import { client } from "@/sanity/lib/client"

type Alumni = {
  name: string,
  batch: string,
  image: string,
  description: string,
}


export async function alumni() {
  const alumni = await client.fetch(`*[_type == "alumni"]{
    name,
    batch,
    image{
      asset->{
        _id,
        url,
        mataData{
          lqip
        }
      }
    },
    description,
  }`)

    return {



    }
}


export default alumni