import React from 'react'

const ProjectCard = ({ title, image, description, link, tags }) => {
  return (
    <div
      className="
        group flex flex-col h-full
        overflow-hidden rounded-lg bg-white
        shadow-sm hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* Image */}
     <div className="relative h-48 w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="
          h-full w-full object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
      />
    </div>


      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="
                rounded-full bg-gray-100
                px-3 py-1 text-xs font-medium
                text-gray-700
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4 inline-flex items-center justify-center
            rounded-lg border border-gray-300
            px-4 py-2 text-sm font-medium
            text-gray-900
            hover:bg-gray-900 hover:text-white
            transition-colors
          "
        >
          View project →
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
