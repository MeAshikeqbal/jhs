import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { Separator } from "@/components/ui/separator"



type hm = {
    _id: string,
    name: string,
    image: string,
    qualification: string,
    designation: string | undefined,
}

type ahm = {
    _id: string,
    name: string,
    image: string,
    qualification: string,
    designation: string | undefined,
}

type at = {
    _id: string,
    name: string,
    image: string | any,
    qualification: string,
    designation: string | undefined,
}

type pt = {
    _id: string,
    name: string,
    image: string | any,
    qualification: string,
    designation: string | undefined,
}


export async function teachers() {
    const hm = await client.fetch(`*[_type == "teachers" && designation == "Headmaster"]{
        _id,
        name,
        image{
            asset->{
                _id,
                url,
                metadata{
                    lqip
                }
            }
        },
        qualification,
        designation,
    }`)

    const ahm = await client.fetch(`*[_type == "teachers" && designation == "Assistant Headmaster"]{
        _id,
        name,
        image{
            asset->{
                _id,
                url,
                metadata{
                    lqip
                }
            }
        },
        qualification,
        designation,
    }`)

    const at = await client.fetch(`*[_type == "teachers" && designation == "Assistant Teacher"]{
        _id,
        name,
        image{
            asset->{
                _id,
                url,
                metadata{
                    lqip
                }
            }
        },
        qualification,
        designation,
    }`)

    const pt = await client.fetch(`*[_type == "teachers" && designation == "Para Teacher"]{
        _id,
        name,
        image{
            asset->{
                _id,
                url,
                metadata{
                    lqip
                }
            }
        },
        qualification,
        designation,
    }`)


    return (
        <div>
            <h1
                className="text-4xl font-bold text-center p-2"
            >Teachers</h1>
            <div className="p-4">
                <h2
                    className="text-2xl font-bold text-left p-2"
                >Headmaster
                    <Separator
                        className='h-1 m-1 bg-gray-800 w-32 rounded-full'
                    />

                </h2>
                <div className="flex items-center justify-center md:flex flex-wrap">
                    <Card className="w-64 h-96" >
                        <CardHeader>
                            <Image
                                src={urlForImage(hm[0]?.image)}
                                alt={hm[0]?.name}
                                width={200}
                                height={200}
                                className="rounded-full w-52 h-52"
                                placeholder="blur"
                                blurDataURL={hm[0]?.image?.asset?.metadata?.lqip}
                                loading="lazy"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>{hm[0]?.name}</CardTitle>
                            <CardDescription>{hm[0]?.qualification}</CardDescription>

                        </CardContent>
                        <CardFooter>{hm[0]?.designation}</CardFooter>
                    </Card>
                </div>
            </div>
            <div className="p-4">
                <h2
                    className="text-2xl font-bold text-left p-2"
                >Assistant Headmaster
                    <Separator
                        className='h-1 m-1 bg-gray-800 rounded-full w-60'
                    />
                </h2>
                <div className="flex items-center justify-center md:flex flex-wrap">
                    <Card className="w-64 h-96" >
                        <CardHeader>
                            <Image
                                src={urlForImage(ahm[0]?.image)}
                                alt={ahm[0]?.name.toUpperCase()}
                                width={200}
                                height={200}
                                className="rounded-full w-52 h-52"
                                placeholder="blur"
                                blurDataURL={ahm[0]?.image?.asset?.metadata?.lqip}
                                loading="lazy"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>{ahm[0].name}</CardTitle>
                            <CardDescription>{ahm[0].qualification}</CardDescription>
                        </CardContent>
                        <CardFooter>{ahm[0].title}</CardFooter>
                    </Card>
                </div>
            </div>
            <div className="p-4">
                <h2
                    className="text-2xl font-bold text-left p-2"
                >Assistant Teacher
                    <Separator
                        className='h-1 m-1 bg-gray-800 rounded-full w-48'
                    />
                </h2>
                <div className="flex items-center justify-center md:flex flex-wrap">
                    {at.map((at: at) => (
                        <div key={at._id}
                            className="p-2 flex flex-row "
                        >
                            <Card className="w-64 h-96" >
                                <div>
                                    <CardHeader>
                                        <Image
                                            src={urlForImage(at.image)}
                                            alt={at.name}
                                            width={200}
                                            height={200}
                                            className="rounded-full w-52 h-52"
                                            placeholder="blur"
                                            blurDataURL={at.image?.asset?.metadata?.lqip}
                                            loading="lazy"
                                        />
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle>{at.name.toUpperCase()}</CardTitle>
                                        <CardDescription>{at.qualification}</CardDescription>
                                    </CardContent>
                                    <CardFooter>{at.designation}</CardFooter>
                                </div>
                            </Card>
                        </div>

                    )
                    )}
                </div>
            </div>
            <div className="p-4">
                <h2
                    className="text-2xl font-bold text-left p-2"
                >Para Teacher
                    <Separator
                        className='h-1 m-1 bg-gray-800 rounded-full w-36'
                    />
                </h2>
                <div className="flex items-center justify-center md:flex flex-wrap">
                    {pt.map((pt: pt) => (
                        <div key={pt._id}
                            className="p-2 flex flex-row "
                        >
                            <Card className="w-64 h-96" >
                                <div>
                                    <CardHeader>
                                        <Image
                                            src={urlForImage(pt.image)}
                                            alt={pt.name}
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            className="rounded-full w-52 h-52"
                                            placeholder="blur"
                                            blurDataURL={pt.image?.asset?.metadata?.lqip}
                                            objectPosition="center"
                                            objectFit="cover"
                                        />
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle>{pt.name.toUpperCase()}</CardTitle>
                                        <CardDescription>{pt.qualification}</CardDescription>
                                    </CardContent>
                                    <CardFooter>{at.designation}</CardFooter>
                                </div>
                            </Card>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )

}

export default teachers