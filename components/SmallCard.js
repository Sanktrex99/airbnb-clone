import Image from "next/dist/client/image";


function SmallCard({ img, location, distance }) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-t-xl 
        cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-in-out
        active:scale-95">
            <div className="relative h-16 w-16">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-t-lg"
                />
            </div>
            <div>
                <h2 className="font-semibold font-serif">{location}</h2>
                <h3 className="text-gray-600">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
