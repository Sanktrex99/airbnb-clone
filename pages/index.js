import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="https://cdn.pixabay.com/photo/2018/05/08/21/28/airbnb-3384008_1280.png" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => {
              return (
                <SmallCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              )
            })}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold py-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll p-3 -ml-3">
            {cardsData?.map(item => {
              return (
                <MediumCard
                  key={item.img}
                  img={item.img}
                  title={item.title}
                />
              )
            })}
          </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
    then(
      (res) => {
        return res.json();
      }
    );
  const cardsData = await fetch('https://links.papareact.com/zp1').
    then(
      (res) => {
        return res.json();
      }
    );
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}