export let siteMetadata = {
    siteUrl: "https://anirudhology.com",
    siteRepo: "https://github.com/ani03sha/anirudhology.com",
    siteLogo: "/static/images/logo.jpg",
    image: "/static/images/logo.jpg",
    socialBanner: "/static/images/logo.jpg",
    email: "anirudhology@gmail.com",
    github: "https://github.com/ani03sha",
    x: "https://x.com/anirudhology",
    facebook: "https://facebook.com/Anir35",
    youtube: "https://www.youtube.com/@anirudhology",
    linkedin: "https://www.linkedin.com/in/anirshar/",
    locale: "en-US",
    analyticsURL: "https://analytics.leohuynh.dev/share/jkwRskv0/leohuynh.dev",
    analytics: {
        plausibleDataDomain: "",
        simpleAnalytics: false, // true | false
        umamiWebsiteId: "556832b6-a3f8-477d-8989-bf153a1d36de",
        googleAnalyticsId: "G-J92MDJFGRC", // e.g. UA-000000-2 or G-XXXXXXX
    },
    socialAccounts: {
        github: "ani03sha",
        linkedin: "anirshar",
        x: "anirudhology    ",
    },
};

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
    provider: "giscus", // 'giscus' | 'utterances' | 'disqus',
    // https://giscus.app/
    giscusConfig: {
        repo: "", // process.env.GISCUS_REPO
        repositoryId: "", // process.env.GISCUS_REPOSITORY_ID
        category: "", // process.env.GISCUS_CATEGORY
        categoryId: "", // process.env.GISCUS_CATEGORY_ID
        mapping: "title",
        reactions: "1",
        metadata: "0",
        lightTheme: "light",
        darkTheme: "transparent_dark",
        themeURL: "",
    },
    // https://utteranc.es/
    utterancesConfig: {
        repo: "", // process.env.UTTERANCES_REPO
        issueTerm: "",
        label: "",
        lightTheme: "",
        darkTheme: "",
    },
    // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
    disqus: {
        shortname: "", // process.env.DISQUS_SHORTNAME
    },
};
