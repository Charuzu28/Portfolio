import { useEffect, useRef, useState } from "react"

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  const isLeft = index % 2 === 0

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    },
    { threshold: 0.3 }
  )

  if (ref.current) observer.observe(ref.current)
  return () => observer.disconnect()
}, [])

return (
  <div
    ref={ref}
    className={`relative flex ${
      isLeft ? "justify-start" : "justify-end"
    }`}
  >
    {/* Dot */}
    <span className="absolute left-1/2 w-4 h-4 bg-black rounded-full -translate-x-1/2 z-10" />

    {/* Card */}
    <article
      className={`
        w-full md:w-[45%]
        bg-white rounded-xl shadow-md p-4
        transition-all duration-700
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }
      `}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-40 w-full object-cover rounded-lg"
      />

      <h3 className="mt-3 text-lg font-semibold">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 underline-offset-4 hover:underline"
        >
          {item.title}
        </a>
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {item.description}
      </p>
    </article>
  </div>
)

}

export default TimelineItem;