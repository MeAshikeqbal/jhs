import MapComponent from '@/components/map';
import { Facebook, HomeIcon, Mail, PhoneCallIcon, School, SchoolIcon } from 'lucide-react';
import Link from 'next/link';


const ContactUs = () => {
    return (
        <div>
            <div className='text-4xl font-bold text-center p-2'

            >
                <h1>Contact Us</h1>
            </div>
            <div>
                <div className='m-4'>
                    <div>
                        <div>
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
                                <Link href="tel:01712345678" className='flex justify-center'>
                                    01712345678
                                </Link>
                            </div>
                            <div className='flex'>
                                <Mail size={24} className='mr-2' />
                                <Link href="mailto:contact@jalalpurhighschool.com" className='flex justify-center'>
                                    contact@jalalpurhighschool.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs