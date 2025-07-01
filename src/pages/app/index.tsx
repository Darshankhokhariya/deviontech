import React from 'react';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { designProcess } from '@/utils/utils';
import ServiceCard from '@/components/cards/ServiceCard';
import ContactForm from '@/components/contact/ContactForm';
import Button from '@/components/buttons/Button';

const appServices = [
  {
    image: '/icons/mobile-code.png',
    title: 'Mobile Apps',
    text: 'Native and cross-platform apps for iOS and Android.'
  },
  {
    image: '/icons/services/interaction.png',
    title: 'User Experience',
    text: 'Intuitive, engaging, and user-friendly mobile interfaces.'
  },
  {
    image: '/icons/services/support-services.png',
    title: 'App Support',
    text: 'Ongoing maintenance and support for your mobile apps.'
  },
];

const AppDevelopment = () => {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <section className="my-10 md:my-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="my-20 md:mb-24 text-center max-w-6xl mx-auto">
              <h1 className="mb-16 text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight lg:leading-[50px] xl:leading-[70px] text-heading text-center">
                <span>Innovate with </span>
                <span className="bg-blue-100 px-2">App Development</span>
              </h1>
              <p className="font-semibold text-lg text-nav tracking-tight">We turn your ideas into powerful, user-friendly mobile applications. Our team specializes in cross-platform and native app development for seamless digital experiences.</p>
              <a href="#contact">
                <Button className='bg-primary cursor-pointer text-sm tracking-normal px-10 py-3 mt-16 rounded font-bold text-white hover:bg-primary-hover transition-all duration-300' text='Get a Quote' />
              </a>
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
      <div className="my-10 md:my-24 bg-white">
        <div className='mt-20 pb-8'>
          <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
            <span className='bg-blue-100 px-2'>App</span> Development Services
          </div>
          <p className='text-sm pt-5 px-3 xl:px-0 text-center text-heading'>Our app development services cover everything from concept to launch, ensuring your mobile app stands out in the market.</p>
          <div className='max-w-screen-xl container mx-auto px-4 w-full pt-10'>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
              {appServices.map((item) => <ServiceCard key={item.title} {...item} />)}
            </div>
          </div>
        </div>
        <div className='mt-20 pb-8'>
          <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
            The <span className='bg-blue-100 px-2'>Process</span> we follow
          </div>
          <p className='text-sm pt-5 px-3 xl:px-0 text-center text-heading'>We follow a proven app development process from ideation to launch, ensuring quality and user satisfaction at every step.</p>
          <div className='max-w-screen-xl container mx-auto px-4 w-full pt-10'>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
              {designProcess.map((item) => (
                <div className="w-full p-8" key={item.step}>
                  <div className="text-center">
                    <div className="relative z-10 bg-white w-12 h-12 mb-8 mx-auto border border-gray-100 rounded-full">
                      <div className="font-bold text-primary absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {item.step}
                      </div>
                    </div>
                    <div className="md:max-w-xs mx-auto">
                      <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                      <p className="text-sm text-zinc-500 leading-6">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-20 pb-8' id='contact'>
          <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
            Have an <span className='bg-blue-100 px-2'>App Project</span> in Mind?
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
  );
};

export default AppDevelopment; 