import { BoxesLinkedIcon, LayoutDashboard, LucideHeadset } from "lucide-react"

const Features = () => (
     <div className='w-full flex justify-center'>
       <div className="md:w-[70vw] lg:w-[70vw] py-20 px-6 flex flex-col items-center">
                <div className="text-center mx-auto">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-50 text-base text-slate-800">
                        Our Features
                    </span>

                </div>

                {/* Features Grid */}
                <div className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="flex min-w-0 flex-col items-start rounded-xl border border-slate-100 px-6 py-8 transition-colors hover:bg-slate-50">
                        <div className="mb-8 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200">
                        <LayoutDashboard size={24} />
                        </div>
                        <h3 className="text-base font-medium text-slate-800">Dashboard Builder</h3>
                        <p className="text-sm text-slate-600 mt-2.5">
                            Create dynamic dashboards with real-time insights and customizable layouts for better decision-making.
                        </p>
                    </div>

                    <div className="flex min-w-0 flex-col items-start rounded-xl border border-slate-100 px-6 py-8 transition-colors hover:bg-slate-50">
                        <div className="mb-8 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200">
                            <BoxesLinkedIcon size={24} />
                        </div>
                        <h3 className="text-base font-medium text-slate-800">Workflow Automation</h3>
                        <p className="text-sm text-slate-600 mt-2.5">
                            Automate repetitive tasks and streamline processes to save time and boost team productivity.
                        </p>
                    </div>

                    <div className="flex min-w-0 flex-col items-start rounded-xl border border-slate-100 px-6 py-8 transition-colors hover:bg-slate-50">
                        <div className="mb-8 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200">
                            <LucideHeadset size={24} />
                        </div>
                        <h3 className="text-base font-medium text-slate-800">Seamless Integrations</h3>
                        <p className="text-sm text-slate-600 mt-2.5">
                            Connect with your favorite tools and services to build a seamless, unified and efficient workflow.
                        </p>
                    </div>
                </div>
            </div>

            </div>
)

export default Features
