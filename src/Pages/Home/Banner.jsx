import { MdArrowOutward } from "react-icons/md";


const Banner = () => {
    return (
        <div className="hero mt-10 bg-blue-200 h-auto rounded-[32px]">
            <div className="flex  pl-40 w-full items-center flex-col lg:flex-row-reverse">
                <img
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg"
                    className="w-[600px] rounded-r-lg shadow-2xl  flex-grow" />
                <div className="w-1/2 flex-grow space-y-8">
                    <h1 className="text-2xl font-bold">Feel Great</h1>
                    <div className="py-6 font-bold text-6xl playwrite tracking-[12px] grid space-y-4">
                        <span className="">Feel</span> 
                        <span>Authentic</span> 
                        <span>Peace</span>
                    </div>
                    <button className="btn bg-black text-white">Shop Now <MdArrowOutward className="text-xl"></MdArrowOutward></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;