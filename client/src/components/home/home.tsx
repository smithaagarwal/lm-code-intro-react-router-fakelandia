import { useContext } from "react";
import { ParentDataContext } from "../parent_data_provider";
const Home: React.FC = () => {
  const parentData = useContext(ParentDataContext);
  return (
    <section className="content">
      <p>Welcome to the home of the Justice Department of Fakelandia</p>
      <p>
        Here you can browse a list of recent misdemeanours committed by our
        citizens, or you can confess to your own misdemeanours.
      </p>
      <h2>Total misdemeanours is {parentData.misdemeanours.length}</h2>
    </section>
  );
};
export default Home;
