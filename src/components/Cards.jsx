import React from "react";
const Cards = () => {
  return (
    <div className="flex-wrap py-4 px-10">
      {/* Title text */}
      <div class="font-bold text-4xl mb-2 text-center py-10 text-[#151716]">
        Not Just <span className="font-extrabold">Good</span> Food!
      </div>
      {/* Cards Section */}
      <div className="flex flex-auto justify-between px-32 hover:size[1.1] transition-[0.2s]">
        <div class="max-w-xs w-64 h-96 rounded-xl overflow-hidden shadow-xl">
          <img
            className="w-full h-[80%] object-cover"
            src="./image2.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-semibold text-xl mb-2 text-center text-[#151716]">
              Takeaway or deliver
            </div>
          </div>
        </div>
        <div class="max-w-xs w-64 h-96 rounded-xl overflow-hidden shadow-xl">
          <img
            className="w-full h-[80%] object-cover "
            src="./jazz.webp"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-semibold text-xl mb-2 text-center text-[#151716]">
              Sunday Jazz
            </div>
          </div>
        </div>
        <div class="max-w-xs w-64 h-96 rounded-xl overflow-hidden shadow-xl">
          <img
            className="w-full h-[80%] object-cover"
            src="./tables.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-semibold text-xl mb-2 text-center text-[#151716]">
              Events & Catering
            </div>
          </div>
        </div>
      </div>
      {/* Description text */}
      <div className="flex justify-center items-center py-10 w-4/6 mx-auto">
        <p class="text-[#151716] text-lg font-medium text-center">
          Running for 20 years, the Sunday Jazz at Barefoot consists of quartet
          Revel Crake, Dilrukshi Sirimanne, Ray Gomez and Christopher Prins,
          with the occasional appearance of Jerome Speldewinde. It’s the perfect
          setting to bring your friends and family, drink a crisp sauvignon
          blanc, eat delicious food while listening to some great music from
          these mainstays of Colombo Jazz
        </p>
      </div>
    </div>
  );
};

export default Cards;
