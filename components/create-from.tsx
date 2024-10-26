"use client";

import { saveFlower } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./buttons";

const CreateForm = () => { 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction] = useFormState(saveFlower, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="nama" id="nama" className="block text-sm font-medium text-gray-900">Nama Jenis Bunga</label>
          <input type="text" name="nama" className="bg-gray-50 border border-gray 300 text-gray-900 text-sm
            rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          <div id="nama-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.nama}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="harga" id="harga" className="block text-sm font-medium text-gray-900">Harga Bunga</label>
          <input type="text" name="harga" className="bg-gray-50 border border-gray 300 text-gray-900 text-sm
            rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          <div id="harga-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.harga}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="stok" id="stok" className="block text-sm font-medium text-gray-900">Jumlah Stok Bunga</label>
          <input type="text" name="stok" className="bg-gray-50 border border-gray 300 text-gray-900 text-sm
            rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          <div id="stok-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.stok}</p>
          </div>
        </div>
        <SubmitButton label="save" />
      </form>
    </div>
  )
}

export default CreateForm