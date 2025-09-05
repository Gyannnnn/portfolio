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

export interface experience {
  id: string;
  experienceName: string;
  joiningDate: string;
  experienceDescription: string;
  experienceSectionId: string;
}

export interface experienceSection {
  message: string;
  experienceSection: {
    id: string;
    experienceHeading: string;
    experienceDescription: string;
    portfolioId: string;
    experience: experience[];
  };
}

export interface education {
  id: string;
  educationName: string;
  joiningDate: string;
  educationDescription: string;
  educationSectionId: string;
}

export interface educationSection {
  message: string;
  educationSection: {
    id: string;
    educationHeading: string;
    educationDescription: string;
    portfolioId: string;
    education: education[];
  };
}
