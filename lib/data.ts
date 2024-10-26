import prisma from "@/lib/prisma";
import { AxiosError } from "axios"

export const getFlowers = async (query: string) => { 
  try {
    const flowers = await prisma.flower.findMany({
        where:{
          OR:[
            {
              nama:{
                contains: query,
                mode: "insensitive"
              }
            }
          ]
        }
      }
    );
    return flowers;
  } catch (error) {
    throw new Error((error as AxiosError).message)
  }
}

export const getFlowersById = async (id: string) => { 
  try {
    const flowers = await prisma.flower.findUnique({
      where: {id},
    });
    
    return flowers;
  } catch (error) {
    throw new Error((error as AxiosError).message)
  }
}