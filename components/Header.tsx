import Image from 'next/image'
import React from 'react'
import {ChevronDownIcon, HomeIcon } from '@heroicons/react/outline'
import {StarIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
            <Image src="https://seeklogo.com/images/A/anonymous-logo-7E968E8797-seeklogo.com.png" fill  style={{objectFit:"cover"}} alt='header-logo' />
        </div>
        <div className='mx-7 flex items-center xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5'/>
        <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5'/>
        </div>
    </div>
  )
}

export default Header
