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



type hm = {
    _id: string,
    name: string,
    image: string,
    qualification: string,
    title: string | undefined,
}

type ahm = {
    _id: string,
    name: string,
    image: string,
    qualification: string,
    title: string | undefined,
}

type at = {
    _id: string,
    name: string,
    image: string | any,
    qualification: string,
    title: string | undefined,
}

type pt = {
    _id: string,
    name: string,
    image: string | any,
    qualification: string,
    title: string | undefined,
}


export async function teachers() {
    const hm = await client.fetch(`*[_type == "teachers" && title == "Headmaster"]{
        _id,
        name,
        image,
        qualification,
        title
    }`)

    const ahm = await client.fetch(`*[_type == "teachers" && title == "Assistant Headmaster"]{
        _id,
        name,
        image,
        qualification,
        title
    }`)

    const at = await client.fetch(`*[_type == "teachers" && title == "Assistant Teacher"]{
        _id,
        name,
        image,
        qualification,
        title
    }`)

    const pt = await client.fetch(`*[_type == "teachers" && title == "Para Teacher"]{
        _id,
        name,
        image,
        qualification,
        title
    }`)


    return (
        <div>
            <h1
                className="text-4xl font-bold text-center underline p-2"
            >Teachers</h1>
            <div className="p-4">
                <h2
                    className="text-2xl font-bold text-left p-2"
                >Headmaster</h2>
                <div className="flex items-center justify-center md:flex flex-wrap">
                    <Card className="w-64 h-96" >
                        <CardHeader>
                            <Image
                                src={urlForImage(hm[0]?.image)}
                                alt={hm[0]?.name.toUpperCase()}
                                width={200}
                                height={200}
                                className="rounded-full w-52 h-52"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>{hm[0]?.name}</CardTitle>
                            <CardDescription>{hm[0]?.qualification}</CardDescription>
                            
                        </CardContent>
                        <CardFooter>{hm[0]?.title}</CardFooter>
                    </Card>
                </div>
            </div>
            <div className="p-4">
                <h2
                    className="text-2xl font-bold text-left p-2"
                >Assistant Headmaster</h2>
                <div className="flex items-center justify-center md:flex flex-wrap">
                    <Card className="w-64 h-96" >
                        <CardHeader>
                            <Image
                                src={urlForImage(ahm[0]?.image)}
                                alt={ahm[0]?.name.toUpperCase()}
                                width={200}
                                height={200}
                                className="rounded-full w-52 h-52"
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
                >Assistant Teacher</h2>
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
                                        />
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle>{at.name.toUpperCase()}</CardTitle>
                                        <CardDescription>{at.qualification}</CardDescription>
                                    </CardContent>
                                    <CardFooter>{at.title}</CardFooter>
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
                >Para Teacher</h2>
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
                                            className="rounded-full w-52 h-52"
                                        />
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle>{pt.name.toUpperCase()}</CardTitle>
                                        <CardDescription>{pt.qualification}</CardDescription>
                                    </CardContent>
                                    <CardFooter>{at.title}</CardFooter>
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