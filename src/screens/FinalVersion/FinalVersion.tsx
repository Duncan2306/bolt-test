import React from "react";
import { CharityEventSection } from "./sections/CharityEventSection";
import { LuckyDrawStatusSection } from "./sections/LuckyDrawStatusSection";
import { UserInputSection } from "./sections/UserInputSection";

export const FinalVersion = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-[1440px] flex flex-col">
        <section className="w-full">
          <UserInputSection />
        </section>

        <section className="w-full">
          <LuckyDrawStatusSection />
        </section>

        <section className="w-full">
          <CharityEventSection />
        </section>
      </div>
    </div>
  );
};
