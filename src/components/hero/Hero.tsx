import ContactForm from '../contact/ContactForm';
import HeroContent from './HeroContent';

const Hero = () => {
    return (
        <>
            <section className="bg-white">
                <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 pt-20 md:pt-32 lg:pt-32 xl:pt-40 relative">

                    {/* Left Column */}
                    <HeroContent />

                    {/* Right Column - GIF */}
                    <div className="w-full xl:w-1/2 flex justify-center mt-8 xl:mt-0">
                        <img
                            src="/Hero.gif" // 👉 Update the path to your actual GIF
                            alt="Hero Animation"
                            className="w-full max-w-md xl:max-w-lg h-auto"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
