import { useState } from "react"
import { Pin, Search,} from "lucide-react"
import aboutImage from "../../assets/About.jpg"
import desktopImage from "../../assets/Photos/Desktop.jpg"
import homeImage from "../../assets/Photos/Home.jpg"
import iPhoneImage from "../../assets/Photos/iPhone.jpg"
import iPhonesImage from "../../assets/Photos/iPhones.jpg"
import winnerImage from "../../assets/Photos/Winner.jpg"

const mediaItems = [
  { id: 1, title: "Modern home", image: homeImage },
  { id: 2, title: "Workspace setup", image: desktopImage },
  { id: 3, title: "Motivation", image: winnerImage },
  { id: 4, title: "Anime artwork", image: iPhoneImage },
  { id: 5, title: "Tech collection", image: iPhonesImage },
  { id: 6, title: "City view", image: aboutImage },
]

const MyStore = () => {
  const [search, setSearch] = useState("")
  const [selectedItems, setSelectedItems] = useState(() => new Set())
  const filteredItems = mediaItems.filter((item) =>
    item.title.toLowerCase().includes(search.trim().toLowerCase()),
  )

  const toggleSelection = (id) => {
    setSelectedItems((currentItems) => {
      const nextItems = new Set(currentItems)
      if (nextItems.has(id)) {
        nextItems.delete(id)
      } else {
        nextItems.add(id)
      }
      return nextItems
    })
  }

  return (
    <section className="min-h-screen  px-4 pb-24 pt-7 text-[#8f8f8f] sm:px-8">
      <div className="mx-auto max-w-[750px]">
        <label className="mx-auto z-111 sticky top-1 flex h-11 w-full max-w-[565px] items-center gap-3 rounded-sm bg-zinc-900  px-5  ">
          <Search size={19} aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search"
            aria-label="Search your store"
            className="min-w-0 flex-1 bg-transparent text-sm text-[#8f8f8f] outline-none placeholder:text-[#8f8f8f]"
          />
        </label>

        

        {filteredItems.length > 0 ? (
          <div className="mt-7 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => {
              const isSelected = selectedItems.has(item.id)

              return (
                <article
                  key={item.id}
                  className="relative overflow-hidden rounded-md bg-zinc-100"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="block aspect-[3/4] w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => toggleSelection(item.id)}
                    aria-label={`${isSelected ? "Deselect" : "Select"} ${item.title}`}
                    aria-pressed={isSelected}
                    className="absolute right-3 top-3 grid size-8 place-items-center rounded-lg bg-black text-zinc-700 "
                  >
                   <Pin size={18} fill={isSelected ? "#acca00":""} /> 
                  </button>
                </article>
              )
            })}
          </div>
        ) : (
          <p className="py-16 text-center text-sm text-zinc-500">
            No items match “{search}”.
          </p>
        )}
      </div>


    </section>
  )
}

export default MyStore
