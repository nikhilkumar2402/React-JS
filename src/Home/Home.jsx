import React from "react";

const Home = () => {
  return (
    <div className="px-80 py-11 dark:bg-gray-900 dark:text-white">
      <div className=" flex justify-between items-center mt-11">
        <img src="Remote2.jpg" height={500} width={500} />
        <div className="text-right">
          <h2 className="font-bold text-5xl ">Download Now</h2>
          <h3 className="font-bold text-3xl my-1">Lorem ipsum</h3>
          <button className="bg-green-400 rounded-lg text-white font-semibold px-5 py-2 mt-6 hover:bg-green-500 transition-all">
            Download Now
          </button>
        </div>
      </div>
      <div className="mt-40 mb-10 flex flex-col justify-center items-center gap-10">
        <img src="Remote1.png" height={400} width={400}/>
          <h2 className="font-bold text-5xl">Lorem Ipsum Yojo</h2>
      </div>
    </div>
  );
};

export default Home;
