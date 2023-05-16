import slides from "../css/slides.module.css";
import achieve0 from "../assets/icons/achieve0.png";
import achieve1 from "../assets/icons/achieve1.png";
import design from "../assets/icons/design.png";
import techs from "../assets/icons/techs.png";
import badge from "../assets/icons/badge.png";
import goal from "../assets/icons/goal.png";
import growth from "../assets/icons/growth.png";
import success from "../assets/icons/success.png";
import window from "../assets/icons/success.png";

const text0 = [
  "Web Designer & Developer",
  "creating custom websites,",
  "with beautiful designs,",
  "and fast performance",
  "for your needs.",
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
  { image: achieve1, subtitle: "creative approach to improve work effectiveness" },
  { image: design, subtitle: "collaborative creation of projects designs" },
  { image: badge, subtitle: "coherent and logic code" },
  { image: techs, subtitle: "flexible approach to new technologies" },
  { image: goal, subtitle: "good skills in error fixing and bug-free coding" },
  { image: success, subtitle: "always open to find new possibilities" },
];


const SlidesContent = [
  [
    <>
      <div className={slides.sectionContainer}>
        {text0.map((item) => (
          <div className={[slides.text]}>{item}</div>
        ))}
      </div>
    </>,
  ],
  [
    <>
      <div className={slides.sectionContainer}>
        <div className={slides.iconContainer}>
          {Icons0.map((item) => (
            <div className={slides.icon}>
              <img className={slides.iconImage} src={item.image} alt="" />
              <div className={slides.iconSubtitle}>{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </>,
  ],
  [
    <>
      <div className={slides.sectionContainer}>
        <div className={slides.iconContainer}>
          {Icons1.map((item) => (
            <div className={slides.icon}>
              <img className={slides.iconImage} src={item.image} alt="" />
              <div className={slides.iconSubtitle}>{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </>,
  ],
  [
    <>
      <div className={slides.sectionContainer}></div>
    </>,
  ],
];

export default SlidesContent;
