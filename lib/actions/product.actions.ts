import { LATEST_PRODUCTS_LIMIT } from "../constant";
import { PrismaClient } from "../generated/prisma/client";
import { convertTOPlainObject } from "../utils";

export const getLatestProducts = async () => {
    const prisma = new PrismaClient();

    // get the data
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' }
    });


    return convertTOPlainObject(data);
};