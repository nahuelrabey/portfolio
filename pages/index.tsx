/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { Inter, Nanum_Gothic_Coding } from '@next/font/google'
import styles from './Home.module.css'
import { Demos } from "../components/Demos"

// fonts
const inter = Inter({ subsets: ['latin'] })
const inter_light = Inter({ subsets: ['latin'], weight: "300" })
const Code = Nanum_Gothic_Coding({ subsets: ['latin'], weight: "400" })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nahuel Rabey</title>
        <meta name="description" content="Personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={inter.style} id={styles.frame}>
        <div id="info">
          <h1>I'm <span id={styles.name}>Nahuel Rabey</span></h1>
          <p style={Code.style} id={styles.kind}>
            {"<"}
            Software Developer <br/>
            &emsp;<span className={styles.prop}>available=true</span> <br/>
            &emsp;contact={"["}
            <a href='https://www.linkedin.com/in/nahuel-rabey-260857180/' target="_blank" rel="noreferrer">linkedin</a>, <a href="https://twitter.com/rabey_n" target="_blank" rel="noreferrer">twitter</a>, <a href='https://github.com/nahuelrabey' target="_blank" rel="noreferrer">github</a>{"]"} <br/>
            &emsp;email='nahuelrabeywork@gmail.com'<br/>
            &emsp;demos=[
              <a href='http://unitcircle.nahuelrabey.com/' target="_blank" rel="noreferrer">unit_circle</a>, <a href='http://dividers.nahuelrabey.com/'>dividers</a>
            ]<br/>
            {"/>"}
            </p>
        </div>

        {/* <Demos /> */}

        <div style={inter_light.style} id={styles.desc}>
          <h2>About me</h2>

          <p>
            I am a multi-talented software developer with expertise in web and desktop applications, front-end and back-end technologies, microservices architecture, and Linux configurations.
          </p>

          <p>
            As a data science student, I am constantly learning and growing my skills in machine learning and data analysis. I am eager to apply these skills to real-world problems and make a positive impact through my work.
          </p>

        </div>

        <section style={inter_light.style} className={styles.cardDeck}>
          <div className={styles.card}>
            <h3>Software Design</h3>
            <p>
              I offer custom software design services to help clients bring their ideas to life. Whether you need a web application, desktop application, or mobile app, I have the skills and experience to design and build a solution that meets your needs.
            </p>
            <p>
              My process begins with understanding your goals and requirements, and then I use my expertise in front-end and back-end technologies to create a prototype and iterate until we have a final product that meets your expectations.
            </p>
            <p>
              I am committed to delivering high-quality software that is intuitive, user-friendly, and scalable.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cloud solutions</h3>
            <p>
              I can help you migrate your applications and infrastructure to the cloud, optimize your cloud costs, and implement best practices for security and compliance.
            </p>
            <p>
              I have experience working with cloud platforms like AWS and Google Cloud, and can help you choose the right platform for your needs
            </p>
            <p>
              Whether you are looking to modernize your infrastructure, improve your disaster recovery capabilities, or simply reduce your IT costs, I can help you achieve your goals through the use of cloud technologies.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Data analysis and visualization</h3>
            <p>
              As a data science professional, I am skilled in data analysis and visualization, and can help you turn your data into actionable insights.
            </p>
            <p>
              Whether you need help with data preparation, cleaning, or analysis, or simply want to create custom dashboards and reports to better understand your data, I am here to help
            </p>
            <p>
              My process begins with understanding your goals and requirements, and then I use my expertise in tools like Python and SQL to extract insights and create visualizations that clearly communicate your findings.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
