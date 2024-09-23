import ServiceSection from "@/components/ServiceSection/ServiceSection";
import HeroSection from "@/components/home/HeroSection";
import BusinessCardList from "@/components/BusinessCardList/BusinessCardList";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <h3 className={styles.title}>Popular businesses</h3>
      <BusinessCardList />
    </>
  );
};

export default Home;
