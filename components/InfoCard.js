import Image from "next/dist/client/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";



function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="flex py-7 px-2 pr-4 
        border cursor-pointer
        hover:border-red-100
        hover:opacity-85 
        hover:shadow-xl
        hover:bg-red-50
        transition duration-150 ease-in-out  
        first:mt-2
        rounded-2xl
        mb-5
        active:bg-red-300
        active:scale-95">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ml-5">
                <Image
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    className="rounded-2xl"
                />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex-auto justify-between">
                    <HeartIcon className="h-10
                    text-red-500
                    hover:fill-current" />
                    <p className="text-lg">{location}</p>
                </div>
                <h4 className="text-2xl font-semibold font-sans text-red-500">{title}</h4>
                <div className="border-b w-20 pt-2" />

                <p className="font-semibold pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight text-md">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;
