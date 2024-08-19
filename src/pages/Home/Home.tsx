import Categories from "../../components/home/Categories";
import News from "../../components/home/News";
import Promotions from "../../components/home/Promotions";

function Home() {
  return (
    <div className="min-h-screen bg-[#FAEBD7] flex flex-col items-center">
      <main className="flex-grow w-full max-w-screen-lg p-8">
        <News></News>
        <Categories></Categories>
        <Promotions></Promotions>
      </main>
    </div>
  );
}

export default Home;
