import React from "react";
import { auth } from "@/auth";
import ExperienceDrawer from "./ExperienceDrawer";


export default async function EditExperience({
  experienceSectionProps,
}: {
  experienceSectionProps: {
    experienceSectionId: string;
    portfolioId: string;
  };
}) {
  try {
    const session = await auth();
    const user = session?.user;
    const token = session?.user.jwt_token;
    const role = user?.role;
  
    if (user) {
      return (
        <div className="absolute top-28 right-16">
          <ExperienceDrawer
            expDrawerDataProps={{
              token: token as string,
              role: role as string,
              experienceSectionId: experienceSectionProps.experienceSectionId,
              portfolioId: experienceSectionProps.portfolioId,
            }}
          />
        </div>
      );
    }
  } catch (error) {
    return <div>ddd</div>;
  }
  return <div>EditExperience</div>;
}
