import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { client } from "@/sanity/lib/client"
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AlumniForm from '@/components/alumniForm';


type Alumni = {
  _id: string;
  name: string;
  batch: number;
  image: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        lqip: string;
      };
    };
  };
};

type AlumniType = {
  _id: string;
  image: {
    asset: {
      url: string | StaticImport;
      metadata: {
        lqip: string | undefined;
      };
    };
  };
  name: string;
};

type GroupedAlumni = Record<string, Alumni[]>;

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

  const sortedAlumni: Alumni[] = [...alumni].sort((a, b) => a.batch.localeCompare(b.batch)).sort((a, b) => a.name.localeCompare(b.name));

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
                <Card className="flex flex-col items-center w-64 h-72 pt-3">
                  <CardContent>
                    <Image
                      src={alumni.image.asset.url}
                      alt={alumni.name?.toString() ?? ''}
                      width={500}
                      height={500}
                      className="rounded-full h-52 w-52"
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
          Don&apos;t see your name?
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
                    Add Alumni
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