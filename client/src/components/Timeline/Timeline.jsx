import { useState, useRef, useEffect } from "react";
import { timelineData } from "./timelineData.js";
import TimelineItem from './TimelineItem.jsx';

const Timeline = () => {
    const containerRef = useRef(null);
    const [progress, setProgress]   = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if(!containerRef.current) return;
            
            const rect = containerRef.current.getBoundingClientRect();
            const viewPortHeight = window.innerHeight;

            const totalScrolabble = rect.height - viewPortHeight;
            const currentStroll = Math.min(
                Math.max(-rect.top, 0),
                totalScrolabble
            )

            const percent = (currentStroll / totalScrolabble) * 100;
            setProgress(percent);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[])

   return (
  <section
    ref={containerRef}
    className="relative max-w-5xl mx-auto py-24"
  >
    {/* Timeline Line */}
    <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 -translate-x-1/2">
      <div
        className="w-full bg-black transition-all duration-200"
        style={{ height: `${progress}%` }}
      />
    </div>

    <div className="space-y-32">
      {timelineData.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          index={index}
        />
      ))}
    </div>
  </section>
)

}

export default Timeline;