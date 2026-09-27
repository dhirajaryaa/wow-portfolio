import Image from "next/image";

export const HeroSection = () => {
    return <section className="flex flex-row gap-4 sm:gap-6 relative">
        {/* avatar + intro + theme  */}
        <div className="flex items-center justify-between h-fit" >
            <div className="flex gap-4 items-center">
                <div className="flex items-center justify-center size-14 md:size-18 p-0.5 ring-2 ring-primary rounded-2xl overflow-hidden">
                    <Image
                        src={"/logo.webp"}
                        alt="Logo - Dhraj Arya"
                        width={150}
                        height={150}
                        className="object-cover rounded-2xl w-full h-full"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl sm:text-3xl font-serif text-neutral-900 font-medium ">Dhiraj Arya</h1>
                    <p className="text-[14px] font-normal text-neutral-600 leading-5 pl-1">Self-Taught Engineer</p>
                </div>
            </div>
            <div>
                <button>
                    Icon
                </button>
            </div>
        </div>
    </section>;
};
