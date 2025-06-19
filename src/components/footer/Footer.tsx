import Link from 'next/link'
import React from 'react'
import Icon from '../icon/Icon'
import { COMPANY_NAME, contact, links, pages } from '@/utils/utils'
import { SlLocationPin } from 'react-icons/sl'
import { LuPhoneCall } from 'react-icons/lu'
import { MdOutlineMailOutline } from 'react-icons/md'
import Logo from '../logo/Logo'

const Footer = () => {
    return (
        <>
            <section className="relative mt-20 pt-24 pb-28 bg-blue-50 overflow-hidden">
                <div className="relative z-10 container px-4 mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 -m-8">
                        <div className="w-full p-8">
                            <a className="inline-block" href="#">
                                <Logo />
                            </a>
                            <Link href={contact.location} target='_blank' className="flex lg:py-3 items-start gap-1 font-medium leading-relaxed md:max-w-xs">
                                <div className='w-20 '>
                                    <SlLocationPin className='text-heading text-lg hover:!text-primary transition-all duration-200' />
                                </div>
                                <p className='text-sm text-gray-600'>
                                    {contact.address}
                                </p>
                            </Link>
                            <Link href={links.instagram} target='_blank' className='pt-3 flex items-center gap-2 group'>
                                <div className='bg-gray-200  hover:bg-gray-300 cursor-pointer transition-all duration-200 rounded-full w-10 h-10 p-3 flex justify-center items-center'>
                                    <Icon src="/icons/instagram.png" className='h-4 w-4 object-cover' />
                                </div>
                            </Link>
                        </div>
                        {
                            pages?.map((page) => {
                                return (
                                    <>
                                        <div className="w-full p-8">
                                            <h3 className="mb-6 font-semibold leading-normal text-heading">{page?.title}</h3>
                                            <ul>
                                                {
                                                    page?.children?.map((child) => {
                                                        return <li className="mb-3.5 text-sm"><a className="text-heading hover:underline font-medium leading-relaxed" href="#">{child?.title}</a></li>
                                                    })
                                                }
                                            </ul>
                                        </div >
                                    </>
                                )
                            })
                        }
                        <div className="w-full p-8">
                            <h3 className="mb-6 font-semibold leading-normal text-heading">Contact</h3>
                            <Link href={`tel:${contact.phoneNumber}`} className='flex items-center gap-3 pb-2 group'>
                                <div className='flex gap-3 items-center'>
                                    <LuPhoneCall className='hover:!text-primary transition-all duration-200' />
                                    <p className='text-sm text-heading font-medium leading-relaxed group-hover:text-primary transition-all duration-200'>{contact.phoneNumber}</p>
                                </div>
                            </Link>
                            <Link href={`mailto:${contact.email}`} className='flex items-center gap-3 group'>
                                <div className='flex gap-3 items-center'>
                                    <MdOutlineMailOutline className='hover:!text-primary transition-all duration-200' />
                                    <p className=' text-sm text-heading font-medium leading-relaxed group-hover:text-primary transition-all duration-200'>{contact.email}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Footer