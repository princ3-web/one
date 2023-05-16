import slides from "../css/slides.module.css";
import achieve1 from "../assets/icons/achieve1.png";
import design from "../assets/icons/design.png";
import techs from "../assets/icons/techs.png";
import badge from "../assets/icons/badge.png";
import goal from "../assets/icons/goal.png";
import success from "../assets/icons/success.png";
import window from "../assets/icons/window.png";

const text0 = [
  "I am a Web Designer & Developer",
  "who crafts custom websites,",
  "with beautiful designs,",
  "with beautiful designs and fast performance",
  "for anyyour needs.",
];

const text1 = [
  For your specific needs, I am a Web Designer & Developer who crafts custom websites with beautiful designs and fast performance.
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
    <>
      <div className={slides.sectionContainer}>
        {text0.map((item) => (
          <div className={[slides.mainText]}>{item}</div>
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
      <div className={slides.sectionContainer}>
        <div className={slides.iconContainer}>
          {Icons2.map((item) => (
            <div className={slides.icon}>
              <img className={slides.iconImage} src={item.image} alt="" />
              <div className={slides.iconSubtitle}>{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </>,
  ],
];

export default SlidesContent;
