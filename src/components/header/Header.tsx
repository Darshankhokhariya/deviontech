'use client';
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { CgClose, CgMenuRight } from 'react-icons/cg'
import { navItems } from '@/utils/utils';
import { IoChevronDownOutline } from 'react-icons/io5';
import ServiceMenu from '../services/ServiceMenu';
import { FiChevronRight } from 'react-icons/fi';
import { HiOutlineChevronRight, HiOutlinePaintBrush } from 'react-icons/hi2';
import { IoIosMenu } from 'react-icons/io';
import { FaLaptopCode } from 'react-icons/fa';
import { AiOutlineAndroid } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Logo from '../logo/Logo';
import Icon from '../icon/Icon';
import { IconBase } from 'react-icons/lib';
import { NavItem, ServiceItems } from '@/interfaces/main';

export default function Header() {

    const [navCollapse, setNavCollapse] = useState(true)
    const [scroll, setScroll] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter()

    const toggleDropdown = () => {
        setIsOpen(true);
        setMenuOpen(!menuOpen)
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };


    useEffect(() => {
        document.addEventListener('mouseout', handleClickOutside);
        return () => {
            document.removeEventListener('mouseout', handleClickOutside);
        };
    }, []);

    const handleMenuClick = (page: string) => {
        router.push(page)
        setNavCollapse(true)
    }

    return (
        <header className={` ${scroll ? 'border-b bg-white' : 'border-b-0'} shadow-sm bg-white border-gray-200 dark:border-b-0 z-30 flex flex-col top-0 fixed w-full`}>
            <nav className='py-4 hidden xl:flex items-center justify-between max-w-screen-xl container mx-auto px-4'>
                <Link href={'/'} className='hover:text-violet-700 text-violet-500 transition-colors duration-300'>
                    <Logo />
                </Link>
                <div className='' >
                    <ul className='flex items-center gap-8'>
                        {navItems.map((item: NavItem, index) => (
                            <li key={index} className='group cursor-pointer leading-tight tracking-wide text-nav font-semibold hover:text-primary transition-all duration-300'>
                                {
                                    item?.label === "Services" ?
                                        <div className='relative group' onMouseOver={toggleDropdown} ref={dropdownRef}>
                                            <div
                                                className='flex items-center gap-1'>
                                                <p className='text-sm'>
                                                    {item?.label}
                                                </p>
                                                <IoChevronDownOutline className='text-md group-hover:rotate-180 transition-all duration-300' />
                                            </div>
                                            <div>
                                                {isOpen && <ServiceMenu subItems={item?.subItems} />}
                                            </div>
                                        </div>
                                        :
                                        <Link href={item?.href} className={`text-sm ${item?.href === router?.pathname ? "text-primary" : ""}`}>
                                            {item?.label}
                                        </Link>
                                }
                            </li>
                        ))}
                    </ul>
                </div>

            </nav>
            <nav className='px-4 py-2 flex xl:hidden items-center justify-between'>
                <Logo />
                <CgMenuRight size={25} onClick={() => setNavCollapse(false)} className='cursor-pointer' />
            </nav>

            <div className={`flex shadow-md border-2 border-gray-50 min-h-screen w-screen absolute top-0 ${!navCollapse ? 'right-0' : 'right-[-100%]'} bottom-0 z-50 ease-in duration-300`}>
                <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>
                <div className="bg-white w-3/4 border-2 border-gray-50">
                    <div className='flex justify-end p-3'>
                        <div className='bg-blue-50 rounded-full h-12 w-12 flex justify-center items-center cursor-pointer hover:bg-blue-100 transition-all duration-300'>
                            <CgClose size={20} className='flex justify-center items-center ' onClick={() => setNavCollapse(true)} />
                        </div>
                    </div>
                    {navItems.map((item, index) => (
                        item?.label === "Services" ?
                            <>
                                <div className='flex justify-between items-center group w-full cursor-pointer' onClick={toggleDropdown} >
                                    <li key={index} className='flex px-5 flex-col gap-10 group-hover:text-primary cursor-pointer line-clamp-none leading-10 tracking-wide text-sm text-nav font-bold hover:text-primary transition-all duration-300'>
                                        {item?.label}
                                    </li>
                                    <HiOutlineChevronRight className={`text-md mx-6 group-hover:text-primary ${isOpen ? "rotate-90" : ""} transition-all duration-200'`} />
                                </div>
                                <div>
                                    {menuOpen && <div className="px-3 transition-transform duration-200">
                                        {
                                            item?.subItems?.map((service: ServiceItems) => {
                                                const Icon = service.icon;
                                                return (
                                                    <Link href={service?.href} className="text-gray-700 flex gap-2 w-full px-4 py-3 leading-5 hover:text-primary transition-all duration-200" role="menuitem" ><span className='text-xl'><Icon /></span> <span className='text-sm'>{service?.label}</span></Link>
                                                )
                                            })
                                        }
                                    </div>}
                                </div>
                            </>
                            :
                            <span onClick={() => handleMenuClick(item?.href)} key={index} className={`flex px-5 flex-col gap-10 cursor-pointer line-clamp-none leading-10 tracking-wide text-sm  font-bold hover:text-primary transition-all duration-300 ${item?.href === router?.pathname ? "text-primary" : "text-nav"}`}>
                                {item?.label}
                            </span>
                    ))}
                </div>
            </div>
        </header >
    )
}