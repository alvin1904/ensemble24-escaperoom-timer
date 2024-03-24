import Aside from "@/components/Aside";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-black flex flex-row text-white">
      <section className="flex-1 p-10">
        <div className="flex items-center justify-center">
          <Timer />
        </div>
      </section>
      <aside className="bg-gray-800 p-8 w-[450px]">
        <Aside />
      </aside>
    </main>
  );
}
