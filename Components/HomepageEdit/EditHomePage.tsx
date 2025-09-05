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
        <div className="absolute sm:top-28 sm:right-16 right-0 top-24">
          <EditHome
            role={role as string}
            token={token as string}
            userId={userId as string}
          />
        </div>
      );
    }
  } catch (error) {
    return <div>ddd</div>;
  }
}
