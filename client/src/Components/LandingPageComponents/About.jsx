import img from "../../assets/About.jpg"
const About = () => {
return (
        <div className='w-full flex justify-center'>

            <section id="About" className="flex flex-col md:w-[70vw] lg:w-[70vw] md:flex-row items-center justify-center gap-10 max-md:px-4 my-10">
                <div className="relative  overflow-hidden shrink-0">
                    <img className=" w-full max-w-md max-h-[350px] object-cover rounded-md" src={img} alt="About Us" />
                    <div className="flex items-center gap-1 max-w-52 absolute bottom-8 left-8 bg-black/10 backdrop-blur-[10px] border border-gray-600 p-4 rounded-xl shadow-sm">
                        <div className="flex  -space-x-4 shrink-0">
                           <div className="flex flex-wrap justify-center -space-x-3">
                            <div className="flex items-center justify-center text-xs size-9 rounded-full border-[3px] border-zinc-800 bg-zinc-700 z-[4]"><svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.937 10.486a19.8 19.8 0 0 1 0-8.276 1.65 1.65 0 0 1 1.166-1.158c4.47-.736 9.03-.736 13.5 0A1.67 1.67 0 0 1 16.77 2.21a19.8 19.8 0 0 1 0 8.276 1.65 1.65 0 0 1-1.167 1.159c-4.47.735-9.03.735-13.5 0a1.67 1.67 0 0 1-1.166-1.159" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" /><path d="m7.187 9.466 4.166-2.483L7.187 4.5z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" /></svg> </div>
                            <div className="flex items-center justify-center text-xs size-9 rounded-full border-[3px] border-zinc-800 bg-zinc-700 z-[4]"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 .5H4.667C2.365.5.5 2.353.5 4.638v8.276c0 2.285 1.865 4.138 4.167 4.138H13c2.301 0 4.167-1.853 4.167-4.138V4.638C17.167 2.353 15.3.5 13 .5" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.167 8.325a3.3 3.3 0 0 1-.339 2.01 3.32 3.32 0 0 1-1.46 1.432 3.35 3.35 0 0 1-3.856-.616 3.29 3.29 0 0 1-.62-3.83c.315-.62.82-1.128 1.442-1.449a3.35 3.35 0 0 1 3.893.598c.505.502.835 1.152.94 1.855" stroke="#fff"  strokeLinecap="round" strokeLinejoin="round" /></svg> </div>
                            <div className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-[#000000] z-[4]"> 30+ </div>
                        </div>

                        </div>
                        <p className="text-sm font-medium text-gray-200">Supported connections </p>
                    </div>
                </div>
                <div className="text-sm text-zinc-400 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-zinc-100">Multi-Streaming?</h1>
                    <p className="mt-8">OnTrib helps streamer to make live videos on your prefered platforms without stress. </p>
                    <p className="mt-4">Whether you're on free tier, you can still live stream on two medias of your choice.</p>
                    <p className="mt-4">Ontrib is user friendly for beginners</p>

                </div>
            </section>
        </div>
    );
}

export default About
