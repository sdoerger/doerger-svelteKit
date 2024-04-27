import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
    guiOptions: {
        consentModal: {
            layout: 'box inline',
            position: 'bottom right',
        },
        preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false,
        },
    },
    categories: {
        necessary: {
            readOnly: true,
            services: {
                __cf_bm: {
                    label:
                        '<a href="https://www.cloudflare.com/privacypolicy/" target="_blank">__cf_bm</a>',
                }
            }
        },
    },
    language: {
        default: 'de',
        autoDetect: 'browser',
        translations: {
            de: {
                consentModal: {
                    "title": "Hallo Reisender, es ist Zeit für Cookies 🍪",
                    "description": "Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und die Website-Nutzung zu analysieren.",
                    "acceptAllBtn": "Alle akzeptieren",
                    "acceptNecessaryBtn": "Nur notwendige",
                    "showPreferencesBtn": "Einstellungen verwalten",
                    "footer": "<a href=\"/privacy\">Datenschutz</a>\n<a href=\"/legal\">Impressum</a>"
                },
                preferencesModal: {
                    title: 'Cookie-Einstellungen',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Alle ablehnen',
                    savePreferencesBtn: 'Einstellungen speichern',
                    closeIconLabel: 'Schließen',
                    serviceCounterLabel: 'Service|Services',
                    sections: [
                        {
                            title: 'Cookie-Einstellungen',
                            description:
                                'Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anzubieten und die Zugriffe auf unsere Website zu analysieren. Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter.',
                        },
                        {
                            title:
                                'Notwendige Cookies <span class="pm__badge">Immer aktiv</span>',
                            description:
                                'Diese Cookies sind für die grundlegende Funktion der Website erforderlich. Sie ermöglichen die Kernfunktionalität und Sicherheit der Website und können daher nicht deaktiviert werden.',
                            linkedCategory: 'necessary',
                        },
                        // {
                        //     title: 'Funktions-Cookies',
                        //     description:
                        //         'Funktions-Cookies ermöglichen es der Website, Ihnen erweiterte Funktionen und Inhalte anzubieten. Diese Cookies können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unserer Website nutzen.',
                        //     linkedCategory: 'functionality',
                        // },
                        // {
                        //     title: 'Statistik-Cookies',
                        //     description:
                        //         'Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen, z. B. welche Seiten Sie besucht haben und auf welche Links Sie geklickt haben. Diese Informationen werden anonymisiert und zur Verbesserung der Website-Performance verwendet.',
                        //     linkedCategory: 'analytics',
                        // },
                        {
                            title: 'Marketing-Cookies',
                            description:
                                'Diese Cookies werden verwendet, um Ihnen Werbung anzuzeigen, die für Sie relevant ist.',
                            linkedCategory: 'marketing',
                        },
                        {
                            title: 'Zusätzliche Hinweise',
                            description:
                                'Für weitere Information <a class="cc__link" href="worldfortakeaway.com">kontaktieren Sie uns</a>.',
                        },
                    ],
                },
            },
        },
    },
};


export default config;
