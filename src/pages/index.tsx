import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Resume</title>
        <meta name="description" content="One-page resume created with Next.js and TypeScript" />
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
        <p>Name:  Muhammad Hassan Jaffer</p>
        <p>Title: Aspiring Web Developer</p>
        <p>Brief Introduction: Passionate about building user-friendly websites and applications.</p>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact Information</h2>
        <p>Email: hassanjaffer043@gmail.com
        </p>
        <p>Phone: 03XX-XXXXXX</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/hassan" target="_blank" rel="noopener noreferrer">linkedin.com/in/hassan</a></p>
        <p>GitHub: <a href="https://github.com/hassan" target="_blank" rel="noopener noreferrer">github.com/hassan</a></p>
      </section>

      <section id="skills" className={styles.section}>
        <h2>Skills</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>React.js, Next.js</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Responsive Web Design</li>
          <li>Problem-solving and Collaboration</li>
        </ul>
      </section>

      <section id="education" className={styles.section}>
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science, University of XYZ (Graduated 2023)</p>
        <p>Relevant Coursework: Web Development, Algorithms, Data Structures, Software Engineering</p>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
        <h2>Experience</h2>
        <div className={styles.experienceItem}>
          <h3>Frontend Developer Intern - ABC Tech</h3>
          <p><em>Summer 2022</em></p>
          <ul>
            <li>Collaborated with senior developers to build responsive websites using HTML, CSS, and JavaScript.</li>
            <li>Developed interactive UI components using React.js and styled components for improved user experience.</li>
            <li>Worked with cross-functional teams to improve application performance and maintainability.</li>
            <li>Contributed to bug fixes, code reviews, and ensured the code adhered to best practices.</li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <h3>Web Developer - Freelance</h3>
          <p><em>January 2021 - Present</em></p>
          <ul>
            <li>Designed and developed responsive websites for small businesses and personal portfolios.</li>
            <li>Implemented custom WordPress themes and plugins to match client requirements.</li>
            <li>Provided ongoing support for clients, ensuring websites were up to date and optimized.</li>
            <li>Built user-friendly interfaces using modern front-end technologies like React and Next.js.</li>
          </ul>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={styles.section}>
        <h2>Portfolio</h2>
        <p>Check out some of my projects:</p>
        <ul>
          <li><a href="https://brand-lift-ads-posting.vercel.app/" target="_blank" rel="noopener noreferrer">Project 1</a></li>
          <li><a href="https://wallet-wahib-tcss-2.vercel.app/" target="_blank" rel="noopener noreferrer">Project 2</a></li>
          <li><a href="https://cakes-psi.vercel.app/" target="_blank" rel="noopener noreferrer">Project 3</a></li>
        </ul>
      </section>

      {/* More sections as needed */}
    </div>
  );
}

export default Home;
