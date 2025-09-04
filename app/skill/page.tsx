import Error from "@/Components/Error";
import SkillPage from "@/Components/SkillPage";
import EditSkill from "@/Components/SkillPageEdit/EditSkill";
import axios from "axios";

interface skillPageResposne {
  message: string;
  skillSection: {
    id: string;
    skillHeading: string;
    skillDescription: string;
    skills: [
      {
        id: string;
        skillIcon: string;
        skillName: string;
        skillIconColor: string;
        skillSectionId: string;
      }
    ];
    portfolioId: string;
  };
}

export default async function Skill() {
  try {
    const res = await axios.get<skillPageResposne>(
      "https://portfolio-be-flame.vercel.app/api/v1/skillsection/get"
    );
    const data = res.data;
    const id = data.skillSection.id;
    const skillHeading = data.skillSection.skillHeading;
    const skillDescription = data.skillSection.skillDescription;
    const portfolioId = data.skillSection.portfolioId;
    console.log("Skills : " + data.skillSection.skills[0].skillName);

    return (
      <div className="w-screen">
        <EditSkill
          skillPageData={{ id, skillHeading, skillDescription, portfolioId }}
        />
        <SkillPage skillSection={data.skillSection} />
      </div>
    );
  } catch (error) {
    const err = error as Error;
    return <Error error={err.message} />;
  }
}
