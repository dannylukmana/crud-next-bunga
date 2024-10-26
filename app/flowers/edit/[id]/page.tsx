import UpdateForm from "@/components/edit-form";
import { getFlowersById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateContactPage = async ({ params }: { params: { id: string } }) => { 
  const id = params.id;
  const flower = await getFlowersById(id);

  if (!flower) { 
    notFound();
  }
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text=2xl text-center mb-2">Update Flower</h1>
      <UpdateForm flower={flower} />
    </div>
  )
}

export default UpdateContactPage;