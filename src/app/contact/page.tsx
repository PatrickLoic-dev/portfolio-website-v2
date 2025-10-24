import Link from "next/link";
import { Metadata } from "next";
import VideoBackground from "@portfolio/components/videoBackground";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
    title: "Contact | Portfolio de Kangue Loïc",
    description: "Contactez moi, développeur créatif, pour discuter de vos idées, collaborations ou simplement dire bonjour. Découvrez comment entrer en contact avec lui.",
    keywords: [
        "Kangue Loïc contact",
        "portfolio développeur",
        "contact développeur web",
        "collaboration numérique",
        "développement web",
        "React",
        "Next.js",
        "création digitale",
        "expériences utilisateur"
    ],
    authors: [{ name: "Kangue Loïc", url: "https://kangueloic.me/contact" }],
    creator: "Kangue Loïc",
    publisher: "Kangue Loïc",
    robots: "index, follow",
    openGraph: {
        title: "Contact | Kangue Loïc – Portfolio de Développeur",
        description: "Entrez en contact avec Kangue Loïc pour discuter de vos projets ou collaborations. Découvrez comment le joindre facilement.",
        url: "https://kangueloic.me/contact",
        siteName: "Portfolio Kangue Loïc",
        type: "website",
        locale: "fr_FR",
        images: [
            {
                url: "../opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Vignette Contact – Kangue Loïc",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | Kangue Loïc",
        description: "Contactez Kangue Loïc pour discuter de vos idées ou collaborations. Découvrez ses coordonnées ici.",
        creator: "@KewellLoic",
        images: ["https://kangueloic.me/assets/twitter-contact.jpg"],
    },
};

function Contact() {
    return (
        <>
            <VideoBackground />
            <div className="w-full h-fit flex flex-col sm:w-full px-[30px] md:px-32 overflow-hidden text-white z-10">
                <section className="w-full h-fit text-white flex flex-col sm:w-full mb-4  mt-25">
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl proximaNovaBold uppercase md:text-8xl md:mb-4">Get in touch !</motion.h1>
                    <p className="text-[12px] proximaNova md:text-2xl md:w-[71%]">Get in touch with me so we could discuss any of your ideas or just say hello.</p>
                </section>

                <div className="md:flex md:justify-between md:items-center md:w-4/5 md:mt-15 z-10">
                    <div className="mb-4 flex flex-col gap-5 md:w-4/2">
                        <div className="w-full h-fit text-white flex flex-col sm:w-full">
                            <h1 className="text-[22px] proximaNovaBold uppercase md:text-3xl">Email Me</h1>
                            <Link href="mailto:kangueloic9@gmail.com" className="text-[22px] proximaNova md:text-2xl md:w-[71%] relative group">
                                contact@kangueloic.me
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-[54%]"></span>
                            </Link>
                        </div>
                        <div className="w-full h-fit text-white flex flex-col sm:w-full md:mt-25">
                            <h1 className="text-[22px] proximaNovaBold uppercase md:text-4xl">Address</h1>
                            <p className="text-[22px] proximaNova flex md:text-3xl md:w-[71%]">Douala,Cameroon</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:text-2xl md:gap-8 proximaNova w-full">
                        <Link href="https://www.linkedin.com/in/patrick-loic-kangue-kwelle/" className="flex justify-between items-center group">
                            LinkedIn
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 group-hover:rotate-45 transition delay-150 duration-300 ease-in-out">
                                <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" />
                            </svg>
                        </Link>
                        <Link href="https://x.com/KewellLoic" className="flex justify-between items-center group">
                            Twitter
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 group-hover:rotate-45 transition delay-150 duration-300 ease-in-out">
                                <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" />
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com/loic_k.w.l/" className="flex justify-between items-center group">
                            Instagram
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 group-hover:rotate-45 transition delay-150 duration-300 ease-in-out">
                                <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" />
                            </svg>
                        </Link>
                        <Link href="https://github.com/PatrickLoic-dev" className="flex justify-between items-center group">
                            GitHub
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 md:h-5 group-hover:rotate-45 transition delay-150 duration-300 ease-in-out">
                                <path d="M13.2119 1.11842V10.9289C13.2119 11.079 13.1523 11.2229 13.0461 11.3291C12.94 11.4352 12.796 11.4949 12.6459 11.4949C12.4958 11.4949 12.3519 11.4352 12.2457 11.3291C12.1396 11.2229 12.0799 11.079 12.0799 10.9289V2.48622L0.967721 13.589C0.862644 13.6941 0.72013 13.7531 0.57153 13.7531C0.422929 13.7531 0.280415 13.6941 0.175338 13.589C0.0702618 13.4839 0.0112305 13.3414 0.0112305 13.1928C0.0112305 13.0442 0.0702618 12.9017 0.175338 12.7966L11.2781 1.6844H2.83548C2.68537 1.6844 2.54141 1.62477 2.43527 1.51863C2.32912 1.41249 2.26949 1.26853 2.26949 1.11842C2.26949 0.968308 2.32912 0.824346 2.43527 0.718203C2.54141 0.61206 2.68537 0.552429 2.83548 0.552429H12.6459C12.796 0.552429 12.94 0.61206 13.0461 0.718203C13.1523 0.824346 13.2119 0.968308 13.2119 1.11842Z" fill="white" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;