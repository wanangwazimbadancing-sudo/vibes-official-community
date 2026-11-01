const Blog = () => {
 const features = [
    {
      icon: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 15.75a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.598 3.066C10.665 6.104 6.75 7.08.938 7.454m14.625 1.429c-4.966-1.057-9.106.75-12.285 4.74" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.67 1.313c3.278 4.5 4.5 7.065 6 13.29" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>,
      title: "User-first design",
      description: "We design with real users in mind, focusing on clarity, usability and accessibility from day one."
    },
    {
      icon: <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.05.75H3.45a1.8 1.8 0 0 0-1.8 1.8v7.2a1.8 1.8 0 0 0 1.8 1.8h12.6a1.8 1.8 0 0 0 1.8-1.8v-7.2a1.8 1.8 0 0 0-1.8-1.8M.75 15.148h18" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>,
      title: "Fully responsive",
      description: "Interfaces that look and feel great on desktop, tablet and mobile, no compromises."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 14.665A6.667 6.667 0 1 0 8 1.332a6.667 6.667 0 0 0 0 13.333" /><path d="M8 1.332a9.667 9.667 0 0 0 0 13.333A9.667 9.667 0 0 0 8 1.332M1.333 8h13.334" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z" /></clipPath></defs></svg>,
      title: "Global-ready UX",
      description: "Clean files, clear specs and comprehensive developer-friendly documentation - ready to build instantly."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.553 1.452a1.33 1.33 0 0 0-1.106 0l-5.714 2.6a.667.667 0 0 0 0 1.22l5.72 2.607a1.33 1.33 0 0 0 1.107 0l5.72-2.6a.667.667 0 0 0 0-1.22z" /><path d="M1.333 8a.67.67 0 0 0 .387.607l5.733 2.606a1.33 1.33 0 0 0 1.1 0l5.72-2.6A.67.67 0 0 0 14.667 8" /><path d="M1.333 11.332a.67.67 0 0 0 .387.607l5.733 2.606a1.33 1.33 0 0 0 1.1 0l5.72-2.6a.67.67 0 0 0 .394-.613" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z" /></clipPath></defs></svg>,
      title: "Scalable systems",
      description: "Consistent components, design tokens and UI patterns thoughtfully built to grow with your product."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.333 1.332 14 3.999l-2.667 2.666" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M2 7.333v-.666A2.667 2.667 0 0 1 4.667 4H14M4.667 14.665 2 12l2.667-2.667" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M14 8.668v.667A2.667 2.667 0 0 1 11.333 12H2" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>,
      title: "Easy to iterate",
      description: "Highly flexible designs that adapt quickly as your product, target users and business goals evolve."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.667 9.334a.667.667 0 0 1-.52-1.087l6.6-6.8a.333.333 0 0 1 .573.307L8.04 5.767a.667.667 0 0 0 .627.9h4.666a.666.666 0 0 1 .52 1.087l-6.6 6.8a.334.334 0 0 1-.573-.307l1.28-4.013a.667.667 0 0 0-.627-.9z" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>,
      title: "Performance-aware",
      description: "Optimized layouts and interactions that support fast load times and smooth experiences."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M9.8 4.201a.667.667 0 0 0 0 .933l1.067 1.067a.666.666 0 0 0 .933 0l2.07-2.07c.214-.215.576-.147.656.145A4 4 0 0 1 9.02 8.981l-5.273 5.274a1.414 1.414 0 0 1-2-2L7.021 6.98a4 4 0 0 1 4.704-5.506c.292.08.36.441.146.656z" stroke="#D4D4D8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z" /></clipPath></defs></svg>,
      title: "Tool-friendly",
      description: "Designs built with localization, multiple languages, and diverse audiences in mind."
    },
    {
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10.667 12 4-4-4-4M5.333 4l-4 4 4 4" stroke="#D4D4D8" stroke-linecap="round" stroke-linejoin="round" /></svg>,
      title: "Dev-ready handoff",
      description: "From startups to enterprise, our designs integrate seamlessly with your existing workflows."
    }
  ]
  return (
    <>


      <div id="Blogs" className="bg-white px-8 lg:px-20 xl:px-[120px] py-20 flex flex-col items-center">
        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full mb-14">
          <h1 className="text-5xl font-medium text-zinc-800 text-center mb-4 tracking-tight">
           My Blog
          </h1>

        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full border-l border-gray-100 border-t">
          {/* Top-Bottom extending dashed gradient border */}
          <div className="absolute top-0 -left-10 -right-10 md:-left-18 md:-right-18 h-px border-t border-dashed border-gray-100" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }} />
          
          {/* Mask to cleanly hide the solid bottom borders of the last row cards beneath the dashed line */}
          <div className="absolute bottom-0 left-0 right-0 h-px z-10" />
          <div className="absolute bottom-0 -left-10 -right-10 md:-left-18 md:-right-18 h-px border-b border-dashed border-gray-100 z-10" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }} />

          {features.map((feature, index) => (
            <div key={index} className="relative p-6 md:p-8 flex flex-col gap-4 border-r border-b border-gray-100 transition-all duration-300 hover:bg-gray-100 cursor-pointer">
              <div className="absolute left-0 top-12 bottom-12 md:top-18 md:bottom-18 w-1 bg-gray-200 rounded-r" />
              <div className="flex items-center gap-2.5 mb-1">
                <div>
                  {feature.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-800 leading-snug">
                  {feature.title}
                </h3>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog
