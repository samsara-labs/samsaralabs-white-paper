const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    theme: defaultTheme({
        logo: '/images/logo.png',
    }),
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Samsara Labs',
            description: 'A WhitePaper of Samsara Labs',
        },
    },
}