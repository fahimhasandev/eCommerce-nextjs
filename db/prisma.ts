import "dotenv/config";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";

import ws from "ws";
import { PrismaClient } from "@/lib/generated/prisma/client";

neonConfig.webSocketConstructor = ws;
// To work in edge environments (Cloudflare Workers,  Vercel Edge, etc.), enable querying over fetch
// neonConfig.poolQueryViaFetch = true

// Type definitions
declare global {
  var prisma: ReturnType<typeof PrismaClient.prototype.$extends> | undefined;
}

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaNeon({ connectionString });
const prismaClient =
  global.prisma ||
  new PrismaClient({ adapter }).$extends({
    result: {
      product: {
        price: {
          compute(product) {
            return product.price.toString();
          },
        },
        rating: {
          compute(product) {
            return product.rating.toString();
          },
        },
      },
    },
  });
if (process.env.NODE_ENV === "development") global.prisma = prismaClient;

export default prismaClient;
