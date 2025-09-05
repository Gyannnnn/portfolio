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

export interface project {
  id: string;
  projectName: string;
  projectHeading: string;
  projectDescription: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  githubLink: string;
  deployedLink: string;
  projectSectionId: string;
}

export interface projectSection {
  message: string;
  projectsPage: {
    projects: project[];
    portfolioId: string;
    projectHeading: string;
    id: string;
  };
}

interface item{
  name:string
}
export interface TechStack {
  techStack: item[];
}

export interface Features {
  features: string[];
}

export interface Challenges {
  challenges: string[];
}

export interface Learnings {
  learnings: string[];
}

// Main interface
export interface ProjectDetailsResponse {
  message: string;
  results: {
    id: string;
    projectName: string;
    projectHeading: string;
    projectDescription: string;
    techStack: string[];     // ✅ array of strings
    features: string[];
    challenges: string[];
    learnings: string[];
    githubLink: string;
    deployedLink: string;
    projectSectionId: string;
  };
}


