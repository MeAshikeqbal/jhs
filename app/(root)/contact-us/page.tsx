import { Facebook, HomeIcon, Mail, PhoneCallIcon, School, SchoolIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Contact Us',
    openGraph: {
        url: 'https://jalalpurhighschool.com/contact-us',
        images: [`https://jhs-six.vercel.app/api/og?title=Contact%20Us&width=640&height=320`],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us',
    }
}


const ContactUs = () => {
    return (
        <div
            className='max-w-7xl mx-auto'
        >
            <div className='text-4xl font-bold text-center p-2'

            >
                <h1>Contact Us</h1>
            </div>
            <div
                className='grid grid-cols-1 md:grid-cols-2 gap-4'
            >
                <div className='m-4'>
                    <div>
                        <div
                            className=' grid  p-2'
                        >
                            <div className='flex flex-col'>
                                <p className='flex'>
                                    <School size={24} className='mr-2' />
                                    Jalalpur High School (H.S.)</p>
                                <p>PO: Jalalpur, PS: Kaliachak,</p>
                                <p>Dist: Malda, Pin: 732206</p>
                                <p>West Bengal, India</p>
                            </div>
                            <div className='flex'>
                                <PhoneCallIcon size={24} className='mr-2' />
                                <Link href="tel:+917001884657" className='flex justify-center'>
                                +91 70018 84657
                                </Link>
                            </div>
                            <div className='flex'>
                                <Mail size={24} className='mr-2' />
                                <Link href="mailto:desk@jalalpurhighschool.com" className='flex justify-center'>
                                    desk@jalalpurhighschool.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div
                    className='m-4 flex justify-center items-center'
                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1279.5580960222158!2d88.06972851870141!3d24.89331404987082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39faf903d6503895%3A0x5c4e000230a4256!2sJalalpur%20High%20School!5e0!3m2!1sen!2sin!4v1703210793111!5m2!1sen!2sin" width="500" height="400" loading="lazy"></iframe>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs