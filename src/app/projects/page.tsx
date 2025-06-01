import Footer from "@portfolio/components/footer";
import ProjectCard from "@portfolio/components/Project cards/projectCard";
import ProjectComing from "@portfolio/components/Project cards/projectComing";

function Projects() {
    return (
        <div className="w-full h-full sm:w-full py-[32px] px-[30px]">
            <section className="w-full h-full text-white flex flex-col justify-center items-center sm:w-full bg-amber-500">
                <h1 className="text-5xl proximaNovaBold uppercase md:text-6xl">Projects</h1>
                <p className="text-[12px] text-center proximaNovaRegular uppercase">From idea to execution, these are the projects where I applied my knowledge, learned new things, and helped bring meaningful results.</p>
            </section>

            <section className="w-full h-full">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectComing />
            </section>
            <Footer />
        </div>
    );
}

export default Projects;