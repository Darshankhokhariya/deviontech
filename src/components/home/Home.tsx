import Hero from "@/components/hero/Hero";
import Technologies from "@/components/technologies/Technologies";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Technologies />
            <div className="mt-2">
                <Portfolio />
            </div>
        </>
    )
}

export default Home