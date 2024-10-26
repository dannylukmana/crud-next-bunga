"use server" 

import { z } from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AxiosError } from "axios"

const ContactSchema = z.object({
  nama: z.string().min(3),
  harga: z.string().min(3),
  stok: z.string().min(1),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveFlower = async (prevState: any, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.flower.create({
      data: {
        nama: validatedFields.data.nama,
        harga: validatedFields.data.harga,
        stok: validatedFields.data.stok,
      },
    });
  } catch (error) {
    throw new Error((error as AxiosError).message)
  }

  revalidatePath("/flowers");
  redirect("/flowers");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateFlower = async (id: string, prevState: any, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.flower.update({
      data: {
        nama: validatedFields.data.nama,
        harga: validatedFields.data.harga,
        stok: validatedFields.data.stok,
      },
      where:{id}
    });
  } catch (error) {
    throw new Error((error as AxiosError).message)
  }

  revalidatePath("/flowers");
  redirect("/flowers");
};

export const deleteFlower = async (
  id: string
) => {
  
  try {
    await prisma.flower.delete({
      where:{id},
    });
  } catch (error) {
    throw new Error((error as AxiosError).message)
  }

  revalidatePath("/flowers");
};