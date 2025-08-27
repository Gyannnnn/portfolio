import { auth } from "@/auth";


export default async function EditContent() {
  try {
    const session = await auth()
    const user = session?.user
    if(user){
      return (
        <div>Edit content</div>
      )
    }
  } catch (error) {
    return (
      <div>ddd</div>
    )
  }
}

