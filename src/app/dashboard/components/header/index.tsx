import Container from "@/components/container";
import Link from "next/link";

export function Header() {
  return (
    <Container>
      <header className="w-full bg-gray-900 my-4 p-3 rounded flex items-center gap-4">
        <Link href="/dashboard" className="text-gray-50 hover:font-bold duration-300">Called</Link>
        <Link href="/dashboard/customer" className="text-gray-50 hover:font-bold duration-300">Customers</Link>
      </header>
    </Container>
  );
}