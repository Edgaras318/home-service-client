import { useParams } from "react-router-dom";
import BusinessCardList from "@/components/BusinessCardList/BusinessCardList";
import VerticalCategoriesSelection from "@/components/VerticalCategoriesSelection/VerticalCategoriesSelection";
import styles from "./Category.module.scss";

const Category = () => {
  const { category } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <VerticalCategoriesSelection />
      </div>
      <div className={styles.buisnessContainer}>
        <h1 className={styles.title}>{category}</h1>
        <BusinessCardList category={category} gridColumns={3} />
      </div>
    </div>
  );
};

export default Category;
