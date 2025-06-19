import React from 'react'
import ServiceCard from '../cards/ServiceCard'
import { services } from '@/utils/utils'
import SectionWrapper from '../SectionWrapper'

const Services = () => {
    return (
        <SectionWrapper id='skills' className="md:mt-0 mx-4 md:mx-0">
            <div className='mt-20 pb-8'>
                <div className='py-16 bg-[#fcfaff] text-center text-heading'>
                    <div className='text-center'>
                        <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight'>
                            <span className='bg-blue-100 px-2'>Services</span>{" "}We Provide
                        </div>
                        <p className='text-sm pt-5 px-3 xl:px-0 text-center'>Discover our wide variety of services, offering innovative solutions customized to meet your unique requirements and objectives.</p>
                        <div className='max-w-screen-xl container mx-auto px-4 w-full pt-10'>
                            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
                                {
                                    services?.map((item) => {
                                        return <ServiceCard key={item?.image} {...item} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Services