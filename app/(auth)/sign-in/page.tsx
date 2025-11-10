import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-none">
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              width={100}
              height={100}
              alt={`${APP_NAME} logo`}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign In to you account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">{/* Form Here */}</CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
