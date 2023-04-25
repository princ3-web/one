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
          <div>
            <img className={slides.iconImage} src={achieve0} alt="" />
            <div className={slides.iconSubtitle}>abcdefg</div>
          </div>
          <div>
            <img className={slides.iconImage} src={achieve1} alt="" />
            <div className={slides.iconSubtitle}>abcdefg</div>
          </div>
          <div>
            <img className={slides.iconImage} src={badge} alt="" />
            <div className={slides.iconSubtitle}>abcdefg</div>
          </div>
          <div>
            <img className={slides.iconImage} src={goal} alt="" />
            <div className={slides.iconSubtitle}>abcdefg</div>
          </div>
          <div>
            <img className={slides.iconImage} src={growth} alt="" />
            <div className={slides.iconSubtitle}>abcdefg</div>
          </div>
          <div>
            <img className={slides.iconImage} src={success} alt="" />
            <div className={slides.iconSubtitle}>abcdefg</div>
          </div>
        </div>
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
