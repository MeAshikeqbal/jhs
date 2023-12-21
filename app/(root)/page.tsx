import Carousel from "@/components/carousel"
import { client } from "@/sanity/lib/client"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { BookOpen, Facebook, GraduationCap, Presentation } from "lucide-react"
import Counter from "@/components/counter"
import FacebookPage from "@/components/facebook"
import Image from "next/image"


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


  return (
    <div>
      <div>
        {poster && <Carousel slides={poster} autoSlide autoSlideInterval={5500} />}
      </div>
      <div
        className="flex flex-col justify-center items-center "
      >
        <div
          className="max-w-6xl mx-auto"
        >
          <h1
            className=" flex flex-col items-center text-5xl font-bold text-center p-4 text-blue-950"
          >
            Welcome to Jalalpur High School
            <Separator className=" w-4/5 p-0.5 rounded-full bg-blue-950 m-2" />
          </h1>
          <div
            className="p-4 space-y-2 text-justify text-lg max-w-4xl text-gray-600"
          >
            <p>
              Our vision is to provide a happy, caring and stimulating environment where studens will recognize and achieve their fullest potential, so that they can make their best contribution to society.
            </p>
            <p>
              Jalalpur High School(H.S) is a co-educational government highschool school, which aims to provide a caring and friendly atmosphere in which each individual can develop his/her own potentialities and talents to the full. The school is committed to the pursuit of excellence in education and to the development of the whole person.
            </p>
            <p>
              The school is situated in the heart of Jalalpur in the district of Malda, West Bengal. It is a Bengali medium school, which is affiliated to the West Bengal Board of Secondary Education (WBBSE) and West Bengal Council of Higher Secondary Education (WBCHSE). The school has classes from V to XII.
            </p>
            <Link
              href={`/about-us`}
              passHref
              className="flex justify-center items-center p-3"
            >
              <Button className="bg-blue-950 text-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div
          className="bg-blue-950/30 my-2 py-4 w-full flex flex-col  justify-center items-center max-w-none"
        >
          <h1
            className="text-4xl font-bold text-center text-blue-950"
          >
            Affiliation
          </h1>
          <div
            className="my-4 flex flex-col md:flex-row md:justify-evenly justify-center items-center p-4 space-y-2 md:space-y-0 md:space-x-4 text-center text-gray-600 max-w-7xl mx-auto"
          >
            <div
              className="flex flex-col justify-center items-center space-y-2"
            >
              <Image
                src="/img/wbbse.png"
                alt="wbbse"
                className="w-40"
                width={200}
                height={200}
              />
              <h4
                className="flex text-2xl font-bold text-blue-950"
              >
                WBBSE
              </h4>
            </div>
            <div
              className="flex flex-col justify-center items-center space-y-2"
            >
              <Image
                src="/img/wbchse.webp"
                alt="wbchse"
                width={200}
                height={200}
                className="w-40"
              />
              <h4
                className="flex text-2xl font-bold text-blue-950"
              >
                WBCHSE
              </h4>
            </div>
          </div>
        </div>
        <div className="flex p-2 flex-col md:flex-row md: justify-center max-w-6xl mx-auto space-y-2.5 md:space-y-0 md:space-x-4">
          <Card className="flex flex-col justify-center items-center w-full md:w-1/3 p-4 space-y-2 hover:bg-blue-950/30 transition ease-in-out">
            <CardHeader className="text-2xl font-bold text-center text-blue-950">
              Middle School
            </CardHeader>
            <CardContent>
              <p className="text-justify text-gray-600">
                The Middle School curriculum is designed to meet the needs of students in the 6th, 7th and 8th grades. The curriculum is designed to provide a strong foundation in the core academic areas of English, Math, Science and Social Studies. Students also have the opportunity to explore a variety of elective courses in the areas of Art, Music, Physical Education, and Technology. The Middle School program is designed to provide a smooth transition from middle school to high school.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col justify-center items-center w-full md:w-1/3 p-4 space-y-2 hover:bg-blue-950/30 transition ease-in-out">
            <CardHeader className="text-2xl font-bold text-center text-blue-950">
              High School
            </CardHeader>
            <CardContent>
              <p className="text-justify text-gray-600">
                The High School curriculum is designed to meet the needs of students in the 9th, 10th, 11th and 12th grades. The curriculum is designed to provide a strong foundation in the core academic areas of English, Math, Science and Social Studies. Students also have the opportunity to explore a variety of elective courses in the areas of Art, Music, Physical Education, and Technology. The High School program is designed to provide a smooth transition from highschool school to college.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-blue-950/30 my-2 py-4 w-full flex flex-col  justify-center items-center max-w-none">
          <div className="flex flex-col md:flex-row md:justify-between justify-center items-center p-4 space-y-2 md:space-y-0 md:space-x-4 text-center text-gray-600 max-w-7xl mx-auto">
            <div className="flex flex-col md:justify-between justify-center items-center space-y-2">
              <Presentation size={60} className="text-blue-950" />
              <h4 className="flex text-2xl font-bold text-blue-950">
                <Counter targetNumber={70} /> + teachers
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <BookOpen size={60} className="text-blue-950" />
              <h4 className="flex text-2xl font-bold text-blue-950">
                <Counter targetNumber={500} /> + students Yearly
              </h4>
            </div>
            <div
              className="flex flex-col justify-center items-center space-y-2"
            >
              <GraduationCap
                size={60}
                className="text-blue-950"
              />
              <h4 className="flex text-2xl font-bold text-blue-950">
                <Counter targetNumber={100} /> + students per class
              </h4>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center max-w-6xl mx-auto p-4 space-y-2"
        >
          <h1
            className="text-4xl font-bold text-center text-blue-950"
          >
            Find us in Social Media
          </h1>
          <Link href={"https://www.facebook.com/profile.php?id=100063916816074"}
            target="_blank"
            className="flex justify-center items-center space-x-2 "
          >
            <Facebook
              size={52}
              className="text-blue-950 hover:text-blue-950/50 transition-all duration-300 ease-in-out"
            />
          </Link>

        </div>
        <div
          className="flex flex-col justify-center items-center max-w-6xl mx-auto p-4 space-y-2"
        >
          <div
          >

            <FacebookPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default home