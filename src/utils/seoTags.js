import React from 'react';

import { Helmet } from "react-helmet";

const logo = `https://onlinedevtools.in/assets/img/angular.png`;

export const renderMetaTag = (seoMetaTagData) => {

    const { title , description , keywords } = seoMetaTagData;

    return <Helmet>

        <title>{title}</title>

        {/* Primary Meta Tags */}
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Stephen Prakash" />
        <meta name="publisher" content="DEV Blogger" />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={`${window.location.href}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.href}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logo} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${window.location.href}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={logo}></meta>
    </Helmet>
}