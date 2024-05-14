import styles from "../style";
import { GIF, Contact_pic } from "../assets";
import GetStarted from "./GetStarted";

const ContactSection = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col `}>

      {/* The Left Part */}

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className=" min-h-screen flex justify-center items-center rounded-2xl">
          <div className="customblue p-8 rounded-lg shadow-md max-w-lg"> {/* Adjusted max-w-lg for larger contact form */}
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2> {/* Increased text size */}
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold">Full Name</label>
                <input type="text" id="name" name="name" className="form-input mt-1 block w-full pl-10 rounded-lg text-lg" /> {/* Increased input size */}
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                <input type="email" id="email" name="email" className="form-input mt-1 block w-full rounded-lg text-lg" /> {/* Increased input size */}
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                <textarea id="message" name="message" rows="6" className="form-textarea mt-1 block w-full rounded-lg text-lg"></textarea> {/* Increased textarea rows and input size */}
              </div>
              <div className="flex justify-center">
                <button type="submit" className="px-6 py-3 bg-lightblue text-white rounded-md hover:bg-blue-600">Send</button> {/* Increased button padding */}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* The Right Part */}

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-7 relative`}>
        <img src={Contact_pic} alt="billing" className="w-full h-auto mt-7 ml-7 relative rounded-md z-[5]" style={{ borderRadius: '20px' }} /> {/* Adjusted image size */}
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default ContactSection;
