
export interface Skill {
  id: string;
  skillIcon: string;
  skillName: string;
  skillIconColor: string;
  skillSectionId: string;
}

export interface SkillSection {
  id: string;
  skillHeading: string;
  skillDescription: string;
  skills: Skill[];
  portfolioId: string;
}
