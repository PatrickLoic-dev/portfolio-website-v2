import Link from 'next/link';

function Header() {
    return (
        <div className=" w-full sm:w-[90%] md:w-[78%] py-[32px] px-[30px] bg-[#3d3d3d] flex items-center justify-between fixed">
            <Link href="/">
                <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-[41px] sm:h-[44px]'>
                    <path d="M17.9766 0.252686V19.0221C17.9766 29.3893 9.92821 37.7924 0 37.7924V0.252686H17.9766Z" fill="white" />
                    <path d="M36 0.251709C26.0457 0.251709 17.9766 8.2298 17.9766 18.0696H36V0.251709Z" fill="white" />
                    <path d="M36 37.7905C36 26.8996 27.93 18.0696 17.9766 18.0696V37.7905H36Z" fill="white" />
                </svg>
            </Link>

            <div className="sm:flex items-center gap-8 uppercase">
                <Link href="/" className="menu-item hidden sm:hidden md:inline">Home</Link>
                <Link href="/about" className="menu-item hidden sm:hidden md:inline">About</Link>
                <Link href="/projects" className="menu-item hidden sm:hidden md:inline">Projects</Link>
                <Link href="/contact" className="menu-item hidden sm:hidden md:inline">Contact</Link>
            <button className="md:hidden">
                <svg width="24" height="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.0204048C0.585786 0.0204048 0.25 0.356191 0.25 0.770405C0.25 1.18462 0.585786 1.5204 1 1.5204H15C15.4142 1.5204 15.75 1.18462 15.75 0.770405C15.75 0.356191 15.4142 0.0204048 15 0.0204048H1Z" fill="#FFFAFA" />
                    <path d="M1 6.0204C0.585786 6.0204 0.25 6.35619 0.25 6.7704C0.25 7.18462 0.585786 7.5204 1 7.5204H15C15.4142 7.5204 15.75 7.18462 15.75 6.7704C15.75 6.35619 15.4142 6.0204 15 6.0204H1Z" fill="#FFFAFA" />
                    <path d="M1 12.0204C0.585786 12.0204 0.25 12.3562 0.25 12.7704C0.25 13.1846 0.585786 13.5204 1 13.5204H15C15.4142 13.5204 15.75 13.1846 15.75 12.7704C15.75 12.3562 15.4142 12.0204 15 12.0204H1Z" fill="#FFFAFA" />
                </svg>
            </button>
        </div>

        </div>
    );
}

export default Header;