import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { client } from "@/sanity/lib/client"
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AlumniForm from '@/components/alumniform';
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Alumni',
  openGraph: {
    url: 'https://jalalpurhighschool.com/alumni',
    images: [`https://jhs-six.vercel.app/api/og?title=Alumni&width=640&height=320`],
  },
  twitter:{
    card: 'summary_large_image',
    title: 'Alumni',
  }
}

type Alumni = {
  _id: string;
  name: string;
  batch: number;
  image: {
    asset: {
      _id: string
      url: string
      metadata: {
        lqip: string
      }
    }
  }

};

type AlumniType = {
  _id: string;
  image: {
    asset: {
      _id: string
      url: string
      metadata: {
        lqip: string
      }
    }
  }
  name: string;
};

type GroupedAlumni = Record<string, Alumni[]>;

export const revalidate = 60;

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
  }`);

  const sortedAlumni: Alumni[] = [...alumni]
  .sort((a, b) => String(a.batch).localeCompare(String(b.batch)))
  .sort((a, b) => a.name.localeCompare(b.name));

  const groupedAlumni: GroupedAlumni = sortedAlumni.reduce<GroupedAlumni>((groups, alumni) => {
    const key = alumni.batch;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(alumni);
    return groups;
  }, {});
    return (
    <div
      className="max-w-7xl mx-auto"
    >
      {Object.entries(groupedAlumni).map(([batch, alumniGroup]) => (
        <div key={batch}
          className="max-w-7xl mx-auto"
        >
          <h1
            className="flex flex-col items-center justify-center text-3xl font-bold text-gray-800 md:text-4xl p-4"
          >
            {Number(batch) - 1}-{batch}
            <Separator className="h-1 mt-1 bg-gray-800 rounded-full mb-2 max-w-full" />
          </h1>
          <div className="flex flex-wrap justify-center">
            {alumniGroup?.map((alumni: AlumniType ) => (
              <div key={alumni._id} className="p-2">
                <Card className="flex flex-col items-center min-h-96 w-64 h-full pt-3 hover:drop-shadow-xl">
                  <CardContent>
                    <Image
                      src={alumni.image.asset.url}
                      alt={alumni.name?.toString() ?? ''}
                      width={500}
                      height={500}
                      className="rounded-full h-52 w-52 object-cover"
                      placeholder="blur"
                      blurDataURL={alumni.image.asset.metadata.lqip}
                    />
                  </CardContent>
                  <CardTitle className="text-xl font-bold text-center text-gray-800 md:text-2xl">
                    {alumni.name}
                  </CardTitle>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div
        className="max-w-7xl mx-auto"
      >
        <h1
          className="flex flex-col items-center justify-center text-3xl font-bold text-gray-800 md:text-4xl p-4"
        >
          Don&apos;t see your name? or need to update your info?
          <Separator className="h-1 mt-1 bg-gray-800 rounded-full mb-2 max-w-full" />
        </h1>
        <div
          className="flex flex-col items-center justify-center"
        >

          <Dialog>
            <DialogTrigger>
              <div
                className="p-2"
              >

                <Card
                  className="flex flex-col items-center w-64 h-72 pt-3"
                >
                  <CardContent>
                    <Image
                      src="/img/add.svg"
                      alt="Add"
                      width={500}
                      height={500}
                      className="rounded-full h-52 w-52"
                    />
                  </CardContent>
                  <CardTitle className="text-xl font-bold text-center text-gray-800 md:text-2xl">
                    Add or Update
                  </CardTitle>
                </Card>
              </div>
            </DialogTrigger>
            <DialogContent
              className="bg-white w-full p-5 rounded-md shadow-md"
            >
              <AlumniForm />
            </DialogContent>
          </Dialog>
        </div>

      </div>
    </div>
  );
}

export default alumni;