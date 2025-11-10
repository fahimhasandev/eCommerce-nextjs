import { PrismaClient } from '@prisma/client';
import sampleData from "./sample-data";


async function main() {
    const prisma = new PrismaClient();
    //Delete all products -- prisma.(model name).deletemany
    await prisma.product.deleteMany();
    await prisma.product.createMany({
        data: sampleData.products
    });
    console.log('Database seeded successfully');
}

main();


