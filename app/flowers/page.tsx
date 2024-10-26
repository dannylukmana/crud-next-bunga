import FlowerTable from "@/components/flower-table"
import Search from "@/components/search"
import { CreateButton } from "@/components/buttons"
import { Suspense } from "react";
import { TableSkeleton } from "@/components/skeleton"

const Flowers = ({
   searchParams 
  } : {
      searchParams?: {
        query?: string;
      }
  }) => { 

  const query = searchParams?.query || "";

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center  justify-between gap-1 mb-5">
        <Search />
        <CreateButton/>
      </div>
      <Suspense key={query} fallback={<TableSkeleton/>}>
        <FlowerTable query={ query } />
      </Suspense>
    </div>
  )
}

export default Flowers;

