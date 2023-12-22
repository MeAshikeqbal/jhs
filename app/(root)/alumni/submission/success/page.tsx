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
                Your submission is successful. Your information will be displayed soon.
            </p>

        </div>
    )
}

export default success