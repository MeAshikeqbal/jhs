import Link from 'next/link'
import Image from 'next/image'
import { Separator } from './ui/separator'



export function Footer () {
    const year = new Date().getFullYear()
    return (
        <div>
            <div className="bg-blue-950 mt-2">
                <div className='max-w-6xl mx-auto flex justify-center'>
                    <div className='flex flex-col md:flex-row justify-around'>
                        <div className="flex flex-col p-6 text-gray-400">
                            <Image
                                src='/img/logo.svg'
                                alt='logo'
                                width={50}
                                height={50}
                            />
                            <p className="text-sm font-medium">Jalalpur High School (H.S.)</p>
                            <p className="text-sm font-medium">Jalalpur, Malda, West Bengal 732125</p>
                        </div>
                        <div className='flex flex-col md:flex-row justify-evenly p-4 md:mt-4'>
                            <div>
                                <h3 className='text-gray-400 text-lg font-bold'>
                                    Quick links
                                </h3>
                                <Separator className='w-20 bg-gray-400 mx-4' />
                                <ul>
                                    <li className='text-gray-400 font-semibold'>
                                        <Link href='/notice'>Notice</Link>
                                    </li>
                                    <li className='text-gray-400 font-semibold'>
                                        <Link href='/alumni'>Alumni</Link>
                                    </li>
                                    <li className='text-gray-400 font-semibold'>
                                        <Link href='/gallery'>Gallery</Link>
                                    </li>
                                    <li className='text-gray-400 font-semibold'>
                                        <Link href='/contact-us'>Contact Us</Link>
                                    </li>
                                    <li className='text-gray-400 font-semibold'>
                                        <Link href='/academic-calendar'>Academic Calendar</Link>
                                    </li>
                                    <li className='text-gray-400 font-semibold'>
                                        <Link href='/events'>Events</Link>
                                    </li>
                                </ul>
                            </div>
                            <Separator className='hidden md:block w-0.5 h-full bg-gray-400 mx-4' />
                            <div>
                                <h3 className='text-gray-400 text-lg font-bold'>
                                    Student Corner
                                </h3>
                                <Separator className='w-28 bg-gray-400 mx-4' />
                                <div
                                className='flex flex-col'
                                >


                                <Link href='/alumni/submission' className='text-gray-400 font-semibold'>
                                    Alumni Submission
                                </Link>
                                <Link
                                href='/gallery/submission'
                                className='text-gray-400 font-semibold'
                                >
                                Gallery Submission
                                </Link>
                                    </div>
                            </div>
                            <Separator className='hidden md:block w-0.5 h-full bg-gray-400 mx-4' />
                            <div>
                                <h3 className='text-gray-400 text-lg font-bold'>
                                    Admin Corner
                                </h3>
                                <Separator className='w-24 bg-gray-400 mx-4' />
                                <Link href='/dashbord' className='text-gray-400 font-semibold'>
                                    Admin Dashbord
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-6 text-gray-400">
                    <p className="text-sm font-medium">© {year} Jalalpur High School (H.S.)</p>
                    <p className="text-sm font-medium">All rights reserved.</p>
                    <p className="text-sm font-medium">Designed & Devloved by <a href="https:itsashik.info">Ashik Eqbal</a></p>
                </div>
            </div>

        </div>
    )
}
