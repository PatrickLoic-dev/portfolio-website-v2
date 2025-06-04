import ProjectCard from "@portfolio/components/Project cards/projectCard";
import ProjectComing from "@portfolio/components/Project cards/projectComing";

function Projects() {
    return (
        <div className="w-full h-fit sm:w-full px-[30px] overflow-hidden md:px-32">
            <section className="w-full h-screen text-white flex flex-col justify-center items-center sm:w-full">
                <h1 className="text-5xl proximaNovaBold uppercase md:text-9xl">Projects</h1>
                <p className="text-[12px] text-center proximaNova uppercase md:text-3xl md:w-[71%]">From idea to execution, these are the projects where I applied my knowledge, learned new things, and helped bring meaningful results.</p>
            </section>

            <section className="w-full h-full flex flex-col gap-5 mb-5 md:gap-44 md:mb-44">
                <
                    ProjectCard 
                    reverse={false}
                />
                <
                    ProjectCard 
                    reverse={true}
                />
                <
                    ProjectCard 
                    reverse={false}
                />
            </section>

            <section className="w-full h-fit flex flex-col gap-5 mb-5 md:flex md:flex-row md:mb-16">
                <ProjectComing />
                <ProjectComing />
            </section>
        </div>
    );
}

export default Projects;