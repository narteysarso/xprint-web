"use client";

import Link from "next/link";
import { Printer } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
          <Printer className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <span>Xprint</span>
        </Link>
      </div>
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}