import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('./public/image1.jpg')",
        backgroundPosition: "center 85%",
        height: "90vh",
        // transform: "scaleX(-1)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex items-center justify-start text-left text-white px-10 sm:px-8 md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Coffee and community,<br></br>brewed to{" "}
          <span className="font-extrabold">perfection.</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
