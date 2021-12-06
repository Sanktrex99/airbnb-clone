import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from 'next/head';
import { useRouter } from "next/dist/client/router";
import { format } from 'date-fns';
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {

    const router = useRouter();
    //ES6 Destructuring
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedLocation = location.toUpperCase();


    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");

    // `` allow us to insert JS into a String aka String Interpolation
    const range = `${formattedStartDate} - ${formattedEndDate}`





    return (
        <div>
            <Head>
                <title>Airbnb Clone Search Results</title>
                <link rel="icon" href="https://cdn.pixabay.com/photo/2018/05/08/21/28/airbnb-3384008_1280.png" />
            </Head>
            <Header placeholder={`${formattedLocation} | ${range} | ${noOfGuests} Guests`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays for {noOfGuests} Guests from {range}</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {formattedLocation}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text text-gray-800 
                    whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Places</p>
                        <p className="button">Prices</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>


                    <div className="flex flex-col">
                        {searchResults.map((item) => {
                            return (
                                <InfoCard
                                    key={item.img}
                                    img={item.img}
                                    location={item.location}
                                    title={item.title}
                                    description={item.description}
                                    star={item.star}
                                    price={item.price}
                                    total={item.total}
                                />
                            )
                        })}

                    </div>


                </section>



                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResults={searchResults} />
                </section>


            </main>

            <Footer />
        </div>
    )
}

export default Search;




export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(
        res => res.json()
    );

    return {
        props: {
            searchResults,
        }
    }
}