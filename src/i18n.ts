import i18n from "i18next";
import {initReactI18next, Translation} from 'react-i18next'

i18n.use(initReactI18next).init({
    fallbackLng: 'en',

    resources: {
        en: {
            translation: {
                navbar: {
                    navbar1: "Home",
                    navbar2: "Components",
                    navbar3: "Docs"
                },
                heroText: "Make your website more beautiful.",
            }
        },
        tr: {
            translation: {
                navbar: {
                    navbar1: "Anasayfa",
                    navbar2: "Bilesenler",
                    navbar3: "Belgeler"
                },
                heroText: "Websitenizi daha guzel yapin.",
            }
        }
    }
})

export default i18n;