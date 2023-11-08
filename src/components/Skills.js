import { skills } from "../utils/constants";
import "./Skills.css";

import MotionBox from "../utils/motion";
import { fadeAndScaleVariant, fadeIn } from "../utils/motion_variants";

const Skills = () => {
  return (
    <section id="skills" className="py-5 text-center">
      <div className="container">
        <MotionBox variants={fadeAndScaleVariant}>
          <h2 className="text-center mb-5 title">Skills</h2>
        </MotionBox>

        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <MotionBox
                variants={fadeIn("right", "spring", index * 0.2, 0.75)}
              >
                <div className="border rounded-lg p-3 skill-item">
                  <div className="mb-3">
                    <img src={skill.image} alt={skill.name} />
                  </div>
                  <p className="my-0">{skill.name}</p>
                </div>
              </MotionBox>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
