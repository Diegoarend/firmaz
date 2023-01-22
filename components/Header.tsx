import Image from 'next/image'
import React from 'react'
import {ChevronDownIcon, HomeIcon, SearchIcon } from '@heroicons/react/outline'
import {StarIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
    const { data : session} = useSession()
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

        <form  className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
            <SearchIcon className='h-6 w-6 text-gray-400'/>
            <input type="text" className="flex-1 bg-transparent outline-none" placeholder='search post'/>
        </form>
       { session ?
            <div onClick={() => signIn()} className='ml-5 flex items-center' >
                <p className='text-gray-400'>Sign in</p>
            </div> :
            <div onClick={() => signOut()} className='ml-5 flex items-center' >
                <p className='text-gray-400'>Sign out</p>
            </div>
        }
    </div>
  )
}

export default Header
