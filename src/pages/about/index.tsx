import React from 'react'
import Button from '@/components/buttons/Button'
import ContactForm from '@/components/contact/ContactForm'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { COMPANY_NAME, contact } from '@/utils/utils'

const team = [
  {
    name: 'Darshan Khokhariya',
    role: 'CEO',
    image: '/icons/cont3d.png',
    linkedin: 'https://www.linkedin.com/in/darshan-khokhariya',
  },
  {
    name: 'Amit Makwana',
    role: 'CO Founder',
    image: '/icons/cont2.png',
    linkedin: 'https://www.linkedin.com/in/amit-makwana',
  },
  {
    name: 'Yash Vekariya',
    role: 'CTO',
    image: '/icons/brush.svg',
    linkedin: 'https://www.linkedin.com/in/yash-vekariya',
  },
]

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
                            <p className="font-semibold text-lg text-nav tracking-tight mb-8">At {COMPANY_NAME}, we solve complex business challenges with scalable tech solutions, fostering trust and growth. Our mission is to empower businesses of all sizes to succeed. We believe in innovation, collaboration, and delivering real value to our clients.</p>
                            <a href="#contact">
                                <Button className='bg-primary cursor-pointer text-sm tracking-normal px-10 py-3 mt-8 rounded font-bold text-white hover:bg-primary-hover transition-all duration-300' text='Get a Quote' />
                            </a>
                        </div>
                    </div>
                </section>
            </BackgroundBeamsWithCollision>
            <section className="my-10 md:my-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center mb-12">
                        Meet Our <span className="bg-blue-100 px-2">Leadership</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        {team.map((member) => (
                            <div key={member.name} className="bg-white/80 rounded-xl p-8 shadow-xl border border-blue-100 backdrop-blur-md flex flex-col items-center w-72">
                                <img src={member.image} alt={member.name} className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg" />
                                <h3 className="text-xl font-bold mb-1 text-heading">{member.name}</h3>
                                <p className="text-primary font-semibold mb-2">{member.role}</p>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">LinkedIn</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="my-10 md:my-24 bg-white" id="contact">
                <div className="container mx-auto px-4">
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center mb-4">
                        Have a <span className="bg-blue-100 px-2">Project</span> in Mind?
                    </div>
                    <p className="text-lg pt-5 px-3 xl:px-0 font-bold text-center text-heading">Let's Connect</p>
                    <div className="flex justify-center mt-10 relative">
                        <div className="relative">
                            <img src="/icons/cont3d.png" className="h-20 xl:h-28 absolute -left-0 lg:-left-20 -top-10 lg:top-[-5px] animate-float" />
                            <ContactForm />
                            <img src="/icons/cont2.png" className="h-20 xl:h-28 absolute -right-0 lg:-right-36 bottom-0 lg:bottom-[-5px] animate-float" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index