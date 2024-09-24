// BusinessCardList.js
import BusinessCard from "@/components/BusinessCard/BusinessCard";
import { businesses } from "@/data/businesses";
import styles from "./BusinessCardList.module.scss";
const BusinessCardList = ({ category, gridColumns = 4 }) => {
  const filteredBusinesses = category
    ? businesses.filter((business) => business.category === category)
    : businesses;

  return (
    <div
      className={styles.businessCardList}
      style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }} // Dynamically set columns
    >
      {filteredBusinesses.map((business) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
};

export default BusinessCardList;
