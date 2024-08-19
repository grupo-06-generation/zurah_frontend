function News() {
  return (
    <section id="home" className="mb-12">
      <h2 className="font text-[#A0522D] text-3xl font-bold text-center">
        Novidades
      </h2>
      <div className="mt-4 flex flex-col items-center justify-center">
        <img
          src="src/assets/techagro.jpg"
          alt="Agricultor"
          className="w-full h-40 object-cover rounded"
        />
        <div className="bg-[#FAEBD7] border border-[#A0522D] rounded-full w-12 h-12 flex items-center justify-center mt-2">
          ...
        </div>
      </div>
    </section>
  );
}

export default News;
