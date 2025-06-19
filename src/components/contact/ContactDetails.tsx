import { contact } from '@/utils/utils'
import React from 'react'

const ContactDetails = () => {
    return (
        <div className="text-center xl:text-start pt-5 md:pt-0 lg:pt-2 xl:pt-20">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-xs font-medium text-primary ring-1 ring-inset ring-blue-700/10">Contact Us</span>
            <p
                className="w-full xl:max-w-2xl mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight lg:leading-[50px] xl:leading-[60px] pt-3 text-heading px-3 xl:px-0">
                Get Connected to Grow better <span className='bg-blue-100 px-2'>business.</span>
            </p>
            <p className="w-full xl:max-w-2xl mb-6 text-lightDark lg:mb-8 text-base md:text-xl lg:text-xl px-3 xl:px-0">
                Tell us about your project, and we’ll reach out to you as quickly as possible.
            </p>
            <div className='pt-5'>
                <p className='font-bold text-sm tracking-wide text-gray-400 uppercase'>
                    Email
                </p>
                <p className='font-bold text-lg text-deepDark'>
                    {contact.email}
                </p>
            </div>
            <div className='pt-10 pb-10 lg:pb-0'>
                <p className='font-bold text-sm tracking-wide text-gray-400 uppercase'>
                    Phone
                </p>
                <p className='font-bold text-lg text-deepDark'>
                    {contact.phoneNumber}
                </p>
            </div>
        </div>
    )
}

export default ContactDetails