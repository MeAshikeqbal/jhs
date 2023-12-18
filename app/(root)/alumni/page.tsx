import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { client } from "@/sanity/lib/client"
import { Separator } from "@/components/ui/separator";
import Image from "next/image";


export async function alumni() {

  const alumni = await client.fetch(`*[_type == "alumni"]{
          _id,
          name,
          batch,
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


  const sortedAlumni = [...alumni].sort((a, b) => a.batch - b.batch);
  let currentBatch: null = null;

  return (
    <div>
      {sortedAlumni.map((alumni) => {
        const batchHeader = currentBatch !== alumni.batch ? (
          <h1
            className="flex flex-col items-center justify-center text-3xl font-bold text-gray-800 md:text-4xl p-4"
          >{alumni.batch}
            <Separator className="h-1 mt-1 bg-gray-800 rounded-full mb-2" />
          </h1>
        ) : null;
        currentBatch = alumni.batch;

        return (

          <div key={alumni._id} className="p-2">
            {batchHeader}
            <div className="ml-4 flex justify-center ">
              <Card
                className="flex flex-col items-center w-64 h-72 pt-3"
              >
                <CardContent>
                  <Image
                    src={alumni.image.asset.url}
                    alt={alumni.name}
                    width={500}
                    height={500}
                    className="rounded-full h-52 w-52"
                    placeholder="blur"
                    blurDataURL={alumni.image.asset.metadata.lqip}
                  />
                </CardContent>
                <CardDescription>
                  {alumni.name}
                </CardDescription>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
};



export default alumni