import slides from "../css/slides.module.css";
import MailTo from "./MailTo";
import icon0 from "../assets/icons/email2.png";
import icon1 from "../assets/icons/goal.png";


const text0 = [
  "I am a Web Designer & Developer",
  "who crafts custom websites,",
  "with beautiful designs",
  "and fast performance",
  "tailored to meet specific needs.",
];

const text1 = [
  {
    icon: "",
    text: "I specialize in crafting customized websites designed specifically for individuals and small businesses. My aims are to outshine mediocre choices and embrace extraordinary possibilities beyond generic templates.",
  },
  {
    icon: "",
    text: "I wish to provide unique designs at affordable prices. Website plays a vital role in creating a favorable first impression on customers, so striving for superiority is key.",
  },
  {
    icon: "",
    text: "While I have other commitments that limit my availability, I'm always on the lookout for interesting projects. Take a look at my portfolio below, and if you think we would work well together, please don't hesitate to reach out to me via email.",
  },
];

const websites = [
  {
    subtitle: "tech company",
    link: "https://princ3-web.github.io/five/",
  },
  {
    subtitle: "fantasy game",
    link: "https://princ3-web.github.io/four/",
  },
  { subtitle: "zoo park", link: "https://princ3-web.github.io/two/" },
];

const experiences = [
  {
    icon: "",
    text: "I have 1+ years experience working in development team in commercial projects in React JS (websites) and React Native (for mobile devices).",
  },
  {
    icon: "",
    text: "I have experience in working in development team, with other developers, researchers and designers.",
  },
  {
    icon: "",
    text: "My specialization is front end framework React JS, and similar technologies related to React JS.",
  },
  {
    icon: "",
    text: "I always proritize fluent website workflow and positive user experience.",
  },

  {
    icon: "",
    text: "Always I'm trying to solve problems which I face in fastest possible ways, using my experience.",
  },
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
    <div className={slides.sectionContainer} style={{ width: "80%", left: "10%" }}>
      {text1.map((item) => (
        <div className={slides.smallItem}>
            <img className={[slides.smallTextIcon]} src={icon1} alt="" />
          <div className={[slides.smallText]}>{item.text}</div>
        </div>
      ))}
    </div>,
  ],
  [
    <div className={slides.sectionContainer} style={{ width: "80%", left: "10%" }}>
      {experiences.map((item) => (
        <div className={slides.smallItem}>
          <img className={[slides.smallTextIcon]} src={icon0} alt="" />
          <div className={[slides.smallText]}>{item.text}</div>
        </div>
      ))}
    </div>,
  ],
  [
    <div className={slides.sectionContainer}>
      <div className={slides.iconContainer}>
        {websites.map((item) => (
          <a className={slides.icon} href={item.link}>
            <div className={[slides.iconWebsite]} alt="" />
            <div className={slides.iconSubtitle}>{item.subtitle}</div>
          </a>
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
