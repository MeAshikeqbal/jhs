import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const success = () => {
    return (
        <div
            className='flex flex-col items-center justify-center
            py-10 text-blue-950'
        >
            <h1
                className='text-3xl font-bold text-center flex items-center justify-center'
            >
                Success
            </h1>
            <p
                className='text-center'
            >
                Your submission is successful. Your information will be displayed on the alumni page after the admin approves it.
            </p>
            <Link href='/alumni'>
                <Button
                    className='bg-blue-950 text-white px-4 py-2 rounded-md mt-4'
                >
                    Go back to Alumni page
                </Button>
            </Link>

        </div>
    )
}

export default success