import React from "react";

// Define social media links data for mapping
const socialMediaLinks = [
  { icon: "/vector-15.svg", alt: "Vector", background: "/group-4923.png" },
  { icon: "/vector-14.svg", alt: "Vector", background: "/group-4923-1.png" },
  { icon: "/icon.svg", alt: "Icon", background: "/group-4923-2.png" },
  { icon: "/vector-5.svg", alt: "Vector", background: "/group-4923-3.png" },
  { icon: "/vector-9.svg", alt: "Vector", background: "/group-4923-4.png" },
  { icon: "/vector-17.svg", alt: "Vector", background: "/group-4923-5.png" },
  { icon: "/vector-19.svg", alt: "Vector", background: "/group-4923-6.png" },
  {
    isComplex: true,
    background: "/group-4923-7.png",
    subtractBg: "/subtract.svg",
    vectorBg: "/vector-4.svg",
    vectors: [
      {
        src: "/vector-6.svg",
        alt: "Vector",
        className: "absolute w-0.5 h-px top-0 left-1.5",
      },
      {
        src: "/vector-20.svg",
        alt: "Vector",
        className: "absolute w-[7px] h-[3px] top-px left-1",
      },
      {
        src: "/vector-16.svg",
        alt: "Vector",
        className: "absolute w-0.5 h-0.5 top-px left-1",
      },
      {
        src: "/vector-7.svg",
        alt: "Vector",
        className: "absolute w-3 h-2 top-1 left-0",
      },
      {
        src: "/vector-13.svg",
        alt: "Vector",
        className: "absolute w-[5px] h-px top-1 left-1.5",
      },
    ],
  },
  { icon: "/vector-18.svg", alt: "Vector", background: "/group-4923-8.png" },
];

export const CharityEventSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#0e1426]">
      <footer className="relative w-full h-[76px] bg-transparent bg-[url(/rectangle-318-1.svg)] bg-[100%_100%]">
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          {/* Copyright text */}
          <div className="h-[25px]">
            <p className="font-['Rajdhani',Helvetica] text-[15px] tracking-[-0.30px] leading-[25px] whitespace-nowrap">
              <span className="font-semibold text-[#d7def9] tracking-[-0.04px]">
                © Copyright 2025{" "}
              </span>
              <span className="font-bold text-white tracking-[-0.04px]">
                SKRICE | NEXIRA
              </span>
              <span className="font-semibold text-[#d7def9] tracking-[-0.04px]">
                . All rights reserved
              </span>
            </p>
          </div>

          {/* Right side with language selector and social icons */}
          <div className="flex items-center gap-14">
            {/* Language selector */}
            <div className="relative w-[80.71px] h-[28.05px]">
              <div className="w-[83px] h-7">
                <div className="relative w-[81px] h-7 bg-[url(/rectangle-317.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[81px] h-7 top-0 left-0"
                    alt="Union"
                    src="/union.svg"
                  />
                  <img
                    className="absolute w-2 h-1.5 top-[11px] left-16"
                    alt="Frame"
                    src="/vector-8.svg"
                  />
                  <div className="absolute top-[5px] left-[33px] font-['Rajdhani',Helvetica] font-semibold text-white text-sm tracking-[-0.28px] leading-[normal]">
                    EN
                  </div>
                  <img
                    className="absolute w-4 h-3 top-2 left-[9px]"
                    alt="Flag set"
                    src="/flag-set.svg"
                  />
                </div>
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-3.5">
              {socialMediaLinks.map((item, index) => (
                <div
                  key={index}
                  className={`relative ${item.isComplex ? "w-[28.29px] h-[28.05px] mb-[-0.05px]" : "w-[28.0px] h-7"} bg-[url(${item.background})] bg-[100%_100%]`}
                >
                  {!item.isComplex ? (
                    <img
                      className={`absolute ${
                        index === 4
                          ? "w-3.5 h-3.5 top-[7px] left-[7px]"
                          : index === 8
                            ? "w-[15px] h-[18px] top-1 left-1.5"
                            : "w-4 h-4 top-1.5 left-1.5"
                      }`}
                      alt={item.alt}
                      src={item.icon}
                    />
                  ) : (
                    <div className="relative w-4 h-4 top-1.5 left-1.5 bg-[url(/subtract.svg)] bg-[100%_100%]">
                      <div className="relative w-3 h-3 top-1 left-0.5 bg-[url(/vector-4.svg)] bg-[100%_100%]">
                        {item.vectors.map((vector, vIndex) => (
                          <img
                            key={vIndex}
                            className={vector.className}
                            alt={vector.alt}
                            src={vector.src}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
