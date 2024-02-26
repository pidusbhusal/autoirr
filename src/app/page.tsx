import Image from "next/image";
import CropsCard from "../../components/CropsCard";

export default function Home() {
  return (
    <main className=" bg-white text-black flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <h1>Irrigation</h1>
        <div className="flex gap-5">
          <CropsCard />
          <CropsCard />
        </div>
      </div>
    </main>
  );
}
