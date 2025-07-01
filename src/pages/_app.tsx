"use client"
import React from 'react'
import "../app/globals.css";
import Header from '@/components/header/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '@/components/footer/Footer';
import { useRouter } from 'next/router';
import { Metadata } from '@/interfaces/main';
import { COMPANY_NAME, contact, metadata } from '@/utils/utils';
import { BsWhatsapp } from "react-icons/bs";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()
    const currentPage = router.pathname.substring(1);

    const pageMetadata = (metadata as Metadata)[currentPage] || {
        title: `${COMPANY_NAME}`,
        description: `Welcome to ${COMPANY_NAME}, your gateway to modern web development.`,
        keywords: ["Next.js", "React", "Software Development", "Web Solutions", "devion", "devion", "devion tech", "devion tech"]
    };

    return (
        <div>
            <Head>
                <title>{pageMetadata.title}</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="description" content={pageMetadata.description} />
                <meta name="keywords" content={pageMetadata.keywords.join(",")} />
            </Head>
            <Toaster position="top-center" />
            <Header />
            <Component {...pageProps} />
            <Footer />
            <a href={`https://wa.me/${contact.whatsappNumber}?text=${contact.whatsappText}`} target="_blank" className="fixed bottom-12 right-12 z-50">
                <div className="flex items-center p-2 justify-center w-11 h-11 bg-green-500 rounded-full shadow-lg transition duration-200 hover:bg-green-600 animate-pulse">
                    <img src="https://uploads-ssl.webflow.com/62b5ca109278e030a060e942/62bf28776d90ec6fa2bec0f4_iconmonstr-whatsapp-1-240.png" alt="WhatsApp" className="w-14" />
                </div>
            </a>
        </div>
    )
}

export default MyApp