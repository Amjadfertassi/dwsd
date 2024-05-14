import styles from "../style";
import { A,B,C,D,E,F , How_video , addPreview , Preview , Inte , RealTime , security
} from "../assets";
import GetStarted from "./GetStarted";

const Video_use = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col mt-5 `}>
      
<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-7  relative`}>
        <img src={How_video} alt="billing" className="w-[70%] h-[100%]  ml-7 relative rounded-lg z-[5]"  style={{ borderRadius: '20px' }} />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Video_use ;
