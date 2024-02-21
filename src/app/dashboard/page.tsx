import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from "next/link";

// components
import Container from "@/components/container";
import Rows from '@/app/dashboard/components/rows'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect('/')
  }

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Called</h1>
          <Link href="/dashboard/new" className="bg-blue-500 px-4 py-2 rounded text-gray-50">
            Open Call
          </Link>
        </div>
        
        <table className="min-w-full my-2">
          <thead>
            <tr>
              <th className="font-semibold text-left pl-3">Customers</th>
              <th className="font-semibold text-center hidden sm:block">Date of Registration</th>
              <th className="font-semibold text-center">Status</th>
              <th className="font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <Rows />
            <Rows />
            <Rows />
            <Rows />
          </tbody>
        </table>

      </main>
    </Container>
  );
}