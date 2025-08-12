import VideoBackground from "@portfolio/components/videoBackground";
import * as motion from "motion/react-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kangue Loïc | Creative Developer Portfolio",
  description: "Découvrez Kangue Loïc, un développeur créatif spécialisé dans la création d’expériences numériques immersives et uniques. Portefeuille personnel, projets innovants et passion pour le code au service de l'expérience utilisateur.",
  keywords: [
    "Kangue Loïc",
    "développeur créatif",
    "portfolio développeur",
    "expériences numériques",
    "développeur web",
    "développement frontend",
    "UX UI créatif",
    "développeur React",
    "développeur Next.js"
  ],
  authors: [{ name: "Kangue Loïc", url: "https://kangueloic.me" }],
  creator: "Kangue Loïc",
  publisher: "Kangue Loïc",
  robots: "index, follow",
  openGraph: {
    title: "Kangue Loïc | Creative Developer Portfolio",
    description: "Portfolio de Kangue Loïc, développeur web créatif. Création d'expériences digitales uniques et immersives. Découvrez mes projets.",
    url: "https://kangueloic.me",
    siteName: "Kangue Loïc | Portfolio",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kangue Loïc - Développeur Créatif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kangue Loïc | Creative Developer",
    description: "Développeur web créatif, spécialisé en expériences digitales immersives. Visitez mon portfolio.",
    creator: "@KewellLoic",
    images: ["https://kangueloic.me/twitter-card.jpg"],
  },
};


export default function Home() {
  return (
    <>
      <VideoBackground />
      <div className="w-full h-full py-[32px] px-[30px] flex flex-col justify-end sm:w-full md:px-32 text-white">
        <div>
          <motion.h1
            className="text-5xl proximaNovaExtraBold uppercase md:text-6xl"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            Hi I&apos;m
            <br />Patrick Loic
          </motion.h1>
          <motion.h2 className="text-[20px] proximaNovaRegular mt-2 md:text-3xl uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            A creative developer, that create experiences that are meant to be lived.
          </motion.h2>
        </div>
      </div>
    </>
  );
}
