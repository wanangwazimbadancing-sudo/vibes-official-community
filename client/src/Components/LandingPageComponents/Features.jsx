
const Features = () => (
       <div className="w-full py-20 px-6 flex flex-col items-center">
                <div className="text-center mx-auto">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-50 text-base text-slate-800">
                        Our Features
                    </span>

                </div>

                {/* Features Grid */}
                <div className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="flex min-w-0 flex-col items-start rounded-xl border border-slate-100 px-6 py-8 transition-colors hover:bg-slate-50">
                        <div className="mb-8 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m11 0h-5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 9h-5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1M9 16H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1" stroke="#314158" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <h3 className="text-base font-medium text-slate-800">Dashboard Builder</h3>
                        <p className="text-sm text-slate-600 mt-2.5">
                            Create dynamic dashboards with real-time insights and customizable layouts for better decision-making.
                        </p>
                        <a href="#" className="mt-8 flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-800 transition-colors group">
                            Explore Feature 
                            <svg className="transition-transform group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>

                    <div className="flex min-w-0 flex-col items-start rounded-xl border border-slate-100 px-6 py-8 transition-colors hover:bg-slate-50">
                        <div className="mb-8 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2 8v4a2 2 0 0 0 2 2h4m6-4h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" stroke="#314158" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <h3 className="text-base font-medium text-slate-800">Workflow Automation</h3>
                        <p className="text-sm text-slate-600 mt-2.5">
                            Automate repetitive tasks and streamline processes to save time and boost team productivity.
                        </p>
                        <a href="#" className="mt-8 flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-800 transition-colors group">
                            See How It Works
                            <svg className="transition-transform group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>

                    <div className="flex min-w-0 flex-col items-start rounded-xl border border-slate-100 px-6 py-8 transition-colors hover:bg-slate-50">
                        <div className="mb-8 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5m3-9V2m2 6a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1zM9 8V2" stroke="#314158" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <h3 className="text-base font-medium text-slate-800">Seamless Integrations</h3>
                        <p className="text-sm text-slate-600 mt-2.5">
                            Connect with your favorite tools and services to build a seamless, unified and efficient workflow.
                        </p>
                        <a href="#" className="mt-8 flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-800 transition-colors group">
                            View Integrations
                            <svg className="transition-transform group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>
                </div>
            </div>
)

export default Features
