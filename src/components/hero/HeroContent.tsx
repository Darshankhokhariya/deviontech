import React from 'react'

const HeroContent = () => {
    return (
        <div className="text-center xl:text-start pt-5 md:pt-0 lg:pt-2 xl:pt-20">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-5 py-2 text-xs font-medium text-primary ring-1 ring-inset ring-blue-700/10">Making the world a better place!</span>
            <p
                className="w-full xl:max-w-2xl mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight lg:leading-[50px] xl:leading-[60px] pt-3 text-heading px-3 xl:px-0">
                Delivering <span className='bg-orange-100 px-2'>innovative</span> and adaptable IT solutions to drive your digital success.
            </p>
            <p className="w-full xl:max-w-2xl mb-6 text-lightDark lg:mb-8 text-base md:text-xl lg:text-xl px-3 xl:px-0">
                A dynamic and imaginative agency focused on crafting personalized solutions that transform digital experiences and make life more convenient.
            </p>
        </div>
    )
}

export default HeroContent