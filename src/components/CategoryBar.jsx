import { useState } from "react"

const options = [
  {
    name: 'Home'
  },
  {
    name: 'Web Series',
    subcategories: [
      {
        name: "Amazon Prime Video",
        path: '/web-series/amazon-prime-video',
      },
      {
        name: "Netflix",
        path: '/web-series/netflix',
      },
    ],
  },
  {
    name: 'Dual Audio',
    subcategories: [
      {
        name: "Movies",
        path: "/dual-audio/movies",
      },
      {
        name: "Netflix",
        path: "/dual-audio/netflix",
      }
    ],
  },
  {
    name: 'Genre'
  },
  {
    name: 'By year'
  },
]

const CategoryBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Added state to track hovered index

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set hovered index on mouse enter
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hovered index on mouse leave
  }

  return (
    <div className="flex gap-20">
      {
        options && options.map((option, idx) => {
          return (
            <div
              onMouseEnter={() => handleMouseEnter(idx)} // Updated to pass index
              onMouseLeave={handleMouseLeave} // Added mouse leave handler
              key={idx}
              className="px-4 py-2 border-2 border-black hover:text-red-500"
            >
              {option.name}
              {
                hoveredIndex === idx && option.subcategories && ( // Conditionally render subcategories for hovered index
                  <ul>
                    {
                      option.subcategories.map((subcategory) => {
                        return (
                          <li key={subcategory.name}>
                            {subcategory.name}
                          </li>
                        )
                      })
                    }
                  </ul>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default CategoryBar;
