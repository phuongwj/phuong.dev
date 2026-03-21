import { experience } from '../utils/data';

export default function ExperienceRow() {
  return (
    <div className="flex flex-col">
      {[...experience].reverse().map((exp, i) => (
        <div key={i} className="flex items-center gap-4 py-4 px-3 rounded-xl transition-colors duration-300 hover:bg-white/5 group">
          {/* Logo */}
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden">
            <img src={`${exp.image}`} alt={exp.company} className="w-full h-full object-contain rounded-lg" />
          </div>

          {/* Role + Company */}
          <div className="flex-1 min-w-0">
            <p className="text-white/90 font-semibold text-base leading-tight">{exp.position}</p>
            <p className="text-white/55 text-sm mt-0.5">{exp.company}</p>
          </div>

          {/* Duration */}
          <span className="text-white/30 text-sm font-mono shrink-0">{exp.duration}</span>
        </div>
      ))}
    </div>
  );
}
