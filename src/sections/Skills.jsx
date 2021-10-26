import TitleAndDescription from "../components/reusables/TitleAndDescription";
import skillsData from "../data/skills";

export default function Skills() {
    const sectionHeader = {
        title: "Skills",
        description: "I have acquired different skills over the years, including:",
    };
    const skillsList = skillsData.map((item,index) => <li className="skill" key={index}>{item}</li>);
    return(
        <section id="skills">
            <TitleAndDescription text={sectionHeader} />
            <ul>{skillsList}</ul>
        </section>
    )}