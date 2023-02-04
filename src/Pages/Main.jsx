import styles from "../style";
import { Billing, Second, Business, Clients, Footer, NavBar, Hero, Seconnn, } from "../components";
import Imagas from "../components/imgas";
import SimpleSlider from "../components/Carousel";
import Lili from "../components/LİLİ";


const Main = () => (
    <>
        <div className=" w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div>
            <div className={` ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Clients />
                    <Business />
                    <Lili />
                    <Second />
                    <Seconnn />
                    <Billing />
                    <div className="products" id="product">
                        <Imagas />
                    </div>
                    <SimpleSlider />
                    <Footer />
                </div>
            </div>
        </div>
    </>
);

export default Main;