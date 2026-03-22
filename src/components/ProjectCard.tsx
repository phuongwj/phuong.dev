import { useState } from 'react';
import { projects } from '../utils/data';

const allProjects = [...projects].reverse();
const initialCount = 3;

export default function ProjectCard() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? allProjects : allProjects.slice(0, initialCount);
  const remaining = allProjects.length - initialCount;

  return (
    <div className="flex flex-col">
      {visible.map((project, i) => (
        <div key={project.name}>
          {i > 0 && <hr className="border-t border-border-default my-1" />}
          <a href={project.github} target="_blank" className="project-card flex items-start gap-4 py-4 pl-4 pr-3 rounded-xl border-l-2 border-transparent transition-all duration-300 hover:border-white/40 hover:bg-white/4 hover:pl-5 group">
            {/* Thumbnail */}
            <div className="w-36 h-24 rounded-lg bg-white/5 border border-border-default flex items-center justify-center shrink-0 overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 py-1">
              <p className="text-white/88 font-semibold text-base transition-colors duration-300 group-hover:text-white">{project.name}</p>
              <p className="text-body text-sm mt-1">{project.description}</p>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-muted text-[11px] font-mono px-2 py-0.5 rounded border border-border-default bg-white/3">
                    {tech.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}

      {remaining > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="group/btn flex items-center gap-1.5 mt-4 cursor-pointer bg-transparent border-none p-0 text-body text-sm hover:text-heading transition-all duration-300"
        >
          <span>{expanded ? 'show less' : 'view all projects'}</span>
          <span className={`inline-block transition-transform duration-300 group-hover/btn:translate-x-1 ${expanded ? 'rotate-90' : ''}`}>
            &rarr;
          </span>
        </button>
      )}
    </div>
  );
}
