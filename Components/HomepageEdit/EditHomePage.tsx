import { auth } from "@/auth";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditHome from "./EditHome";

export default async function EditHomePage() {
  try {
    const session = await auth();
    const user = session?.user;
    const token = session?.user.jwt_token;
    const userId = user?.id;
    const role = user?.role;
    console.log(role);
    if (user) {
      return (
        <div className="">
          <EditHome
            role={role as string}
            token={token as string}
            userId={userId as string}
          />
        </div>
      );
    }
  } catch (error) {
    return <div>Something Went wrong</div>;
  }
}
