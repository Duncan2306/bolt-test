import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

// Define service data for mapping
const serviceCategories = [
  {
    title: "Photography",
    description:
      "Our photography services capture the essence of your brand, creating visually stunning images that resonate with your audience. From product photography to corporate portraits, we ensure every shot tells your story.",
    images: [
      { url: "..//depth-7--frame-0.png", alt: "Product photography" },
      { url: "..//depth-7--frame-0-1.png", alt: "Corporate portrait" },
      { url: "..//depth-7--frame-0-2.png", alt: "Brand photography" },
    ],
  },
  {
    title: "Videography",
    description:
      "Our videography services bring your brand to life with compelling visual narratives. We handle everything from concept development to post-production, delivering videos that engage and inspire.",
    images: [
      { url: "..//depth-7--frame-0-3.png", alt: "Video production" },
      { url: "..//depth-7--frame-0-4.png", alt: "Motion graphics" },
      { url: "..//depth-7--frame-0-5.png", alt: "Corporate video" },
    ],
  },
  {
    title: "Graphic Design",
    description:
      "Our graphic design services create visually appealing and effective designs for all your marketing needs. From logos and branding to marketing collateral, we ensure your brand's message is clear and impactful.",
    images: [
      { url: "..//depth-7--frame-0-6.png", alt: "Logo design" },
      { url: "..//depth-7--frame-0-7.png", alt: "Branding materials" },
      { url: "..//depth-7--frame-0-8.png", alt: "Marketing collateral" },
    ],
  },
];

// Navigation items
const navItems = ["Services", "Portfolio", "About", "Contact"];

export const StitchDesign = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start bg-white min-h-[800px] w-full">
      {/* Header/Navigation */}
      <header className="w-full border-b border-[#e5e8ea] py-3 px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-[url(/vector---0.svg)] bg-[100%_100%]" />
          <h1 className="font-bold text-lg text-[#111416] font-['Work_Sans',Helvetica]">
            DesignCo
          </h1>
        </div>

        {/* Navigation and CTA */}
        <div className="flex items-center justify-end flex-1 gap-8">
          <nav className="flex items-center gap-9">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-sm text-[#111416] font-['Work_Sans',Helvetica]"
              >
                {item}
              </a>
            ))}
          </nav>

          <Button className="bg-[#0572f7] rounded-lg px-4 h-10 font-bold text-sm">
            Get a quote
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex justify-center px-40 py-5 w-full flex-1">
        <div className="flex flex-col max-w-[960px] w-full">
          {/* Hero Section */}
          <section className="flex flex-wrap justify-around gap-[12px] p-4 w-full">
            <div className="flex flex-col min-w-72 gap-3 flex-1">
              <h2 className="font-bold text-[32px] text-[#111416] leading-10 font-['Work_Sans',Helvetica]">
                DesignCo Services
              </h2>
              <p className="font-normal text-sm text-[#5e728c] leading-[21px] font-['Work_Sans',Helvetica]">
                We offer a wide range of design services to help your business
                stand out. Our team of experienced designers is dedicated to
                delivering high-quality work that meets your specific needs.
              </p>
            </div>
          </section>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <section key={index} className="w-full">
              {/* Category Title */}
              <div className="pt-5 pb-3 px-4">
                <h3 className="font-bold text-[22px] text-[#111416] leading-7 font-['Work_Sans',Helvetica]">
                  {category.title}
                </h3>
              </div>

              {/* Category Description */}
              <div className="pt-1 pb-3 px-4">
                <p className="font-normal text-base text-[#111416] leading-6 font-['Work_Sans',Helvetica]">
                  {category.description}
                </p>
              </div>

              {/* Category Images */}
              <div className="p-4">
                <div className="flex gap-3 w-full">
                  {category.images.map((image, imgIndex) => (
                    <Card
                      key={imgIndex}
                      className="w-[301px] h-[169px] p-0 overflow-hidden rounded-lg"
                    >
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${image.url})` }}
                        aria-label={image.alt}
                      />
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};
