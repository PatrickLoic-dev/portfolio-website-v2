import Link from "next/link";

function Footer() {
    return (
        <footer className="w-full h-fit bg-[#141414] px-[30px] pt-6 pb-8 flex flex-col md:w-screen md:px-32 text-white">
            <div className="flex flex-col md:flex-row md:justify-between">
                <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-[41px] sm:h-[44px] mb-8'>
                    <path d="M17.9766 0.252686V19.0221C17.9766 29.3893 9.92821 37.7924 0 37.7924V0.252686H17.9766Z" fill="white" />
                    <path d="M36 0.251709C26.0457 0.251709 17.9766 8.2298 17.9766 18.0696H36V0.251709Z" fill="white" />
                    <path d="M36 37.7905C36 26.8996 27.93 18.0696 17.9766 18.0696V37.7905H36Z" fill="white" />
                </svg>
                <div className="flex flex-col gap-0.5 md:w-2/5">
                    <h1 className="proximaNovaBold uppercase md:text-[32px]">Let&apos;s Chat</h1>
                    <Link href="/contact" className="uppercase flex items-center gap-1 md:text-[32px] proximaNova md:gap-2.5 group">
                        Contact Me Here
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 group-hover:rotate-45 transition delay-150 duration-300 ease-in-out">
                            <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" />
                        </svg>
                    </Link>
                    <div className="flex flex-row gap-1 mt-2 mb-8 justify-between md:gap-40">
                        <div className="hidden uppercase  md:flex md:flex-col md:text-2xl md:gap-2 proximaNova">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className="flex flex-col gap-1 md:text-2xl md:gap-3.5 proximaNova md:w-3/5 w-full">
                            <Link href="https://www.linkedin.com/in/patrick-loic-kangue-kwelle/" className="flex justify-between items-center group">
                                LinkedIn
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 group-hover:rotate-45 transition delay-150 duration-300 ease-in-out">
                                    <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" />
                                </svg>
                            </Link>
                            <Link href="https://x.com/KewellLoic" className="flex justify-between items-center group">
                                Twitter
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 group-hover:rotate-45 transition delay-150 duration-300 ease-in-out">
                                    <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" />
                                </svg>
                            </Link>
                            <Link href="https://www.instagram.com/loic_k.w.l/" className="flex justify-between items-center group">
                                Instagram
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 group-hover:rotate-45 transition delay-150 duration-300 ease-in-out">
                                    <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" />
                                </svg>
                            </Link>
                            <Link href="https://github.com/PatrickLoic-dev" className="flex justify-between items-center group">
                                GitHub
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 group-hover:rotate-45 transition delay-150 duration-300 ease-in-out">
                                    <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col justify-center text-[6px] gap-1.5 md:flex-row md:justify-between md:text-[20px] proximaNova">
                <div className="md:flex md:flex-col">
                    <p className="flex justify-center uppercase md:justify-start">© 2025 kangue kwelle patrick loic</p>
                    <p className="hidden md:inline">This website is genuine and product of my creativity</p>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p className="flex justify-center md:justify-end">Weather in Douala: Rain, 24.00°C</p>
                    <p className="flex justify-center md:justify-end">Time in Douala: 00 : 30 PM</p>
                </div>


            </div>
        </footer>
    );
}

export default Footer;