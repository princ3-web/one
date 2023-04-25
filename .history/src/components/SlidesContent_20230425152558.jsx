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
  { image: achieve0, subtitle: "usprawnienia funkcjonowania firmy" },
  { image: achieve1, subtitle: "współpraca nad tworzeniem designu" },
  { image: badge, subtitle: "teamworkowa współpraca nad kodem" },
  { image: goal, subtitle: "fast learning new techs" },
  { image: growth, subtitle: "good finding and fixing errors skills" },
  { image: success, subtitle: "abcdefg" },
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
