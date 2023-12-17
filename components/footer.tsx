import Link from 'next/link'
import Image from 'next/image'


const footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className=" bg-blue-950 mt-2">
            <div className='max-w-6xl justify-center'>
                <div className='md:flex justify-around'>
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
                    <div className='flex justify-evenly p-4 md:mt-4'>
                        <div>
                            <h3>
                                quick links
                            </h3>
                            <ul>
                                <li>Home</li>
                                <li>Notice</li>
                                <li>HM Dask</li>
                                <li>Teachers</li>
                                <li>Gallery</li>
                                <li>Alumni</li>
                                <li>Contact Us</li>
                                <li>Academic Calendar</li>
                                <li>Events</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className='mr-5 ml-5'>
                            <h3>
                                Student Corner
                            </h3>
                            <Link href='/'>
                                Alumni Submition
                            </Link>
                        </div>
                        <div>
                            <Link href='/dashbord'>
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
    )
}

export default footer