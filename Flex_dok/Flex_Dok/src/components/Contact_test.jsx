import styles from "../style";
import {  GIF, Contact_pic } from "../assets";
import GetStarted from "./GetStarted";

const Contact_test = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col justify-center items-center`}>
            {/* Image */}
            <div className={`flex-1 hidden md:flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={Contact_pic} alt="billing" className="w-full h-auto mt-10 ml-7 relative rounded-md z-[5]" style={{ borderRadius: '20px' }} /> {/* Adjusted image size */}
                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

            {/* Contact part */}
            <div className="md:w-1/2  md:order-last items-center mt-10"> {/* Adjusted width for desktop and reordered for desktop */}
                <div className="bg-customblue rounded-xl shadow-lg p-8" style={{ maxWidth: '400px' }}> {/* Set max-width to limit the width */}
                    <h1 className="font-bold text-white text-4xl tracking-wide text-center mb-6">Contact Us</h1>

                    <form action="#" className="flex flex-col space-y-4">
                        <div>
                            <input className="ring-1 bg-midgrey mt-2 text-white ring-midgrey w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 shadow-bottom-black" placeholder="FullName"  style={{ fontWeight: 'bold' }} />
                        </div>
                        <div>
                            <input className="ring-1 bg-midgrey mt-2 text-white ring-midgrey w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 shadow-bottom-black" placeholder="Phone Number"  style={{ fontWeight: 'bold' }}/>
                        </div>
                        <div>
                            <textarea className="ring-1 bg-midgrey mt-2 text-white ring-midgrey w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 shadow-bottom-black" rows="4" placeholder="Message" style={{ fontWeight: 'bold' }} />
                        </div>
                        <button className="block mx-auto bg-lightblue font-semibold text-white dont-bold rounded-lg px-10 py-3 text-sm">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact_test;
