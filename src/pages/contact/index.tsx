import React from 'react'
import Button from '@/components/buttons/Button'
import ContactForm from '@/components/contact/ContactForm'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import ContactDetails from '@/components/contact/ContactDetails'

const index = () => {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <section className="my-10 md:my-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="my-40 md:mb-24 text-center max-w-4xl mx-auto">
                            <h1 className="mb-16 text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight lg:leading-[50px] xl:leading-[70px] text-heading text-center">
                                <span>Ready to <span className='bg-orange-100 px-2'>Collaborate?</span> Reach Out to Us Today!</span>
                            </h1>
                            <p className="font-semibold text-lg text-nav tracking-tight">We’re here to assist with any queries or questions you have. Explore our offerings and take the first step toward experiencing our services today!
                            </p>
                            <a href="#contact">
                                <Button className='bg-primary cursor-pointer text-sm tracking-normal px-10 py-3 mt-16 rounded font-bold text-white hover:bg-primary/80 transition-all duration-300' text='Contact Us' />
                            </a>
                        </div>
                    </div>
                </section>
            </BackgroundBeamsWithCollision>
            <div id='contact' className="flex flex-col xl:flex-row justify-between items-center xl:items-start max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 pt-20 md:pt-32 lg:pt-32 xl:pt-20 relative">
                <ContactDetails />
                <ContactForm />
            </div>
        </>
    )
}

export default index