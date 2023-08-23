import {Hero, Subscribe, Footer, Services, SpecialOffer, CustomerReviews, PopularProducts, SuperQuality} from './sections'
import Nav from "./components/Nav.jsx";
const App = () =>(
    <main className="relative">
        <Nav/>
        <seciton className="xl:padding-l wide:padding-r padding-b">
            <Hero/>
        </seciton>
        <section className="padding">
            <PopularProducts/>
        </section>
        <section className="padding">
            <SuperQuality/>
        </section>
        <section className="padding-x py-10">
            <Services/>
        </section>
        <section className="padding">
            <SpecialOffer/>
        </section>
        <section className="padding bg-pale-blue">
            <CustomerReviews/>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe/>
        </section>
        <section className="bg-black padding-x padding-t pb-8">
            <Footer/>
        </section>
    </main>
)

// 'Source Code Pro', monospace
// Consolas, 'Courier New', monospace

export default App
