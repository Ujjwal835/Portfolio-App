import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio.png";
import IMG2 from "../../assets/social media 1.png";
import IMG3 from "../../assets/utility.png";
import IMG4 from "../../assets/Edusity.png";
import IMG5 from "../../assets/Bharat Clock.png";
import IMG6 from "../../assets/Todo App.png";
import IMG7 from "../../assets/calculator.png";
import IMG8 from "../../assets/password generator.png";
import IMG9 from "../../assets/usabilityhub.png";
import IMG10 from "../../assets/musicplayer.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio",
    github: "https://github.com/Ujjwal835/Portfolio-App",
    demo: "https://ujjwal835.github.io/Portfolio-App/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Blog App",
    github: "https://github.com/Ujjwal835/Social-Media-Responsive",
    demo: "https://dribbble.com/shots/21613617-Bar-charts-collection-Hyper-charts-UI-Kit",
  },
  {
    id: 3,
    image: IMG3,
    title: "Text-Utility",
    github: "https://github.com/Ujjwal835/Text-Utility-App-Using-React",
    demo: "https://ujjwal835.github.io/Text-Utility-App-Using-React/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Educity App",
    github: "https://github.com/Ujjwal835/Educity-React-App",
    demo: "https://ujjwal835.github.io/Educity-React-App/",
  },

  {
    id: 5,
    image: IMG5,
    title: "Bharat Clock",
    github: "https://github.com/Ujjwal835/Bharat-Clock",
    demo: "https://ujjwal835.github.io/Bharat-Clock/",
  },

  {
    id: 6,
    image: IMG6,
    title: "Todo App",
    github: "https://github.com/Ujjwal835/Todo-React-App",
    demo: "https://ujjwal835.github.io/Todo-React-App/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Calculator",
    github: "https://github.com/Ujjwal835/Calculator",
    demo: "https://ujjwal835.github.io/Calculator/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Password Generator",
    github: "https://github.com/Ujjwal835/Password-Generator",
    demo: "https://ujjwal835.github.io/Password-Generator/",
  },
  {
    id: 9,
    image: IMG9,
    title: "UsabilityHub Clone",
    github: "https://github.com/Ujjwal835/UsabilityHub-Clone",
    demo: "https://ujjwal835.github.io/UsabilityHub-Clone/",
  },
  {
    id: 10,
    image: IMG10,
    title: "Music Player",
    github: "https://github.com/Jindal69/Spotify-Clone",
    demo: "https://jindal69.github.io/Spotify-Clone/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
