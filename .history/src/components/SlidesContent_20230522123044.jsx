import slides from "../css/slides.module.css";
import achieve1 from "../assets/icons/achieve1.png";
import design from "../assets/icons/design.png";
import techs from "../assets/icons/techs.png";
import badge from "../assets/icons/badge.png";
import goal from "../assets/icons/goal.png";
import success from "../assets/icons/success.png";
import window from "../assets/icons/window.png";
import MailTo from "./MailTo";

const text0 = [
  "I am a Web Designer & Developer",
  "who crafts custom websites,",
  "with beautiful designs",
  "and fast performance",
  "for any specific needs.",
];

const text1 = [
  I specialize in creating sites for individuals and small businesses. You shouldn’t have to settle for cheap solutions or generic templates. I provide custom designs at afforable prices. Frequently your website is the first impression your customers will get, so make sure it’s a good one. Since my time is split between a few different things, I’m not able to take on every project I’d like to, but I'm always looking for fun work. Take a look at my portfolio below, if you think I’d be a good match send me an email.
];

const Icons0 = [
  { image: achieve1, subtitle: "experience and tasks" },
  { image: design, subtitle: "experience and tasks" },
  { image: badge, subtitle: "experience and tasks" },
  { image: techs, subtitle: "experience and tasks" },
  { image: goal, subtitle: "experience and tasks" },
  { image: success, subtitle: "experience and tasks" },
];

const Icons1 = [
  { image: achieve1, subtitle: "creative approach to improve work effectiveness" },
  { image: design, subtitle: "collaborative creation of projects designs" },
  { image: badge, subtitle: "coherent and logic code" },
  { image: techs, subtitle: "flexible approach to new technologies" },
  { image: goal, subtitle: "good skills in error fixing and bug-free coding" },
  { image: success, subtitle: "always open to find new possibilities" },
];

const Icons2 = [
  { image: window, subtitle: "abcd" },
  { image: window, subtitle: "abcd" },
  { image: window, subtitle: "abcd" },
  { image: window, subtitle: "abcd" },
  { image: window, subtitle: "abcd" },
  { image: window, subtitle: "abcd" },
];


const SlidesContent = [
  [
    <div className={slides.sectionContainer}>
      {text0.map((item) => (
        <div className={[slides.mainText]}>{item}</div>
      ))}
    </div>,
  ],
  [
    <div className={slides.sectionContainer}>
      {text1.map((item) => (
        <div className={[slides.mainText]}>{item}</div>
      ))}
    </div>,
  ],
  [
    <div className={slides.sectionContainer}>
      <div className={slides.iconContainer}>
        {Icons2.map((item) => (
          <div className={slides.icon}>
            <img className={slides.iconImage} src={item.image} alt="" />
            <div className={slides.iconSubtitle}>{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>,
  ],
  [
    <div className={slides.sectionContainer}>
      <div className={slides.iconContainer}>
        {Icons0.map((item) => (
          <div className={slides.icon}>
            <img className={slides.iconImage} src={item.image} alt="" />
            <div className={slides.iconSubtitle}>{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>,
  ],
  [
    <div className={slides.sectionContainer}>
      <div className={slides.iconContainer}>
        <MailTo email={"gornmich@gmail.com"} subject = {"zapytanie ws. projektu"} body={"dzień dobry,"}/>
      </div>
    </div>,
  ],
];

export default SlidesContent;
