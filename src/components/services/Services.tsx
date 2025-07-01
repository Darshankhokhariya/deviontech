import React from 'react'
import ServiceCard from '../cards/ServiceCard'
import { services } from '@/utils/utils'
import SectionWrapper from '../SectionWrapper'
import Button from '../buttons/Button'

const Services = () => {
    return (
        <SectionWrapper id='skills' className="md:mt-0 mx-4 md:mx-0">
            <div className='mt-20 pb-8'>
                <div className='py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50'>
                    <div className='text-center'>
                        <div className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
                            Our Notable <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Service</span> Offerings
                        </div>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-12'>Explore our diverse range of services, delivering cutting-edge solutions tailored to your specific needs and goals.</p>
                        <div className='max-w-screen-xl container mx-auto px-4 w-full'>
                            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 mb-12">
                                {services?.map((item) => (
                                    <div key={item?.image} className="group">
                                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-full h-16 w-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                <img src={item.image} alt={item.title} className="h-8 w-8" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <Button 
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg hover:scale-105" 
                                    text="View All Services" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Services