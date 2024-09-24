import React from "react";
import styles from "./VerticalCategoriesSelection.module.scss";
import {
  FaScrewdriverWrench,
  FaTruck,
  FaBrush,
  FaBucket,
  FaLightbulb,
} from "react-icons/fa6";
import { PiPipeFill } from "react-icons/pi";
import VerticalCategoryCard from "@/components/VerticalCategoryCard/VerticalCategoryCard";

const VerticalCategoriesSelection = () => {
  const services = [
    {
      id: 1,
      icon: <FaBucket fontSize={44} />,
      title: "Cleaning",
      color: "#b12fde",
    },
    {
      id: 2,
      icon: <FaScrewdriverWrench fontSize={44} />,
      title: "Repair",
      color: "#ecbb3a",
    },
    {
      id: 3,
      icon: <FaBrush fontSize={44} />,
      title: "Painting",
      color: "#ea9319",
    },
    {
      id: 4,
      icon: <FaTruck fontSize={44} />,
      title: "Shifting",
      color: "#059e96",
    },
    {
      id: 5,
      icon: <PiPipeFill fontSize={44} />,
      title: "Plumbing",
      color: "#e23e40",
    },
    {
      id: 6,
      icon: <FaLightbulb fontSize={44} />,
      title: "Electric",
      color: "#1f71c5",
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {services.map((service) => (
        <VerticalCategoryCard
          key={service.id}
          icon={service.icon}
          title={service.title}
          color={service.color}
        />
      ))}
    </div>
  );
};

export default VerticalCategoriesSelection;
