import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const UserInputSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { name: "Marketplace", hasDropdown: true },
    { name: "Exchange", hasDropdown: false },
    { name: "Games", hasDropdown: false },
    { name: "Ruby Scan", hasDropdown: true },
  ];

  return (
    <section className="relative w-full h-[1010px] bg-[#0e1426] overflow-hidden">
      {/* Header Navigation */}
      <header className="w-full h-[70px] bg-[#0f193e80] border-b border-[#364066] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
        <div className="container mx-auto h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center h-[35px] w-52">
            <div className="relative w-[31px] h-[35px] bg-[url(/vector-1.svg)] bg-[100%_100%]">
              <div className="relative w-5 h-5 top-[7px] left-[5px]">
                <img
                  className="absolute w-[15px] h-5 top-0 left-0"
                  alt="Vector"
                  src="/vector-2.svg"
                />
                <img
                  className="absolute w-[9px] h-[9px] top-0 left-[11px]"
                  alt="Vector"
                  src="/vector-10.svg"
                />
                <img
                  className="absolute w-[9px] h-[9px] top-[11px] left-[11px]"
                  alt="Vector"
                  src="/vector-3.svg"
                />
              </div>
            </div>
            <img
              className="ml-2 w-[169px] h-[17px]"
              alt="Frame"
              src="/frame-1171278473.svg"
            />
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="flex items-center gap-0">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <div className="flex h-[34px] items-center gap-2.5 px-2.5 py-1.5">
                    <div className="[font-family:'Rajdhani',Helvetica] font-semibold text-black-modetext-title text-sm">
                      {item.name}
                    </div>
                    {item.hasDropdown && (
                      <img
                        className="w-[9px] h-1.5"
                        alt="Vector"
                        src="/vector-8.svg"
                      />
                    )}
                  </div>
                </NavigationMenuItem>
              ))}

              {/* Lucky Draw Button */}
              <NavigationMenuItem>
                <Button
                  variant="outline"
                  className="h-[34px] bg-black-modecore-button-30 border border-[#215dd6] rounded-none [font-family:'Rajdhani',Helvetica] font-bold text-black-modetext-title text-sm"
                >
                  Lucky Draw
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* User Profile */}
          <Card className="flex items-center justify-center gap-1.5 px-4 py-1.5 h-[34px] w-36 bg-[#1a244b] border border-[#364066] rounded-none">
            <img
              className="w-[18px] h-[18px] object-cover"
              alt="User Avatar"
              src="/rectangle-319.png"
            />
            <div className="[font-family:'Rajdhani',Helvetica] font-semibold text-black-modetext-title text-sm">
              usertufo123
            </div>
            <img
              className="w-[18px] h-[18px] object-cover"
              alt="Rectangle"
              src="/rectangle-318.png"
            />
          </Card>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative w-full h-[calc(100%-70px)] overflow-hidden">
        {/* Background Images and Gradients */}
        <div className="absolute inset-0 w-full h-full">
          <img
            className="absolute w-full h-[935px] object-cover"
            alt="Game background"
            src="/game-background-characterbackground-v0001-4.png"
          />
          <div className="absolute inset-0 w-full h-[715px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(19,44,94,0)_44%,rgba(19,44,94,1)_100%)]" />
          <img
            className="absolute w-[927px] h-[794px] top-0 left-1/2 -translate-x-1/4"
            alt="Mask group"
            src="/mask-group.png"
          />
          <div className="absolute inset-0 w-full h-[811px] [background:linear-gradient(0deg,rgba(0,132,254,0.5)_0%,rgba(0,132,254,0.5)_100%),linear-gradient(330deg,rgba(33,148,255,0.25)_0%,rgba(0,132,254,0.13)_100%)]" />
          <img
            className="absolute w-[635px] h-[583px] top-[157px] left-1/2 -translate-x-1/12 object-cover"
            alt="Character"
            src="/image-942.png"
          />
          <div className="absolute w-full h-[2486px] top-[694px] left-0 blur-[100px] [background:linear-gradient(180deg,rgba(23,108,210,1)_0%,rgba(5,29,129,1)_100%)]" />
          <img
            className="absolute w-[248px] h-20 top-[83px] left-1/2 -translate-x-1/12"
            alt="Vector"
            src="/vector.svg"
          />
        </div>

        {/* Event Content */}
        <div className="relative w-full max-w-[1303px] mx-auto pt-[608px]">
          <h1 className="text-center [text-shadow:0px_0px_28.52px_#00358a] [background:linear-gradient(180deg,rgba(255,227,173,1)_0%,rgba(255,180,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-[65.3px]">
            CHARITY LUCKY DRAW &amp; AIRDROP EVENTS
          </h1>

          <div className="flex flex-col items-center mt-[20px]">
            <img
              className="w-[894px] h-[82px]"
              alt="Group"
              src="/group-73-2.png"
            />
            <div className="[font-family:'Century_Gothic-Bold',Helvetica] font-bold text-[#5ff8ff] text-[49.6px] text-center leading-[47.6px]">
              {" "}
              Link: To be announced
            </div>
          </div>

          <img
            className="w-[894px] h-[58px] mx-auto mt-[20px]"
            alt="Group"
            src="/group-73-1.png"
          />
        </div>
      </div>
    </section>
  );
};
