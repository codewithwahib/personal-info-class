import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    import Head from 'next/head'
    import Link from 'next/link'
    import styles from '../styles/Home.module.css'
    
    export default function Home() {
      return (
        <div className={styles.container}>
          <Head>
            <title>My Resume</title>
            <meta name="description" content="One-page resume created with Next.js" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          {/* Navigation Bar */}
          <nav className={styles.navbar}>
            <ul>
              <li><Link href="#basic-info">Basic Info</Link></li>
              <li><Link href="#contact">Contact</Link></li>
              <li><Link href="#skills">Skills</Link></li>
              <li><Link href="#education">Education</Link></li>
              <li><Link href="#experience">Experience</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
            </ul>
          </nav>
    
          {/* Sections */}
          <section id="basic-info" className={styles.section}>
            <h2>Basic Information</h2>
            <p>Name: John Doe</p>
            <p>Title: Aspiring Web Developer</p>
            <p>Brief Introduction: Passionate about building user-friendly websites and applications.</p>
          </section>
    
          <section id="contact" className={styles.section}>
            <h2>Contact Information</h2>
            <p>Email: johndoe@example.com</p>
            <p>Phone: 123-456-7890</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></p>
            <p>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></p>
          </section>
    
          <section id="skills" className={styles.section}>
            <h2>Skills</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React, Next.js</li>
              <li>Version Control (Git, GitHub)</li>
              <li>Problem-solving and teamwork</li>
            </ul>
          </section>
    
          <section id="education" className={styles.section}>
            <h2>Education</h2>
            <p>Bachelor of Science in Computer Science, University of XYZ (Graduated 2023)</p>
          </section>
    
          <section id="experience" className={styles.section}>
            <h2>Experience</h2>
            <p>Internship at ABC Tech - Frontend Developer (Summer 2022)</p>
            <p>Contributed to building responsive websites using HTML, CSS, and JavaScript.</p>
          </section>
    
          <section id="portfolio" className={styles.section}>
            <h2>Portfolio</h2>
            <p>Check out my projects:</p>
            <ul>
              <li><a href="https://github.com/johndoe/project1" target="_blank">Project 1</a></li>
              <li><a href="https://github.com/johndoe/project2" target="_blank">Project 2</a></li>
            </ul>
          </section>
        </div>
      )
    }
    
  );
}
