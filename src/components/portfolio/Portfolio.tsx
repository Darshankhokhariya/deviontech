import { PortfolioProps } from "@/interfaces/main";
import { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import PortfolioCard from "./PortfolioCard";
import { portfolio } from "@/utils/utils";

const Portfolio = () => {
    const categories = Array.from(new Set(portfolio.map((item: { category: string; }) => item.category)))
    const [category, setCategory] = useState(categories[0])

    return (
        <SectionWrapper id="projects" className="md:mt-0 mx-4 md:mx-0">
            <div className='mt-20'>
                <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
                    Explore Our <span className='bg-blue-100 px-2'>Portfolio</span>{" "}
                </div>
            </div>
            <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-10 bg-white text-black p-2 flex justify-between items-center gap-3">
                {categories.map((c: string, i: number) => (
                    <span key={i} onClick={() => setCategory(c)} className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer ${category.toLowerCase() === c.toLowerCase() ? "border-b-2 border-primary text-primary" : "hover:bg-gray-100"} transition-all duration-200 capitalize`}>{c}</span>
                ))}
            </div>
            <div className='max-w-screen-xl container mx-auto px-4 w-full pt-10'>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
                    {portfolio.filter((items: PortfolioProps) => items.category.toLowerCase() === category.toLowerCase()).map((item: any, i: number) =>
                        <PortfolioCard {...item} />
                    )}
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Portfolio