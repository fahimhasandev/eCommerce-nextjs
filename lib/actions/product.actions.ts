
import prisma from "@/db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "../constant";
import { convertTOPlainObject } from "../utils";

export const getLatestProducts = async () => {
    // get the data
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' }
    });
    return convertTOPlainObject(data);
};

// Get single product by its slug
export async function getProductBySlug(slug: string) {
    const data = await prisma.product.findFirst({
        where: { slug: slug }
    });

    return convertTOPlainObject(data);
}