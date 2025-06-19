import Image from "next/image"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PortfolioProps } from "@/interfaces/main";
import Link from "next/link";
import { useRouter } from "next/router";

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const PortfolioCard: React.FC<PortfolioProps> = ({ title, image, url, category }) => {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className="rounded-md"
        >
            <Link href={url} target="_blank">
                <div className="w-full bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] rounded-md p-3 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
                    <img className="h-full w-full rounded-md" src={image} />
                    {/* <div className="font-semibold pt-3">{title}</div> */}
                </div>
            </Link>
        </motion.div>
    )
}

export default PortfolioCard