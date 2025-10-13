import Aside from "@/components/Aside";
import Timer from "@/components/Timer";
import { TimeProvider } from "@/lib/timeContext";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-black bg-[url(/bg.webp)] bg-cover bg-center flex flex-col xl:flex-row text-white">
      <TimeProvider>
        <section className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-center py-8">
            <Timer />
          </div>
        </section>
        <aside className="bg-black/10 backdrop-blur-3xl border-l-2 border-white/10 p-8 pt-0 w-full xl:w-[450px]">
          <Aside />
        </aside>
      </TimeProvider>
    </main>
  );
}
