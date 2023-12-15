import { Facebook, Mail, PhoneCallIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"

const TopBar = () => {
  return (

    <div>
      <div className='grid items-center justify-center p-3 md:{flex justify-between}'>
        <div className='flex justify-center pb-2'>
          <Image src={'/img/logo.svg'} width={100} height={100} alt='logo' />
        </div>
        <div className='md:flex '>
          <Link href="mailto:jalalpurhighschool1@gmail.com" className='flex justify-center'>
            <Mail size={24} className='mr-2' />
            jalalpurhighschool1@gmail.com
          </Link>
          <Separator orientation="vertical" className='h-5 hidden md:flex items-center justify-between m-2' />
          <Link href="tel:01712345678" className='flex justify-center'>
            <PhoneCallIcon size={24} className='mr-2' />
            01712345678
          </Link>
          <Separator orientation="vertical" className='h-5 hidden md:flex items-center justify-between m-2' />
          <Link href="https://www.facebook.com/jalalpurhighschool1" className='flex justify-center'>
            <Facebook size={24} className='' />
            Facebook
          </Link>
        </div>
      </div>
      <Separator />
    </div>
  )
}

export default TopBar;