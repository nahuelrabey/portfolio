import {Montserrat, Open_Sans} from "@next/font/google"

const primary = Montserrat({ subsets: ["latin"], variable:"--font-primary"});
const secundary = Open_Sans({subsets: ["latin"], variable:"--font-secundary"});

export const fontsClass = `${primary.variable} ${secundary.variable}`