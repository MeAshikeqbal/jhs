import { Separator } from '@/components/ui/separator'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <div
      className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
    >

      <Head>
        <title>Acadamic Calender - JHS</title>
      </Head>
      <div className='flex flex-col items-center justify-center p-1'>
        <h1
          className='text-3xl font-bold text-center text-gray-800 md:text-4xl'
        >Acadamic Calender</h1>
        <h2
          className='text-l font-semibold text-center text-gray-800 md:text-xl'
        >
          Academic Calender for this month with holidays

          <div
            className='flex justify-center'
          >
            <Separator
              className='w-4/5 h-1 mt-1 bg-gray-800 rounded-full'
            />
          </div>
        </h2>
      </div>

      <iframe
      className='w-full'
      src="https://calendar.google.com/calendar/embed?height=900&wkst=1&bgcolor=%23172554&ctz=Asia%2FKolkata&mode=MONTH&showTitle=0&showPrint=0&showTabs=0&showTz=0&showNav=1&showDate=0&showCalendars=0&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043" height={800}>

      </iframe>
    </div>
  )
}

export default page