import { features } from "../constants";
import styles, { layout } from "../style";
import { Pic2 } from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-4" : "mb-0"} feature-card`} >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-lightblue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-5">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] text-gray">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section} >
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative hidden md:block`} style={{ marginLeft : '60px' }}>
      <img src={Pic2} alt="pic2" className="w-[95%] h-[95%] relative rounded-md "  style={{ borderRadius: '30px' }} />
    </div>
    <div className={`${layout.sectionImg} flex-col`} >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
