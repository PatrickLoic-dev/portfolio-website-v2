import * as motion from "motion/react-client";
interface ProjectCardProps {
    tag: string;
}


function Tag({ tag }: ProjectCardProps) {
    return (
        <motion.div className="w-[60px] h-[14px] bg-[#FFFFFF]/25 overflow-hidden flex justify-center items-center text-[10px] proximaNovaBold rounded-[2px] md:w-[164px] md:h-9 md:text-[20px] md:rounded-[6px] md:gap-6 text-white"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            {tag}
        </motion.div>
    );
}

export default Tag;