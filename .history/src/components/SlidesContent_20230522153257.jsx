import slides from "../css/slides.module.css";
import achieve1 from "../assets/icons/achieve1.png";
import design from "../assets/icons/design.png";
import techs from "../assets/icons/techs.png";
import badge from "../assets/icons/badge.png";
import goal from "../assets/icons/goal.png";
import success from "../assets/icons/success.png";
import website0 from "../assets/icons/website0.png";
import MailTo from "./MailTo";

const text0 = [
  "I am a Web Designer & Developer",
  "who crafts custom websites,",
  "with beautiful designs",
  "and fast performance",
  "for any specific needs.",
];

const text1 = [
  "I specialize in crafting customized websites designed specifically for individuals and small businesses. You don't have to settle for mediocre choices or generic templates.",
  "I provide unique designs at affordable prices. Your website plays a vital role in creating a favorable first impression on your customers, so ensuring its excellence is crucial.",
  "While I have other commitments that limit my availability, I'm always on the lookout for interesting projects. Take a look at my portfolio below, and if you think we would work well together, please don't hesitate to reach out to me via email.",
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

const websites = [
  {
    image: website0,
    subtitle: "tech company",
    link: "https://princ3-web.github.io/five/",
  },
  {
    image: website0,
    subtitle: "fantasy game",
    link: "https://princ3-web.github.io/four/",
  },
  { image: website0, subtitle: "zoo park", link: "https://princ3-web.github.io/two/" },
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
        <div className={[slides.mainText, slides.smallText].join(" ")}>{item}</div>
      ))}
    </div>,
  ],
  [
    <div className={slides.sectionContainer}>
      <div className={slides.iconContainer}>
        {websites.map((item) => (
          <a className={slides.icon} href={item.link}>
            <div className={[slides.iconImage, slides.ic]} alt="" />
            <div className={slides.iconSubtitle}>{item.subtitle}</div>
          </a>
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
        <MailTo
          email={"gornmich@gmail.com"}
          subject={"zapytanie ws. projektu"}
          body={"dzień dobry,"}
        />
      </div>
    </div>,
  ],
];

export default SlidesContent;
