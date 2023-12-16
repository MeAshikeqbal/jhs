
import Image from "next/image"
import Link from "next/link"

export function Footer() {
    <div>
        <div className='grid items-center p-2 md:flex justify-around'>
            <div className='flex justify-center pb-2'>
                <Link href='/' passHref>
                    <Image
                        src={'/img/logo.svg'}
                        width={100}
                        height={100}
                        alt='logo'
                        className='cursor-pointer'
                        priority={true}
                        quality={60}
                    />
                </Link>
            </div>
        </div>
    </div>
}


export default Footer