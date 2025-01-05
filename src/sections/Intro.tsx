import { motion } from "framer-motion";
import { openLinkInNewTab } from "../functions/helpers";
import TypeWriter from "../components/TypeWriter";

export default function Intro() {
  return (
    <motion.section
      id="intro"
      className="overflow-hidden"
      initial={{ height: "100vh", justifyContent: "center" }} 
      animate={{ height: "fit-content" }}
      transition={{
        delay: 1,
        duration: 0.8, 
        ease: "easeInOut",
      }}
    >
      <div className="section-content">
        <div className="profile-pic">
          <img
            src="Data_center.jpg"
            alt="prof-pic"
            onClick={() =>
              openLinkInNewTab("https://www.linkedin.com/in/jaycebordelon")
            }
          />
        </div>
      </div>
      <header>
        <h1 className="intro-header">
          <TypeWriter>Learning to Build Valuable Software</TypeWriter>
        </h1>
      </header>
    </motion.section>
  );
}
