"use Client";

import { Button } from "components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constant";

const notFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        height={48}
        width={48}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className="p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">
          <div aria-hidden="true"></div>Not Found
          <p className="text-destructive"> Count Not Find Requeted Page</p>
          <Button variant="outline" className="mt-4 ml-2">
            <Link href="/">Back To Home</Link>
          </Button>
        </h1>
      </div>
    </div>
  );
};

export default notFoundPage;
