function ProjectComing() {
    return (
        <div className="w-full h-[220px] bg-cover bg-center rounded-[8px] flex items-end pl-4 pb-2 md:h-96 md:pl-9 md:pb-4" style={{ backgroundImage: "url('/Images/Other/Fictif project background.webp')" }}>
            <button className='bg-[#FFFF]/25 size-fit flex justify-center items-center rounded-full text-[10px] proximaNova uppercase py-1 px-3 gap-1 md:text-[20px] md'>
               <span className="size-[4px] bg-[#FF8113] rounded-full md:size-2.5"></span>
               Coming soon
            </button>
        </div>
    );
}

export default ProjectComing;