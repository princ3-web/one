import slides from "../css/slides.module.css";
import MailTo from "./MailTo";

const text0 = [
  "I am a Web Designer & Developer",
  "who crafts custom websites,",
  "with beautiful designs",
  "and fast performance",
  "tailored to meet specific needs.",
];

const text1 = [
  "I specialize in crafting customized websites designed specifically for individuals and small businesses. My aims are to outshine mediocre choices and embrace extraordinary possibilities beyond generic templates.",
  "I wish to provide unique designs at affordable prices. Your website plays a vital role in creating a favorable first impression on your customers, so striving for superiority is key.",
  "While I have other commitments that limit my availability, I'm always on the lookout for interesting projects. Take a look at my portfolio below, and if you think we would work well together, please don't hesitate to reach out to me via email.",
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
  {subtitle: "zoo park", link: "https://princ3-web.github.io/two/" },
];

// I've worked on commercial projects in React JS (websites) and React Native (for mobile devices)

const experiences = [
  {text: "I have experience in commercial projects in React JS (websites) and React Native (for mobile devices)"},
  {text: "My specialization is front end framework React JS, and similar technologies related to React JS"},
  {text: "I always proritize fluent website workflow and clean user interface"},
  {text: "I have experience in working in development"},
  {text: "Optymalizacja i wydajność: Jeśli masz doświadczenie w optymalizacji wydajności stron internetowych, warto o tym wspomnieć. Opisz, jakie techniki stosowałeś, aby zwiększyć szybkość ładowania strony i poprawić ogólną wydajność."},
]

const SlidesContent = [
  [
    <div className={slides.sectionContainer}>
      {text0.map((item) => (
        <div className={[slides.mainText]}>{item}</div>
      ))}
    </div>,
  ],
  [
    <div className={slides.sectionContainer} style={{width: "80%", left: "10%"}}>
      {text1.map((item) => (
        <div className={[slides.smallText]}>{item}</div>
      ))}
    </div>,
  ],
  [
    <div className={slides.sectionContainer} style={{width: "80%", left: "10%"}}>
      {experiences.map((item) => (
        <div className={[slides.smallText]}>{item.text}</div>
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
    </div>
  ],
];

export default SlidesContent;
