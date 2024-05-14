import styles from "../style";
import {  GIF } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col `}>

{/* The Left Part */}

<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
  <div className="flex flex-row justify-between items-center w-full">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[30px] text-white ss:leading-[85.0px] leading-[42px]">
      Change All your Files just with a Click <br className="sm:block hidden" />{" "}
    </h1>
  </div>
    <p className={`${styles.paragraph} max-w-[570px] ss:text-[18px] text-[14px] mt-5 ml-4 ss:leading-[20.0px] leading-[25px]`}>
      ✔️ Streamline Your Workflow: Instantly Transform Every File!
    </p>
    <p className={`${styles.paragraph} max-w-[570px] ss:text-[18px] text-[14px] mt-3 ml-4 ss:leading-[20.0px] leading-[25px] `}>
      ✔️ Instant Transformation: One Click, Endless Possibilities!
    </p>
    <p className={`${styles.paragraph} max-w-[570px] ss:text-[18px] text-[14px] mt-3 ml-4 ss:leading-[20.0px] leading-[25px]`}>
      ✔️ Update Your Library in Seconds with a Single Click!
    </p>
  <div className="flex max-w-[570px] justify-center mt-8 xl:ml-7 sm:ml-4">
  <button className="bg-lightblue   hover:bg-lightbluehover text-white ss:text-[19px] text-[14px] font-semibold py-3 px-8 rounded-md mr-4">
    Get Started
  </button>
  <button className="bg-darkgray hover:bg-customblue text-white ss:text-[19px] text-[14px] font-semibold py-3 px-8 rounded-md">
    Learn More
  </button>
</div>

</div>


{/* The Right Part */}

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-7 relative`}>
        <img src={GIF} alt="billing" className="w-[80%] h-[100%] mt-7 ml-7 relative rounded-md z-[5]"  style={{ borderRadius: '20px' }} />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
