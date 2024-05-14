import styles from "./style";
// Import all the component Once
import { RightClickMenu,  Review_Title , Contact_test ,ContactSection, How_Use , Video_use , StartEdit , Billing, Adventages , Start_Edit , Business,  Footer, Navbar, Stats, Testimonials, Hero , Title1, Title_Adventages , Title_Contact } from "./components";

const Templates = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar Section */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* All the left Sections */}
        {/* <RightClickMenu/> */}
        <Contact_test/>
        <Footer />        
      </div>
    </div>
  </div>
);

export default Templates ;
