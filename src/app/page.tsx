import Aside from "@/components/Aside";
import Timer from "@/components/Timer";
import { TimeProvider } from "@/lib/timeContext";

export default function Home() {
  return (
    <main className="md:h-screen h-fit w-screen overflow-hidden bg-black flex flex-col md:flex-row text-white">
      <TimeProvider>
        <section className="flex-1 p-10">
          <div className="flex items-center justify-center py-8">
            <Timer />
          </div>
        </section>
        <aside className="bg-gray-800 p-8 w-full md:w-[450px]">
          <Aside />
        </aside>
      </TimeProvider>
    </main>
  );
}
