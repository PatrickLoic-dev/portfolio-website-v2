import Image from 'next/image'
import Tag from '../tags';
import { url } from 'inspector';

function ProjectCard() {
    return (
        <div className='mb-[20px] flex flex-col gap-6'>
            <div className="w-full h-[220px] bg-cover bg-center rounded-[8px] flex items-end pl-4 pb-2" style={{ backgroundImage: "url('/Images/Other/Fictif project background.webp')" }}>
                <button className='bg-[#FFFF]/25 size-9 flex justify-center items-center rounded-full'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" />
                    </svg>
                </button>
            </div>
            <h1 className='text-[16px] proximaNovaBold uppercase mt-2 mb-1'>
                Fictif Project Title
            </h1>
            <p className='hidden'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex gap-2">
                <Tag />
                <Tag />
            </div>
        </div>
    );
}

export default ProjectCard;