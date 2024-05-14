import { stats } from "../constants";
import styles from "../style";

const Review_Title = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-0 mt-6 mb-0`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex flex-col justify-center items-center m-3`} >
        <p className="font-poppins text-[35.45px] sm:text-[50.45px] font-semibold text-white uppercase mb-0">
          {'Reviews'}
        </p>
        <h4 className="font-poppins font-normal text-[12.45px] sm:text-[15.45px] leading-[21.58px] text-gray text-center">
          {'Discover What Our Client said about us'}
        </h4>
      </div>
    ))}
  </section>
);


export default Review_Title ;
