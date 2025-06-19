import { ServiceCardProps } from '@/interfaces/main'
import Image from 'next/image'
import React from 'react'

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, text }) => {
    return (
        <div className="w-full text-start bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 overflow-hidden rounded-md">
            <div className="bg-[#f9fafb] rounded-full h-20 w-20 flex justify-center items-center">
                <img src={image} className='h-11 w-11' />
            </div>
            <div className="font-bold text-xl pt-6">{title}</div>
            <p className="text-sm text-zinc-500 leading-6 pt-3">
                {text}
            </p>
        </div>
    )
}

export default ServiceCard