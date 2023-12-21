import { Facebook, Mail, PhoneCallIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"


export function TopBar () {
  return (
    <div>
      <div className='grid items-center p-2 md:flex justify-around'>
        <div className='flex justify-center pb-2'>
          <Link href='/' passHref>
            <Image 
            src={'/img/logo.png'} 
            width={110} 
            height={110} 
            alt='logo'
            className='cursor-pointer'
            priority={true}
            quality={100}
            />
          </Link>
        </div>
        <div className='md:flex items-center'>
          <Link href="mailto:dask@jalalpurhighschool.com" className='flex justify-center'>
            <Mail size={24} className='mr-2' />
            dask@jalalpurhighschool.com
          </Link>
          <Separator orientation="vertical" className='h-5 hidden md:flex items-center justify-between m-2' />
          <Link href="tel:+917001884657" className='flex justify-center'>
            <PhoneCallIcon size={24} className='mr-2' />
            +91 70018 84657
          </Link>
          <Separator orientation="vertical" className='h-5 hidden md:flex items-center justify-between m-2' />
          <Link href="https://www.facebook.com/profile.php?id=100063916816074" className='flex justify-center'>
            <Facebook size={24} className='' />
            Facebook
          </Link>
        </div>
      </div>
    </div>
  )
}
