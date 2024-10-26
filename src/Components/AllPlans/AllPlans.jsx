import plans from "../../data/Plans.json";
import PlanCard from "../PlanCard";

export default function AllPlans() {
  return (
    <div className="wrapper">
      {plans.map(({ price, speed, bg, index }) => (
        <PlanCard key={index} bg={bg} price={price} speed={speed} />
      ))}
    </div>
  );
}
