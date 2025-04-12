import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
      <h1 className="text-4xl font-bold">da-Circle</h1>
    </main>
  );
}
