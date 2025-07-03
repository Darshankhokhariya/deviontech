import React from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { designProcess, services, uiUxServices } from '@/utils/utils'
import ServiceCard from '@/components/cards/ServiceCard'
import ContactForm from '@/components/contact/ContactForm'
import Button from '@/components/buttons/Button'

const index = () => {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <section className="my-10 md:my-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="my-20 md:mb-24 text-center max-w-6xl mx-auto">
                            <h1 className="mb-16 text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight lg:leading-[50px] xl:leading-[70px] text-heading text-center">
                                <span>Creating Engaging User Experiences with Customized </span>
                                <span className="bg-orange-100 px-2">UI/UX Design</span>
                            </h1>
                            <p className="font-semibold text-lg text-nav tracking-tight">Whether you're aiming to build a new app or website from the ground up or enhance an existing one, devion brings the expertise and creativity needed to bring your vision to life.
                            </p>
                            <a href="#contact">
                                <Button className='bg-primary cursor-pointer text-sm tracking-normal px-10 py-3 mt-16 rounded font-bold text-white hover:bg-primary/80 transition-all duration-300' text='Get a Quote' />
                            </a>
                        </div>
                    </div>
                </section>
            </BackgroundBeamsWithCollision>
            <div className="my-10 md:my-24 bg-white">
                <div className='mt-20 pb-8'>
                    <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
                        <span className='bg-orange-100 px-2'>UI/UX</span> Design Services{" "}
                    </div>
                    <p className='text-sm pt-5 px-3 xl:px-0 text-center text-heading'>UI/UX design services encompass a range of professional offerings aimed at creating visually appealing and user-friendly digital interfaces.</p>
                    <div className='max-w-screen-xl container mx-auto px-4 w-full pt-10'>
                        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
                            {
                                uiUxServices?.map((item) => {
                                    return <ServiceCard key={item?.image} {...item} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='mt-20 pb-8'>
                    <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
                        The <span className='bg-orange-100 px-2'>Process</span> we follow{" "}
                    </div>
                    <p className='text-sm pt-5 px-3 xl:px-0 text-center text-heading'>We follow a user-focused design process from research to launch, ensuring seamless, functional, and visually engaging products.</p>
                    <div className='max-w-screen-xl container mx-auto px-4 w-full pt-10'>
                        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
                            {designProcess?.map((item) => {
                                return (
                                    <div className="w-full p-8">
                                        <div className="text-center">
                                            <div className="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-gray-100 rounded-full">
                                                <div className="font-bold text-primary absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                    {item?.step}
                                                </div>
                                            </div>
                                            <div className="md:max-w-xs mx-auto">
                                                <h3 className="mb-4 text-xl font-bold">{item?.title}</h3>
                                                <p className="text-sm text-zinc-500 leading-6">{item?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='mt-20 pb-8' id='contact'>
                    <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
                        Have a <span className='bg-orange-100 px-2'>Project</span> in Mind?{" "}
                    </div>
                    <p className='text-lg pt-5 px-3 xl:px-0 font-bold text-center text-heading'>Let's Connect</p>
                    <div className='flex justify-center mt-10 relative'>
                        <div className='relative'>
                            <img src="/icons/cont3d.png" className='h-20 xl:h-28 absolute -left-0 lg:-left-20 -top-10 lg:top-[-5px] animate-float' />
                            <ContactForm />
                            <img src="/icons/cont2.png" className='h-20 xl:h-28 absolute -right-0 lg:-right-36 bottom-0 lg:bottom-[-5px] animate-float' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index