'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as motion from "motion/react-client";

function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShow(false); // Scrolling down
            } else {
                setShow(true); // Scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    return (
        <>
            <header className={`text-white w-screen sm:w-[90%] md:w-full md:px-32 py-[32px] px-[30px] flex items-center justify-between fixed z-50 transition-transform duration-300 ease-in-out ${show ? 'translate-y-0' : '-translate-y-full'}`}>
                <Link href="/">
                    <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-[41px] sm:h-[44px]'>
                        <path d="M17.9766 0.252686V19.0221C17.9766 29.3893 9.92821 37.7924 0 37.7924V0.252686H17.9766Z" fill="white" />
                        <path d="M36 0.251709C26.0457 0.251709 17.9766 8.2298 17.9766 18.0696H36V0.251709Z" fill="white" />
                        <path d="M36 37.7905C36 26.8996 27.93 18.0696 17.9766 18.0696V37.7905H36Z" fill="white" />
                    </svg>
                </Link>

                <div className="sm:flex items-center gap-8 uppercase">

                    <motion.a href="/" className="menu-item hidden sm:hidden md:inline md:overflow-hidden md:h-fit">Home</motion.a>
                    <a href="/about" className="menu-item hidden sm:hidden md:inline">About</a>
                    <a href="/projects" className="menu-item hidden sm:hidden md:inline">Projects</a>
                    <a href="/contact" className="menu-item hidden sm:hidden md:inline">Contact</a>
                    <button className="md:hidden" onClick={() => setOpen(true)}>
                        <svg width="24" height="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.0204048C0.585786 0.0204048 0.25 0.356191 0.25 0.770405C0.25 1.18462 0.585786 1.5204 1 1.5204H15C15.4142 1.5204 15.75 1.18462 15.75 0.770405C15.75 0.356191 15.4142 0.0204048 15 0.0204048H1Z" fill="#FFFAFA" />
                            <path d="M1 6.0204C0.585786 6.0204 0.25 6.35619 0.25 6.7704C0.25 7.18462 0.585786 7.5204 1 7.5204H15C15.4142 7.5204 15.75 7.18462 15.75 6.7704C15.75 6.35619 15.4142 6.0204 15 6.0204H1Z" fill="#FFFAFA" />
                            <path d="M1 12.0204C0.585786 12.0204 0.25 12.3562 0.25 12.7704C0.25 13.1846 0.585786 13.5204 1 13.5204H15C15.4142 13.5204 15.75 13.1846 15.75 12.7704C15.75 12.3562 15.4142 12.0204 15 12.0204H1Z" fill="#FFFAFA" />
                        </svg>
                    </button>
                </div>

            </header>

            {open && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col py-[32px] px-[30px]">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-[41px] sm:h-[44px]'>
                                <path d="M17.9766 0.252686V19.0221C17.9766 29.3893 9.92821 37.7924 0 37.7924V0.252686H17.9766Z" fill="black" />
                                <path d="M36 0.251709C26.0457 0.251709 17.9766 8.2298 17.9766 18.0696H36V0.251709Z" fill="black" />
                                <path d="M36 37.7905C36 26.8996 27.93 18.0696 17.9766 18.0696V37.7905H36Z" fill="black" />
                            </svg>
                        </Link>
                        <button className="" onClick={() => setOpen(false)}>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.9231 8.75636C31.3868 8.29261 31.3868 7.54073 30.9231 7.07698C30.4593 6.61323 29.7074 6.61323 29.2437 7.07698L19 17.3206L8.75636 7.07698C8.29261 6.61324 7.54073 6.61324 7.07698 7.07698C6.61323 7.54073 6.61323 8.29261 7.07698 8.75636L17.3206 19L7.07703 29.2436C6.61328 29.7074 6.61328 30.4593 7.07703 30.923C7.54077 31.3868 8.29266 31.3868 8.7564 30.923L19 20.6794L29.2437 30.923C29.7074 31.3868 30.4593 31.3868 30.923 30.923C31.3868 30.4593 31.3868 29.7074 30.923 29.2437L20.6794 19L30.9231 8.75636Z" fill="black" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col gap-4 h-full justify-end text-black uppercase">
                        <motion.a href="/" className="proximaNovaExtraBold text-5xl" onClick={() => setOpen(false)}
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}>Home</motion.a>
                        <motion.a href="/about" className="proximaNovaExtraBold text-5xl" onClick={() => setOpen(false)}
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}>About</motion.a>
                        <motion.a href="/projects" className="proximaNovaExtraBold text-5xl" onClick={() => setOpen(false)}
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}>Projects</motion.a>
                        <motion.a href="/contact" className="proximaNovaExtraBold text-5xl" onClick={() => setOpen(false)}
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}>Contact</motion.a>
                    </div>
                </div>

            )}
        </>
    );
}

export default Header;
