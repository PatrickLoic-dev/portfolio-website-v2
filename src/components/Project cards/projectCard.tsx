import Tag from '../tags';
import * as motion from "motion/react-client";

interface ProjectCardProps {
    reverse?: boolean;
    image: string;
    title: string;
    description: string;
    tags?: string[];
    url: string;
}

function ProjectCard({ reverse = false, image, title, description, tags, url }: ProjectCardProps) {

    return (
        <div className={`flex flex-col gap-6 md:w-full md:justify-between ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} text-white `} >
            <motion.a href={url} className="w-full h-[220px] bg-cover bg-center rounded-[8px] flex items-end pl-4 pb-2 md:w-3/5 md:h-96 md:pl-9 md:pb-4 group cursor-pointer" style={{ backgroundImage: `url("${image}")` }}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <span  className='bg-[#FFFF]/25 size-9 flex justify-center items-center rounded-full md:size-16 group-hover:bg-white transition delay-150 duration-300 ease-in-out'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 group-hover:rotate-45 transition delay-150 duration-300 ease-in-out">
                        <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" className='group-hover:fill-[#5a5a5a] transition delay-150 duration-300 ease-in-out' />
                    </svg>
                </span>
            </motion.a>
            <div className="flex flex-col md:w-1/2 md:justify-between">
                <motion.h1 className='text-[16px] proximaNovaBold uppercase mt-2 mb-1 md:text-[32px]'
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    {title}
                </motion.h1>
                <motion.p className='hidden md:inline text-2xl proximaNova md:mb-4 md:text-justify'
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    {description}
                </motion.p>
                <div className="flex gap-2">
                    {tags && tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;