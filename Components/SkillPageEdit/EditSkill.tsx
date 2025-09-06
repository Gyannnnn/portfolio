import React from "react";
import { auth } from "@/auth";
import EditSkillDrawer from "./EditSkillDrawer";

export default async function EditSkill({
  skillPageData,
}: {
  skillPageData: {
    id: string;
    skillHeading: string;
    skillDescription: string;
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
        <div className="">
          {session.user ? (
            <EditSkillDrawer
              skillSectionProps={{
                role: role as string,
                token: token as string,
                portfolioId: skillPageData.portfolioId,
                skillSectionId: skillPageData.id,
              }}
            />
          ) : (
            ""
          )}
        </div>
      );
    }
  } catch (error) {
    const err = error as Error;
    return <div>{err.message}</div>;
  }
}
