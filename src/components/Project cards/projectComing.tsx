import * as motion from "motion/react-client";

interface ProjectCardProps {
    image: string;
}

function ProjectComing({ image }: ProjectCardProps) {
    return (
        <motion.div className="w-full h-[220px] bg-cover bg-center rounded-[8px] flex items-end pl-4 pb-2 md:h-96 md:pl-9 md:pb-4 text-white  " style={{ backgroundImage: `url("${image} ")` }}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <button className='bg-[#FFFF]/25 size-fit flex justify-center items-center rounded-full text-[10px] proximaNova uppercase py-1 px-3 gap-1 md:text-[20px] md'>
                <motion.span className="size-[4px] bg-[#FF8113] rounded-full md:size-2.5"
                animate={{
                    boxShadow : ["0 0 0px #FF8113", "0 0 10px #FF8113", "0 0 0px #FF8113"],
                    transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}></motion.span>
                Coming soon
            </button>
        </motion.div>
    );
}

export default ProjectComing;