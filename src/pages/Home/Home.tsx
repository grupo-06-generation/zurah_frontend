import Slider from "../../components/slider/Slider";
import ListProduct from "../../components/Products/ListProduct/ListProduct";

function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF7] flex flex-col items-center">
      <main className=" w-full p-0"></main>
          <Slider />
      <ListProduct />
    </div>
  );
}

export default Home;
