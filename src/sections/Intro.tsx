import RandomizedTitle from "../components/RandomizedTitle";
import { openLinkInNewTab } from "../functions/helpers";

export default function () {
    return (
        <section id="intro">
            <div className="section-content">
                <div className="profile-pic">
                    <img src="Data_center.jpg" alt="prof-pic" onClick={() => openLinkInNewTab("https://www.linkedin.com/in/jaycebordelon")} />
                </div>
            </div>
            <header>
                <h2>
                    <RandomizedTitle title="Learning to Build Valuable Software" />
                </h2>

            </header>
        </section>
    )
}
