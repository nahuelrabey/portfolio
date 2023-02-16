/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from './Home.module.css'
import Image from "next/image"
import Skills, { ISkill } from '../components/Skills'
import { GetServerSideProps } from 'next'

// fonts
const inter = Inter({ subsets: ['latin'] })

type params = { skills: ISkill[] }
export default function Home({ skills }: params) {
  return (
    <>
      <Head>
        <title>Nahuel Rabey</title>
        <meta name="description" content="Personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={inter.style} className={styles.home}>
        <header>
          <div className={styles.hello}>
            <h1>Nahuel Rabey</h1>
            <Skills content={skills} />
          </div>
          <div className={styles.blob}>
            <Image src="/blob.svg" fill alt='animated blob' />
          </div>
        </header>
        <section>
          
        </section>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<params> = async () => {
  const skills: ISkill[] = [
    {
      title: "Software Developer",
      catchPhrase: "trabajando en el futuro"
    },
    {
      title: "Web Developer",
      catchPhrase: "llevando negocios al hiper-espacio!"
    },
    {
      title: "Data Scientist",
      catchPhrase: "“El precio de la luz es menor que el costo de la oscuridad.” – Arthur C. Nielsen"
    }
  ]
  return {
    props: {
      skills
    }
  }
}