import { Search } from "lucide-react";

function Banner() {

    return (
        <div className="grid  px-3 md:px-[10rem]">
                 <div className=" backdrop-blur-lg py-[2rem] md:py-[5rem] shadow-md bg-[#EAE8FF] rounded-[1rem]">
                    <div className="flex flex-col py-5 px-5 md:px-[5rem] justify-center items-center">
                        <div className="border  border-[#EAE8FF] text-[#EAE8FF] text-opacity-80  p-2 px-5 rounded-[5rem] bg-black border-20">
                            <h5 className="cursor-pointer whitespace-nowrap">Real Reviews by Real People</h5>
                        </div>
                        <div className="flex flex-col gap-[2rem] md:gap-[3rem] items-center py-[3rem]">
                            <h3 className="text-black text-3xl text-center md:text-5xl font-bold">Find a Company you can trust</h3>
                            <h6 className="text-black text-md md:text-2xl text-center ">Keep everything you copy and quickly access your macOS clipboard history whenever you need it.</h6>

                        </div>
                        <div className="md:pt-5">
                            <button className="flex flex-row gap-5 rounded-xl bg-black text-[#EAE8FF] px-5 py-3 "><Search /> Search Now</button>
                        </div>
                    </div>
                </div>


        </div>
    )

}
export default Banner;