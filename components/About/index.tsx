import React, { useState } from 'react';

const menu = [
  { text: 'Home', icon: 'uil uil-estate navIcon', path: '#home' },
  { text: 'About', icon: 'uil uil-user navIcon', path: '#about' },
  { text: 'Skills', icon: 'uil uil-file-alt navIcon', path: '#skills' },
  { text: 'Qualification', icon: 'uil uil-briefcase-alt navIcon', path: '#qualification' },
  {
    text: 'Blog',
    icon: 'uil uil-scenery navIcon',
    path: 'https://stadnik.im.github.io',
    blank: '_blank',
  },
  // { text: 'ContactMe', icon: 'uil uil-message navIcon', path: '#contact' },
];

export default function About() {
  const [isActiveMenu, setActiveMenu] = useState(false);
  const [isActiveSkills, setActiveSkills] = useState('');
  const [isActiveQualification, setActiveQualification] = useState('qualification1');

  const toggleSkills = (value: string) => {
    setActiveSkills(value);
    if (value === isActiveSkills) {
      setActiveSkills('');
    }
  };
  const toggleQualification = (value: string) => {
    setActiveQualification(value);
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="navLogo">
            Nikolay
          </a>
          <div className={`navMenu  ${isActiveMenu ? 'showMenu' : ''}`} id="nav-menu">
            <ul className="navList grid">
              {menu.map((obj) => (
                <li className="navItem" key={obj.path}>
                  <a target={obj?.blank} href={obj.path} className="navLink" rel="noreferrer">
                    <i className={obj.icon}></i> {obj.text}
                  </a>
                </li>
              ))}
            </ul>
            <i
              onClick={() => setActiveMenu(!isActiveMenu)}
              className="uil uil-times navClose"
              id="nav-close"></i>
          </div>
          <div className="navBtn">
            <div className="navToggle" id="nav-toggle">
              <i onClick={() => setActiveMenu(!isActiveMenu)} className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="home section" id="home">
          <div className="homeContainer container grid">
            <div className="homeContent grid">
              <div className="homeSocial">
                <a
                  href="https://github.com/nickstdnk"
                  target="_blank"
                  className="homeSocialIcon"
                  rel="noreferrer">
                  <i className="uil uil-github"></i>
                </a>

                <a
                  href="https://www.instagram.com/nickstdnk"
                  target="_blank"
                  className="homeSocialIcon"
                  rel="noreferrer">
                  <i className="uil uil-instagram"></i>
                </a>

                <a
                  href="https://vk.com/nickstdnk"
                  target="_blank"
                  className="homeSocialIcon"
                  rel="noreferrer">
                  <i className="uil uil-vk"></i>
                </a>
              </div>

              <div className="homeImg">
                <svg className="homeBlob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />

                    <image className="homeBlobImg" x="25" y="10" href="img/logo.png" />
                  </g>
                </svg>
              </div>

              <div className="homeData">
                <h1 className="homeTitle">Hi, I Am Nikolay</h1>
                <h3 className="homeSubtile">Front-End developer</h3>
                <p className="homeDescription">
                  Hight level experience in web design and development knowledge, producing quility
                  work.
                </p>
              </div>
            </div>

            <div className="homeScroll">
              <a href="#about" className="homeScrollButton buttonFlex">
                <i className="uil uil-mouse-alt homeScrollMouse"></i>
                <span className="homeScrollName">Scroll down</span>
                <i className="uil uil-arrow-down homeScrollArrow"></i>
              </a>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="sectionTitle">About Me</h2>
          <span className="sectionSubtitle">My introduction</span>

          <div className="aboutContainer container grid">
            <img src="img/about.jpg" alt="" className="aboutImg" />

            <div className="aboutData">
              <p className="aboutDescription">
                Web developer, with extensive knowledge, working in web technologies and UI design,
                delivering quality work.
              </p>
              <div className="aboutInfo">
                <div>
                  <span className="aboutInfoTitle">02+</span>
                  <span className="aboutInfoName">
                    Year <br /> experience
                  </span>
                </div>

                <div>
                  <span className="aboutInfoTitle">05+</span>
                  <span className="aboutInfoName">
                    Completed <br /> project
                  </span>
                </div>

                <div>
                  <span className="aboutInfoTitle">02+</span>
                  <span className="aboutInfoName">
                    Companies <br /> worked
                  </span>
                </div>
              </div>

              <div className="aboutButtons">
                <a download="" href="cv/stadnik.pdf" className="button buttonFlex">
                  Download CV<i className="uil uil-download-alt buttonIcon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="sectionTitle">Skills</h2>
          <span className="sectionSubtitle">My technical level</span>

          <div className="skillsContainer container grid">
            {/* ====================== SKILLS 1 ===================== */}
            <div
              className={`skillsContent ${
                isActiveSkills === 'skills1' ? 'skillsOpen' : 'skillsClose'
              }`}
              onClick={(e) => toggleSkills(e.currentTarget.id)}
              id="skills1">
              <div className="skillsHeader">
                <i className="uil uil-brackets-curly skillsIcon"></i>

                <div>
                  <h1 className="skillsTitle">Frontend developer</h1>
                  <span className="skillsSubtitle">More than 2 years</span>
                </div>

                <i className="uil uil-angle-down skillsArrow"></i>
              </div>

              <div className="skillsList grid">
                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">TypeScript, JavaScript</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">NextJS, ReactJS</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">Redux (Saga, Thunk, Reselect)</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">React Hook Form</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">ESLint, Prettier</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">SCSS</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">Material UI</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>
                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">Webpack / Gulp</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* ====================== SKILLS 2 ===================== */}
            <div
              className={`skillsContent ${
                isActiveSkills === 'skills2' ? 'skillsOpen' : 'skillsClose'
              }`}
              onClick={(e) => toggleSkills(e.currentTarget.id)}
              id="skills2">
              <div className="skillsHeader">
                <i className="uil uil-server-network skillsIcon"></i>

                <div>
                  <h1 className="skillsTitle">Backend developer</h1>
                  <span className="skillsSubtitle">More than 5 months</span>
                </div>

                <i className="uil uil-angle-down skillsArrow"></i>
              </div>

              <div className="skillsList grid">
                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">NodeJS / NestJS</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">TypeORM</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">JWT / PassportJS</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div> */}
            {/* ====================== SKILLS 3 ===================== */}
            <div
              className={`skillsContent ${
                isActiveSkills === 'skills3' ? 'skillsOpen' : 'skillsClose'
              }`}
              onClick={(e) => toggleSkills(e.currentTarget.id)}
              id="skills3">
              <div className="skillsHeader">
                <i className="uil uil-swatchbook skillsIcon"></i>

                <div>
                  <h1 className="skillsTitle">Design</h1>
                  <span className="skillsSubtitle">More than 1 year</span>
                </div>

                <i className="uil uil-angle-down skillsArrow"></i>
              </div>

              <div className="skillsList grid">
                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">Figma</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage "></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">Photoshop</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage "></span>
                  </div>
                </div>
              </div>
            </div>

            {/* ====================== SKILLS 4 ===================== */}
            <div
              className={`skillsContent ${
                isActiveSkills === 'skills4' ? 'skillsOpen' : 'skillsClose'
              }`}
              onClick={(e) => toggleSkills(e.currentTarget.id)}
              id="skills4">
              <div className="skillsHeader">
                <i className="uil uil-layer-group skillsIcon"></i>

                <div>
                  <h1 className="skillsTitle">Other</h1>
                </div>

                <i className="uil uil-angle-down skillsArrow"></i>
              </div>

              <div className="skillsList grid">
                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">Git / GitHub / GitLab</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">Docker, CI/CD</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">Flutter</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>

                <div className="skillsData">
                  <div className="skillsTitles">
                    <h3 className="skillsName">PostgreSQL / MySQL</h3>
                  </div>
                  <div className="skillsBar">
                    <span className="skillsPercentage"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </section>

        <section className="qualification section" id="qualification">
          <h2 className="sectionTitle">Qualification</h2>
          <span className="sectionSubtitle">My personal journey</span>
          <div className="qualificationContainer container">
            <div className="qualificationTabs">
              <div
                onClick={(e) => toggleQualification(e.currentTarget.id)}
                className={`qualificationButton buttonFlex ${
                  isActiveQualification === 'qualification1' ? 'active' : ''
                }`}
                id="qualification1">
                <i className="uil uil-graduation-cap qualificationIcon"></i>
                Education
              </div>

              <div
                onClick={(e) => toggleQualification(e.currentTarget.id)}
                className={`qualificationButton buttonFlex ${
                  isActiveQualification === 'qualification2' ? 'active' : ''
                }`}
                id="qualification2">
                <i className="uil uil-briefcase-alt qualificationIcon"></i>
                Work
              </div>
            </div>
            <div className="qualificationSections">
              {/* QUALIFICATION CONTENT 1*/}
              <div
                className={`qualificationContent ${
                  isActiveQualification === 'qualification1'
                    ? 'qualificationOpen'
                    : 'qualificationClose'
                }`}
                data-content
                id="education">
                {/* QUALIFICATION 1*/}
                <div className="qualificationData">
                  <div>
                    <h3 className="qualificationTitle">Computer's operator</h3>
                    <span className="qualificationSubtitle">SGAEK - College</span>
                    <div className="qualificationCalendar">
                      <i className="uil uil-calendar-alt"></i> 2016 - 2017
                    </div>
                  </div>

                  <div>
                    <span className="qualificationRounder"></span>
                    <span className="qualificationLine"></span>
                  </div>
                </div>

                {/* QUALIFICATION 2*/}
                <div className="qualificationData">
                  <div></div>

                  <div>
                    <span className="qualificationRounder"></span>
                    <span className="qualificationLine"></span>
                  </div>
                  <div>
                    <h3 className="qualificationTitle">Technician Programmer</h3>
                    <span className="qualificationSubtitle">SGAEK - College</span>
                    <div className="qualificationCalendar">
                      <i className="uil uil-calendar-alt"></i> 2015 - 2019
                    </div>
                  </div>
                </div>

                {/* QUALIFICATION 3*/}
                <div className="qualificationData">
                  <div>
                    <h3 className="qualificationTitle">Software Engineer</h3>
                    <span className="qualificationSubtitle">BrGTU - University</span>
                    <div className="qualificationCalendar">
                      <i className="uil uil-calendar-alt"></i> 2025
                    </div>
                  </div>

                  <div>
                    <span className="qualificationRounder"></span>
                    {/* <span className="qualificationLine"></span> */}
                  </div>
                </div>
              </div>

              {/* QUALIFICATION CONTENT 2*/}
              <div
                className={`qualificationContent ${
                  isActiveQualification === 'qualification2'
                    ? 'qualificationOpen'
                    : 'qualificationClose'
                }`}
                data-content
                id="work">
                {/* QUALIFICATION 1*/}
                <div className="qualificationData">
                  <div>
                    <h3 className="qualificationTitle">Programmer</h3>
                    <span className="qualificationSubtitle">JSC - "Bresthleboprodukt"</span>
                    <div className="qualificationCalendar">
                      <i className="uil uil-calendar-alt"></i> 2019
                    </div>
                  </div>

                  <div>
                    <span className="qualificationRounder"></span>
                    <span className="qualificationLine"></span>
                  </div>
                </div>

                {/* QUALIFICATION 2*/}
                <div className="qualificationData">
                  <div></div>

                  <div>
                    <span className="qualificationRounder"></span>
                    <span className="qualificationLine"></span>
                  </div>
                  <div>
                    <h3 className="qualificationTitle">Frontend Developer</h3>
                    <span className="qualificationSubtitle">Appotime - Brest</span>
                    <div className="qualificationCalendar">
                      <i className="uil uil-calendar-alt"></i> 2019-2020
                    </div>
                  </div>
                </div>

                {/* QUALIFICATION 3*/}
                <div className="qualificationData">
                  <div>
                    <h3 className="qualificationTitle">Frontend Developer</h3>
                    <span className="qualificationSubtitle">Appotime - Minsk</span>
                    <div className="qualificationCalendar">
                      <i className="uil uil-calendar-alt"></i> 2020-2021
                    </div>
                  </div>

                  <div>
                    <span className="qualificationRounder"></span>
                    {/* <span className="qualificationLine"></span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="portfolio" id="portfolio">
          <div className="heading">
            <h2 className="sectionTitle">Portfolio</h2>
            <span className="sectionSubtitle">Our Recent Work</span>
          </div>
          <div className="portfolio-content">
            <div className="portfolio-img">
              <img src="img/portfolio1.jpg" alt="" />
            </div>
            <div className="portfolio-img">
              <img src="img/portfolio2.jpg" alt="" />
            </div>
            <div className="portfolio-img">
              <img src="img/portfolio3.jpg" alt="" />
            </div>
            <div className="portfolio-img">
              <img src="img/p4.jpg" alt="" />
            </div>
            <div className="portfolio-img">
              <img src="img/p5.jpg" alt="" />
            </div>
            <div className="portfolio-img">
              <img src="img/p6.jpg" alt="" />
            </div>
          </div>
        </section> */}

        {/* <div className="contact section" id="contact">
          <h2 className="sectionTitle">Contact Me</h2>
          <span className="sectionSubtitle">Get in touch</span>

          <div className="contactContainer container grid">
            <div>
              <div className="contactInformation">
                <i className="uil uil-phone contactIcon"></i>

                <div>
                  <h3 className="contactTitle">Call Me</h3>
                  <span className="contactSubtitle">+375(29)335-48-20</span>
                </div>
              </div>

              <div className="contactInformation">
                <i className="uil uil-envelope contactIcon"></i>

                <div>
                  <h3 className="contactTitle">Email</h3>
                  <span className="contactSubtitle">nick.stdnk@gmail.com</span>
                </div>
              </div>

              <div className="contactInformation">
                <i className="uil uil-map-marker contactIcon"></i>

                <div>
                  <h3 className="contactTitle">Location</h3>
                  <span className="contactSubtitle">Brest - Belarus</span>
                </div>
              </div>
            </div>

            <form action="" className="contactForm grid">
              <div className="contactInputs grid">
                <div className="contactContent">
                  <label htmlFor="" className="contactLabel">
                    Name
                  </label>
                  <input type="text" className="contactInput" />
                </div>

                <div className="contactContent">
                  <label htmlFor="" className="contactLabel">
                    Email
                  </label>
                  <input type="email" className="contactInput" />
                </div>
              </div>
              <div className="contactContent">
                <label htmlFor="" className="contactLabel">
                  Project
                </label>
                <input type="text" className="contactInput" />
              </div>
              <div className="contactContent">
                <label htmlFor="" className="contactLabel">
                  Message
                </label>
                <textarea name="" id="" cols={0} rows={7} className="contactInput"></textarea>
              </div>

              <div>
                <a href="#" className="button buttonFlex">
                  Send Message
                  <i className="uil uil-message buttonIcon"></i>
                </a>
              </div>
            </form>
          </div>
        </div> */}
      </main>

      <footer className="footer">
        <div className="footerBg">
          <div className="footerContainer container grid">
            <div>
              <h1 className="footerTitle">Nikolay Stadnik</h1>
              <span className="footerSubtitle">Frontend developer</span>
            </div>

            {/* <ul className="footerLinks">
              <li>
                <a href="" className="footerLink"></a>
              </li>
            </ul> */}

            <div className="footerSocials">
              <a
                href="https://github.com/nickstdnk"
                target="_blank"
                className="footerSocial"
                rel="noreferrer">
                <i className="uil uil-github"></i>
              </a>

              <a
                href="https://www.instagram.com/nickstdnk"
                target="_blank"
                className="footerSocial"
                rel="noreferrer">
                <i className="uil uil-instagram"></i>
              </a>

              <a
                href="https://vk.com/nickstdnk"
                target="_blank"
                className="footerSocial"
                rel="noreferrer">
                <i className="uil uil-vk"></i>
              </a>
            </div>
          </div>

          <p className="footerCopy">&#169; NickStdnk. All right reserved</p>
        </div>
      </footer>

      <a href="#" className="scrollUp" id="scroll-up">
        <i className="uil uil-arrow-up scrollupIcon"></i>
      </a>
    </>
  );
}
