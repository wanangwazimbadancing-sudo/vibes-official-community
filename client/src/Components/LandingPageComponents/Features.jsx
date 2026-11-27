import { BoxesLinkedIcon, LayoutDashboard, LucideHeadset } from "lucide-react"

const features = [
    {
        title: "Dashboard Builder",
        description: "Create dynamic dashboards with real-time insights and customizable layouts for better decision-making.",
        icon: LayoutDashboard,
    },
    {
        title: "Workflow Automation",
        description: "Automate repetitive tasks and streamline processes to save time and boost team productivity.",
        icon: BoxesLinkedIcon,
    },
    {
        title: "Seamless Integrations",
        description: "Connect with your favorite tools and services to build a seamless, unified and efficient workflow.",
        icon: LucideHeadset,
    },
]

const openFeatureDescription = (title, description) => {
    const escapedTitle = title.replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    })[character])
    const escapedDescription = description.replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    })[character])

    const page = `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${escapedTitle}</title>
                <style>
                    body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px; box-sizing: border-box; font-family: Arial, sans-serif; background: #09090b; color: #f4f4f5; }
                    article { width: min(640px, 100%); padding: 32px; box-sizing: border-box; border: 1px solid #27272a; border-radius: 16px; background: #18181b; }
                    h1 { margin: 0 0 16px; font-size: 28px; }
                    p { margin: 0; line-height: 1.7; color: #a1a1aa; }
                </style>
            </head>
            <body>
                <article>
                    <h1>${escapedTitle}</h1>
                    <p>${escapedDescription}</p>
                </article>
            </body>
        </html>
    `
    const url = URL.createObjectURL(new Blob([page], { type: "text/html" }))
    const newTab = window.open(url, "_blank", "noopener,noreferrer")
    if (!newTab) URL.revokeObjectURL(url)
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

const Features = () => (
     <div className='w-full flex justify-center'>
       <div className="md:w-[70vw] lg:w-[70vw] py-20 px-6 flex flex-col items-center">
                <div className="text-center mx-auto">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-zinc-900 text-base text-zinc-200">
                        Our Features
                    </span>

                </div>

                {/* Features Grid */}
                <div className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map(({ title, description, icon: Icon }) => (
                        <button
                            key={title}
                            type="button"
                            onClick={() => openFeatureDescription(title, description)}
                            className="flex min-w-0 cursor-pointer flex-col items-start rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-8 text-left transition-colors hover:bg-zinc-900"
                            aria-label={`Open ${title} description in a new tab`}
                        >
                            <div className="mb-8 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-700 text-zinc-200">
                                <Icon size={24} />
                            </div>
                            <h3 className="text-base font-medium text-zinc-100">{title}</h3>
                            <p className="mt-2.5 text-sm text-zinc-400">{description}</p>
                        </button>
                    ))}
                </div>
            </div>

            </div>
)

export default Features
