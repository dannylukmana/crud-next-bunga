import { getFlowers } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "./buttons";

const FlowerTable = async ({ query }: { query: string; }) => { 
  const flowers = await getFlowers(query);
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-3">#</th>
          <th className="py-3 px-3">Nama</th>
          <th className="py-3 px-3">Harga</th>
          <th className="py-3 px-3">Stok</th>
          <th className="py-3 px-3">Created At</th>
          <th className="py-3 px-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {flowers.map((flower, index) => (
          <tr key={flower.id} className="bg-white border-b">
            <td className="py-3 px-3">{index + 1}</td>
            <td className="py-3 px-3">{flower.nama}</td>
            <td className="py-3 px-3">{flower.harga}</td>
            <td className="py-3 px-3">{flower.stok}</td>
            <td className="py-3 px-3">{formatDate(flower.createdAt.toString())}</td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton id={ flower.id} />
              <DeleteButton id={ flower.id}/>
          </td>
        </tr>
        ))}

      </tbody>
    </table>
  )
}

export default FlowerTable