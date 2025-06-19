import React from 'react'
import Button from '@/components/buttons/Button'
import ContactForm from '@/components/contact/ContactForm'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { COMPANY_NAME, contact } from '@/utils/utils'

const index = () => {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <section className="my-10 md:my-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="my-40 md:mb-24 text-center max-w-4xl mx-auto">
                            <h1 className="mb-16 text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight lg:leading-[50px] xl:leading-[70px] text-heading text-center">
                                <span>Driving Positive Change Through <span className='bg-blue-100 px-2'>Technology</span> – Empowering Progress, One Solution at a Time.</span>
                            </h1>
                            <p className="font-semibold text-lg text-nav tracking-tight">At {COMPANY_NAME}, we solve complex business challenges with scalable tech solutions, fostering trust and growth. Our mission is to empower businesses of all sizes to succeed.
                            </p>
                            <a href="#contact">
                                <Button className='bg-primary cursor-pointer text-sm tracking-normal px-10 py-3 mt-16 rounded font-bold text-white hover:bg-primary-hover transition-all duration-300' text='Get a Quote' />
                            </a>
                        </div>
                    </div>
                </section>
            </BackgroundBeamsWithCollision>








        </>
    )
}

export default index