import Navbar from "../components/Navbar";
import { User, GraduationCap, Mail } from "lucide-react";
import "../css/People.css"; // We will create this CSS below

function People({ theme, setTheme }) {
    const faculty = [
        { name: "Dr. N.V. Ramana Rao", role: "Patron & Director", dept: "Director, NIT Raipur" },
        { name: "Dr. R.K. Tripathi", role: "IKS Coordinator", dept: "Department of Humanities" }
    ];

    const students = [
        { name: "Vana Karthik", role: "Web Developer", dept: "CSE" },
        { name: "Student Name", role: "Research Volunteer", dept: "Mechanical" }
    ];

    return (
        <div className={`people-page ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme} />

            <div className="people-container">
                <h1>Our Team</h1>

                {/* Faculty Section */}
                <section className="team-section">
                    <h2><User className="icon" /> Faculty & Advisors</h2>
                    <div className="people-grid">
                        {faculty.map((person, index) => (
                            <div key={index} className="person-card">
                                <div className="avatar-placeholder">
                                    <User size={40} />
                                </div>
                                <h3>{person.name}</h3>
                                <span className="role">{person.role}</span>
                                <p className="dept">{person.dept}</p>
                                <button className="contact-btn"><Mail size={16} /> Contact</button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Student Section */}
                <section className="team-section">
                    <h2><GraduationCap className="icon" /> Student Coordinators</h2>
                    <div className="people-grid">
                        {students.map((student, index) => (
                            <div key={index} className="person-card student">
                                <div className="avatar-placeholder student-avatar">
                                    <GraduationCap size={40} />
                                </div>
                                <h3>{student.name}</h3>
                                <span className="role">{student.role}</span>
                                <p className="dept">{student.dept}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default People;