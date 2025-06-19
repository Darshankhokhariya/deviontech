"use client"
import { useState } from 'react';
import SkillCard from "./TechnologyCard"
import SectionWrapper from '../SectionWrapper';
import { technologies } from '@/utils/utils';
import TechnologyCard from './TechnologyCard';
import { Skill } from '@/interfaces/main';

const Technologies = () => {
    const categories = Array.from(new Set(technologies.map((s: { category: any; }) => s.category)))
    const [category, setCategory] = useState(categories[0])

    return (
        <SectionWrapper id='skills' className="md:mt-0 mx-4 md:mx-0">
            <div className='mt-20 pb-8'>
                <div>
                    <div className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-heading text-center'>
                        <span className='bg-blue-100 px-2'>Technologies</span>{" "}We Are Work With
                    </div>
                </div>
                <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-10 bg-white text-black p-2 flex justify-between items-center gap-3">
                    {categories.map((c: string, i: number) => (
                        <span key={i} onClick={() => setCategory(c)} className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer ${category.toLowerCase() === c.toLowerCase() ? "border-b-2 border-primary text-primary" : "hover:bg-gray-100"} transition-all duration-200 capitalize`}>{c}</span>
                    ))}
                </div>
                <div className="lg:w-3/4 2xl:w-3/5 mt-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
                    {technologies.filter((s: Skill) => s.category.toLowerCase() === category.toLowerCase()).map((s: any, i: number) => (
                        <TechnologyCard key={i} {...s} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Technologies