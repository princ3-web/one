import slides from "../css/slides.module.css";
import achieve0 from "../assets/icons/achieve0.png";
import achieve1 from "../assets/icons/achieve1.png";
import badge from "../assets/icons/badge.png";
import goal from "../assets/icons/goal.png";
import growth from "../assets/icons/growth.png";
import success from "../assets/icons/success.png";

const SlidesContent = [
  [
    <>
      <div className={slides.sectionContainer}>
        <div className={[slides.text]}>Web Designer & Developer</div>
        <div className={[slides.text]}>creating custom websites,</div>
        <div className={[slides.text]}>with beautiful designs,</div>
        <div className={[slides.text]}>and fast performance</div>
        <div className={[slides.text]}>for your needs.</div>
      </div>
    </>,
  ],
  [
    <>
      <div className={slides.sectionContainer}>
        <div className={slides.iconContainer}>
        <img className={slides.icon} src={achieve0} alt="" />
        <img className={slides.icon} src={achieve1} alt="" />
        <img className={slides.icon} src={badge} alt="" />
        <img className={slides.icon} src={goal} alt="" />
        <img className={slides.icon} src={growth} alt="" />
        <img className={slides.icon} src={success} alt="" />
      </div>
    </>,
  ],
  [
    <>
      <div className={slides.sectionContainer}>
        <div className={[slides.text]}>ABCD EFGH ijkl</div>
      </div>
    </>,
  ],
  [
    <>
      <div className={slides.sectionContainer}>
        <div className={[slides.text]}>ABCD EFGH ijkl</div>
      </div>
    </>,
  ],
  [
    <>
      <div className={slides.sectionContainer}>
        <div className={[slides.text]}>ABCD EFGH ijkl</div>
      </div>
    </>,
  ],
];

export default SlidesContent;
