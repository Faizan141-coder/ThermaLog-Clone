'use client'

import React from 'react'
import { NewsletterForm } from '@/components/newsletter-form';

const page: React.FC = () => {
  return (
    <div>
        {/* <Navbar /> */}
          <div className='my-10 flex px-52'>
            <div className='text-justify'>
                <div className='flex'>
                    <div className='flex-wrap'>
                        <h1 className='text-[40px] font-semibold'>Contact<span className='text-blue-400'> Us</span></h1>
                    </div>
                </div>
                {/* <div>
                    <p className='text-md mt-5'>
                        This is will the contact form
                    </p>  
                </div> */}
                <div>
                    <NewsletterForm />
                </div>
            </div>
          </div>
        {/* <Footer /> */}
    </div>
  )
}

export default page