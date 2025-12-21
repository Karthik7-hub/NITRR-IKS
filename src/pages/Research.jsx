import "../css/ResearchPage.css";
import Navbar from "../components/Navbar";
import { Landmark, FlaskConical, Scroll, Sprout, Calculator, ArrowRight } from "lucide-react";

function Research({ theme, setTheme }) {
    const researchAreas = [
        {
            title: "Vastu Vidya",
            desc: "Scientific analysis of ancient town planning, temple geometry, and eco-friendly architecture.",
            icon: <Landmark size={40} />
        },
        {
            title: "Rasayana (Metallurgy)",
            desc: "Study of Wootz steel, zinc extraction, and corrosion-resistant metals in ancient India.",
            icon: <FlaskConical size={40} />
        },
        {
            title: "Ganita (Mathematics)",
            desc: "Algorithms from the Kerala School, Vedic geometry, and infinite series derivations.",
            icon: <Calculator size={40} />
        },
        {
            title: "Ayurveda & Biology",
            desc: "Bridging traditional herbal medicine with modern biotechnology and genomics.",
            icon: <Sprout size={40} />
        },
        {
            title: "Manuscriptology",
            desc: "Digitization and translation of palm-leaf manuscripts preserved in the region.",
            icon: <Scroll size={40} />
        }
    ];

    return (
        <div className={`research-page ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme} />

            <header className="page-header">
                <h1>Research & Gaveshana</h1>
                <p>Unlocking the wisdom of the past for the technology of the future.</p>
            </header>

            <div className="research-grid">
                {researchAreas.map((area, index) => (
                    <div className="research-card" key={index}>
                        <div className="icon-box">{area.icon}</div>
                        <h3>{area.title}</h3>
                        <p>{area.desc}</p>
                        <button className="read-more">
                            Explore <ArrowRight size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Research;