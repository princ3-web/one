import slides from "../css/slides.module.css";
import achieve0 from "../assets/icons/achieve0.png";
import achieve1 from "../assets/icons/achieve1.png";
import badge from "../assets/icons/badge.png";
import goal from "../assets/icons/goal.png";
import growth from "../assets/icons/growth.png";
import success from "../assets/icons/success.png";

const text0 = [
  "Web Designer & Developer",
  "creating custom websites,",
  "with beautiful designs,",
  "and fast performance",
  "for your needs.",
];

const Icons = [
  { image: achieve0, subtitle: "creative approach to improve work effectiveness" },
  { image: achieve1, subtitle: "collaborative creation of projects designs" },
  { image: badge, subtitle: "coherence and logic code" },
  { image: goal, subtitle: "flexible approach to new technologies" },
  { image: growth, subtitle: "good skills in error fixing" },
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
          {Icons.map((item) => (
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
  [
    <>
      <div className={slides.sectionContainer}></div>
    </>,
  ],
  [
    <>
      <div className={slides.sectionContainer}></div>
    </>,
  ],
];

export default SlidesContent;
