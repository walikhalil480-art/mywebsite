import { howIBuild } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function EngineeringFocus() {
  return (
    <div className="mt-14 border-t border-[#30363D] pt-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#58A6FF]">
            ENGINEERING APPROACH
          </div>
          <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#F0F3F6]">How I Build</h3>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {howIBuild.map((item, i) => (
          <Reveal key={item.number} delay={i * 60}>
            <div className="h-full rounded border border-[#30363D] bg-[#161B22] p-6 transition-all hover:border-[#58A6FF]/60 hover:bg-[#1C2128]">
              <div className="flex items-center justify-between border-b border-[#30363D]/60 pb-3">
                <span className="font-mono text-xl font-bold text-[#58A6FF]">{item.number}</span>
                <span className="font-mono text-xs font-semibold tracking-wider text-[#F0F3F6]">
                  {item.title}
                </span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[#8B949E]">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
