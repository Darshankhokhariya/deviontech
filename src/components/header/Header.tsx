'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { IoChevronDownOutline } from 'react-icons/io5';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import { useRouter } from 'next/router';

import Logo from '../logo/Logo';
import ServiceMenu from '../services/ServiceMenu';
import { navItems } from '@/utils/utils';
import { NavItem, ServiceItems } from '@/interfaces/main';

export default function Header() {
    const [navCollapse, setNavCollapse] = useState(true);
    const [scroll, setScroll] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const handleScroll = () => {
        setScroll(window.scrollY > 20);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleMenuClick = (page: string) => {
        router.push(page);
        setNavCollapse(true);
        setDropdownOpen(false);
    };

    return (
        <header
            className={`${scroll ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
                } fixed top-0 w-full z-50 transition-all duration-300`}
        >
            {/* Desktop Navbar */}
            <nav className="py-6 hidden xl:flex items-center justify-between max-w-screen-xl container mx-auto px-4">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo />
                </Link>
                <ul className="flex items-center gap-8">
                    {navItems.map((item: NavItem, index) => (
                        <li key={index} className="relative group">
                            {item.label === 'Services' ? (
                                <div
                                    className="flex items-center gap-1 cursor-pointer"
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                    ref={dropdownRef}
                                >
                                    <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-all">
                                        {item.label}
                                    </span>
                                    <IoChevronDownOutline className="text-md transition-transform group-hover:rotate-180" />
                                    {dropdownOpen && <ServiceMenu subItems={item.subItems} />}
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`text-sm font-semibold ${router.pathname === item.href ? 'text-primary' : 'text-gray-700'
                                        } hover:text-primary transition-all`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <nav className="px-4 py-4 flex xl:hidden items-center justify-between bg-white shadow-sm">
                <Logo />
                <CgMenuRight
                    size={28}
                    className="cursor-pointer text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setNavCollapse(false)}
                />
            </nav>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 w-full h-screen bg-black bg-opacity-30 z-40 transition-all duration-300 ${navCollapse ? 'invisible opacity-0' : 'visible opacity-100'
                    }`}
                onClick={() => setNavCollapse(true)}
            >
                <div
                    className={`w-3/4 h-full bg-white p-6 transition-transform duration-300 ${navCollapse ? 'translate-x-full' : 'translate-x-0'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end">
                        <CgClose
                            size={24}
                            className="text-gray-700 cursor-pointer hover:text-primary transition-colors"
                            onClick={() => setNavCollapse(true)}
                        />
                    </div>
                    <ul className="mt-8 space-y-4">
                        {navItems.map((item: NavItem, index) => (
                            <li key={index}>
                                {item.label === 'Services' ? (
                                    <>
                                        <div
                                            className="flex items-center justify-between cursor-pointer"
                                            onClick={toggleDropdown}
                                        >
                                            <span className="text-sm font-bold text-gray-700">{item.label}</span>
                                            <HiOutlineChevronRight
                                                className={`text-md transition-transform ${dropdownOpen ? 'rotate-90 text-primary' : ''
                                                    }`}
                                            />
                                        </div>
                                        {dropdownOpen && (
                                            <div className="pl-4 mt-2 space-y-2">
                                                {item.subItems?.map((service: ServiceItems, idx) => {
                                                    const Icon = service.icon;
                                                    return (
                                                        <Link
                                                            key={idx}
                                                            href={service.href}
                                                            className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors"
                                                            onClick={() => setNavCollapse(true)}
                                                        >
                                                            <Icon className="text-lg" />
                                                            {service.label}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <span
                                        className={`block text-sm font-bold cursor-pointer ${router.pathname === item.href ? 'text-primary' : 'text-gray-700'
                                            } hover:text-primary transition-colors`}
                                        onClick={() => handleMenuClick(item.href)}
                                    >
                                        {item.label}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}
