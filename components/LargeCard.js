import Image from "next/dist/client/image"


function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="absolute top-32 left-10">
                <h3 className="text-4xl font-semibold font-serif mb-3 w-64">{title}</h3>
                <p className="text-2xl">{description}</p>
                <button className="text-sm text-white font-semibold items-center bg-gray-900 p-4 rounded-lg mt-4 
                hover:shadow-2xl transform transition duration-200 ease-out active:scale-95">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard;
