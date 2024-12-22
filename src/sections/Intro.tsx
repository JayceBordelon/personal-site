import { motion } from "framer-motion";
import { openLinkInNewTab } from "../functions/helpers";
import TypeWriter from "../components/TypeWriter";

export default function Intro() {
  return (
    <motion.section
      id="intro"
      initial={{ height: "85vh", justifyContent: "space-around" }} 
      animate={{ height: "fit-content" }}
      transition={{
        delay: 1.5,
        duration: 0.8, 
        ease: "easeOut",
      }}
      className="overflow-hidden"
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
