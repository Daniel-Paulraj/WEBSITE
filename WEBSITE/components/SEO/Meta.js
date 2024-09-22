import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Daniel Paulraj Portfolio - Computer Engineering Student</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Daniel Paulraj Portfolio - Computer Engineering Student" />
            <meta name="description"
                content="Daniel Paulraj's (daniel_dev) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Daniel Paulraj (daniel_dev)" />
            <meta name="keywords"
                content="daniel_dev, daniel_dev's portfolio, daniel_dev linux, ubuntu portfolio, Daniel Paulraj protfolio,Daniel Paulraj computer, Daniel Paulraj, daniel ubuntu, Daniel Paulraj ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Daniel Paulraj Portfolio - Computer Engineering Student" />
            <meta itemProp="description"
                content="Daniel Paulraj's (daniel_dev) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Daniel Paulraj Portfolio - Computer Engineering Student" />
            <meta name="twitter:description"
                content="Daniel Paulraj's (daniel_dev) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="daniel_dev" />
            <meta name="twitter:creator" content="daniel_dev" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Daniel Paulraj Portfolio - Computer Engineering Student" />
            <meta name="og:description"
                content="Daniel Paulraj's (daniel_dev) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://daniel_dev.github.io/" />
            <meta name="og:site_name" content="Daniel Paulraj Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
