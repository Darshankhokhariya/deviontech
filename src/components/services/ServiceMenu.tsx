import React from 'react'
import { HiOutlinePaintBrush } from 'react-icons/hi2'
import { FaLaptopCode } from 'react-icons/fa'
import { AiOutlineAndroid } from 'react-icons/ai'
import Link from 'next/link'
import { ServiceMenuProps, SubItem } from '@/interfaces/main'

const ServiceMenu = ({ subItems }: ServiceMenuProps) => {
    return (
        <div className="absolute transition-all duration-300 transform -translate-y-2 scale-95 z-20">
            <div className="absolute left-0 w-64 mt-5 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                <div className="p-3">
                    {
                        subItems?.map((service: SubItem) => {
                            const Icon = service.icon;
                            return (
                                <Link href={service?.href} className="text-gray-700 flex gap-2 w-full px-4 py-3 leading-5 hover:text-primary transition-all duration-200" role="menuitem" ><span className='text-xl'><Icon /></span><span className='text-sm'>{service?.label}</span></Link>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default ServiceMenu