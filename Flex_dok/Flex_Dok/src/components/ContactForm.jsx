import styles from "../style";
import { GIF } from "../assets";
import GetStarted from "./GetStarted";
const ContactForm = () => {
        return (
        <div className=" min-h-screen flex justify-center items-center rounded-2xl">
            <div className=" p-8 rounded-lg shadow-md max-w-md">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h2>
            <form>
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold">FullName</label>
                <input type="text" id="name" name="name" className="form-input mt-1 block w-full rounded" />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                <input type="email" id="email" name="email" className="form-input mt-1 block w-full rounded" />
                </div>
                <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                <textarea id="message" name="message" rows="4" className="form-textarea mt-1 block w-full rounded"></textarea>
                </div>
                <div className="flex justify-center">
                <button type="submit" className="px-4 py-2 pl-6 pr-6 bg-lightblue text-white rounded-md hover:bg-blue-600">Send</button>
                </div>
            </form>
            </div>
        </div>
        );
    }
    

export default ContactForm;
