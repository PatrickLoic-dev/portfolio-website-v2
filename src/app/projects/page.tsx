import ProjectCard from "@portfolio/components/Project cards/projectCard";
import ProjectComing from "@portfolio/components/Project cards/projectComing";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projets | Portfolio de Kangue Loïc",
    description: "Explorez les projets de Kangue Loïc, de la conception à l’exécution : réalisations innovantes, technologies utilisées et résultats concrets. Découvrez comment chaque projet lui a permis de développer de nouvelles compétences et d'apporter une valeur ajoutée.",
    keywords: [
      "Kangue Loïc projets",
      "portfolio développeur",
      "réalisations numériques",
      "développement web",
      "React",
      "Next.js",
      "applications sur mesure",
      "développement fullstack",
      "expériences utilisateur"
    ],
    authors: [{ name: "Kangue Loïc", url: "https://kangueloic.me/projects" }],
    creator: "Kangue Loïc",
    publisher: "Kangue Loïc",
    robots: "index, follow",
    openGraph: {
      title: "Projets | Kangue Loïc – Portfolio de Développeur",
      description: "Découvrez les projets sur lesquels Kangue Loïc a travaillé : idées originales, stack technique, et impact concret. Un aperçu de ses compétences en développement full-stack et UX.",
      url: "https://kangueloic.me/projects",
      siteName: "Portfolio Kangue Loïc",
      type: "website",
      locale: "fr_FR",
      images: [
        {
          url: "../opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Vignette Projets – Kangue Loïc",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Projets | Kangue Loïc",
      description: "Portefeuille de projets de Kangue Loïc : de l’idée au résultat, découvrez ses réalisations web innovantes.",
      creator: "@tonPseudoTwitter",
      images: ["https://kangueloic.me/assets/twitter-projects.jpg"],
    },
  };

function Projects() {
    return (
        <div className="w-full h-fit sm:w-full px-[30px] overflow-hidden md:px-32 bg-black text-white">
            <section className="w-full h-screen text-white flex flex-col justify-center items-center sm:w-full">
                <h1 className="text-5xl proximaNovaBold uppercase md:text-9xl">Projects</h1>
                <p className="text-[12px] text-center proximaNova uppercase md:text-3xl md:w-[71%]">From idea to execution, these are the projects where I applied my knowledge, learned new things, and helped bring meaningful results.</p>
            </section>

            <section className="w-full h-full flex flex-col gap-5 mb-5 md:gap-44 md:mb-44">
                <
                    ProjectCard 
                    image={"/Images/Other/Fly banking image.jpg"}
                    title={"Fly Banking"}
                    description={"Developed a responsive web banking platform enabling users to manage accounts, perform transfers, and view transaction history abroad. My role involved building dynamic front-end interfaces and integrating secure backend services using Angular and NestJS."}
                    reverse={false}
                    url={"https://flybanking.bicec.com/home"} 
                    tags={["Angular", "NestJS"]}
                />
                <
                    ProjectCard 
                    image={"/Images/Other/Click Cadyst image.jpg"}
                    title={"Click Cadyst"}
                    description={"Click CADYST is a mobile solution that digitizes the ordering process by allowing users to browse a product catalog, select multiple items, and choose a delivery location."}
                    reverse={true}
                    url={"https://play.google.com/store/apps/details?id=com.clickcadyst.mobile&hl=fr&pli=1"} 
                    tags={["Mobile", "Ionic"]}
                />
                <
                    ProjectCard 
                    image={"/Images/Other/Mon Panier image.jpg"}
                    title={"Mon Panier"}
                    description={"Built a food marketplace allowing customers to browse, order, and pay for local products online. I contributed to implementing real-time order tracking, admin notifications, and an intuitive shopping experience on both web and mobile."}
                    reverse={false}
                    url={"Not available"} 
                    tags={["Angular", "NestJS"]}
                />
            </section>

            <section className="w-full h-fit flex flex-col gap-5 mb-5 md:flex md:flex-row md:mb-16">
                <ProjectComing image={"/Images/Other/mobile coming soon.jpg"}/> 
            </section>
        </div>
    );
}

export default Projects;