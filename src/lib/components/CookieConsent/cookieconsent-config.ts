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
                    "description": "Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern.",
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
                            title:
                                'Notwendige Cookies <span class="pm__badge">Immer aktiv</span>',
                            description:
                                'Diese Cookies sind für die grundlegende Funktion der Website erforderlich. Sie ermöglichen die Kernfunktionalität und Sicherheit der Website und können daher nicht deaktiviert werden.',
                            linkedCategory: 'necessary',
                        },
                        {
                            title: 'Zusätzliche Hinweise',
                            description:
                                'Für weitere Information <a class="cc__link" href="mailto:info@doerger.net">kontaktieren Sie uns</>.',
                        },
                    ],
                },
            },
        },
    },
};


export default config;
