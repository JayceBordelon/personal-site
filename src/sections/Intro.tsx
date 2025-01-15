import { openLinkInNewTab } from '../functions/helpers';
import TypeWriter from '../components/TypeWriter';

export default function Intro() {
    return (
        <section id="intro" className="overflow-hidden">
            <div className="section-content">
                <div className="profile-pic">
                    <img
                        src="Data_center.jpg"
                        alt="prof-pic"
                        onClick={() =>
                            openLinkInNewTab(
                                'https://www.linkedin.com/in/jaycebordelon',
                            )
                        }
                    />
                </div>
            </div>
            <header>
                <h1 className="intro-header">
                    <TypeWriter>Learning to Build Valuable Software</TypeWriter>
                </h1>
            </header>
        </section>
    );
}
