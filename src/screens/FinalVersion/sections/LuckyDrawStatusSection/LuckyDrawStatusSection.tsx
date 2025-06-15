import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

// Prize data for mapping
const prizeData = [
  { icon: "/mask-group-1.png", text: "01 Legendary Prize" },
  { icon: "/mask-group-2.png", text: "01 Super Mavian Prize" },
  { icon: "/mask-group-3.png", text: "01 Rare Mavian Prize" },
  { icon: "/mask-group-4.png", text: "07 Common Mavian Prizes" },
];

// Eligibility criteria data
const eligibilityCriteria = [
  {
    icon: "/2.png",
    text: "Follow us on Twitter: x.com/MaviaGame  |  x.com/NexiraDAEP",
  },
  { icon: "/2-1.png", text: "Member of our Discord: Discord.gg/maviaofficial" },
  {
    icon: "/2-2.png",
    text: "I consent to receive emails/updates from Mavia/Nexira",
  },
];

export const LuckyDrawStatusSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col items-center py-16">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* Left side - Form */}
        <div className="flex flex-col w-full md:w-[673px] items-center justify-center">
          <div className="flex flex-col items-start gap-7 w-full">
            <div className="w-full">
              <div className="flex flex-col gap-[38px] w-full">
                {/* Full Name Field */}
                <div className="w-full">
                  <div className="font-bold text-white text-lg mb-2">
                    Your Full Name<span className="text-[#ea3640]">*</span>
                  </div>
                  <div className="w-full h-[58px] bg-[url(/bg-form.svg)] bg-[100%_100%]">
                    <Input
                      className="h-[58px] bg-transparent border-0 text-white placeholder:text-[#ffffff59] font-['Rajdhani'] font-semibold px-6"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="w-full">
                  <div className="font-bold text-white text-lg mb-2">
                    Your Email Address<span className="text-[#ea3640]">*</span>
                  </div>
                  <div className="w-full h-[58px] bg-[url(/bg-form.svg)] bg-[100%_100%]">
                    <Input
                      className="h-[58px] bg-transparent border-0 text-white placeholder:text-[#ffffff59] font-['Rajdhani'] font-semibold px-6"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>

                {/* Social Media Fields */}
                <div className="flex w-full gap-4 flex-col sm:flex-row">
                  {/* Twitter Field */}
                  <div className="w-full sm:w-1/2">
                    <div className="font-bold text-white text-lg mb-2">
                      Twitter / X Profile{" "}
                      <span className="font-medium text-[#ffffff80]">
                        (Optional)
                      </span>
                    </div>
                    <div className="w-full h-[58px] bg-[url(/bg-form.svg)] bg-[100%_100%]">
                      <Input
                        className="h-[58px] bg-transparent border-0 text-white placeholder:text-[#ffffff59] font-['Rajdhani'] font-semibold px-6"
                        placeholder="@youraccount"
                      />
                    </div>
                  </div>

                  {/* Facebook Field */}
                  <div className="w-full sm:w-1/2">
                    <div className="font-bold text-white text-lg mb-2">
                      Facebook Profile{" "}
                      <span className="font-medium text-[#ffffff80]">
                        (Optional)
                      </span>
                    </div>
                    <div className="w-full h-[58px] bg-[url(/bg-form.svg)] bg-[100%_100%]">
                      <Input
                        className="h-[58px] bg-transparent border-0 text-white placeholder:text-[#ffffff59] font-['Rajdhani'] font-semibold px-6"
                        placeholder="fb.com/your_profile"
                      />
                    </div>
                  </div>
                </div>

                {/* Wallet Address Field */}
                <div className="w-full">
                  <div className="font-bold text-white text-lg mb-2">
                    Lucky Draw & Airdrop Wallet Address
                    <span className="text-[#ea3640]">*</span>
                  </div>
                  <div className="w-full h-[58px] bg-[url(/bg-form.svg)] bg-[100%_100%]">
                    <Input
                      className="h-[58px] bg-transparent border-0 text-white placeholder:text-[#ffffff59] font-['Rajdhani'] font-semibold px-6"
                      placeholder="Example: 0x213f987982454Ce646f68AC8c123123dasftMAVIA"
                    />
                  </div>
                </div>

                {/* Country Field */}
                <div className="w-full">
                  <div className="font-bold text-white text-lg mb-2">
                    Country of Residence
                    <span className="text-[#ea3640]">*</span>
                  </div>
                  <div className="w-full h-[58px] bg-[url(/group-1000004134.png)] bg-[100%_100%]">
                    <Select defaultValue="vietnam">
                      <SelectTrigger className="h-[58px] bg-transparent border-0 text-white font-['Rajdhani'] font-bold px-6">
                        <div className="flex items-center gap-2">
                          <img src="/flag-country.svg" alt="Country flag" />
                          <SelectValue placeholder="Select country" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vietnam">Vietnam</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="w-full pb-7">
              <div className="flex flex-col gap-5">
                <div className="font-['Rajdhani'] font-bold text-white text-lg">
                  To be eligible for the Lucky Draw, participants must meet the
                  following criteria:
                </div>

                <div className="flex flex-col gap-2">
                  {eligibilityCriteria.map((criteria, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <div className="w-6 h-6">
                        <img
                          className="w-[23px] h-[23px]"
                          src={criteria.icon}
                          alt="Checkbox"
                        />
                      </div>
                      <div className="font-['Rajdhani'] font-bold text-white text-lg">
                        {criteria.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-[242px] opacity-50">
            <Button
              className="w-full h-[54px] bg-white border-2 border-white rounded-none relative"
              disabled
            >
              <div className="font-['Rajdhani'] font-bold text-[#215dd6] text-[28px]">
                SUBMIT
              </div>
            </Button>
          </div>
        </div>

        {/* Right side - Prize Info */}
        <div className="flex flex-col w-full md:w-[462px] gap-8">
          {/* Prize Card */}
          <Card className="w-full h-[422px] rounded-[20px] border-2 border-[#1cd7d7] relative overflow-hidden">
            <CardContent className="p-0 h-full">
              {/* Background elements */}
              <div className="absolute w-[290px] h-[63px] bottom-0 left-1/2 -translate-x-1/2 bg-[#62f1ff26] rounded-[145px/31.5px] blur-[25px]" />
              <img
                className="absolute w-[290px] h-[258px] top-[37px] left-1/2 -translate-x-1/2"
                alt="Vector"
                src="/vector-12.svg"
              />

              {/* Title */}
              <div className="flex flex-col items-center pt-6 px-[38px]">
                <div className="flex items-end gap-2">
                  <div className="relative w-11 h-11 -rotate-90">
                    <img
                      className="absolute w-10 h-[38px] top-[3px] left-0.5 rotate-90"
                      alt="Icon"
                      src="/ixon-1.png"
                    />
                  </div>
                  <div className="[text-shadow:0px_0px_20px_#ffb42540] [background:linear-gradient(180deg,rgba(255,227,173,1)_0%,rgba(255,180,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-transparent text-[34px] text-center">
                    Massive $15K+ Prizes
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="[text-shadow:0px_0px_4px_#5ff8ff80] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-[#5ff8ff] text-[34px] whitespace-nowrap">
                    & up to 200K Airdrop
                  </div>
                  <img
                    className="w-12 h-12 object-cover"
                    alt="Image"
                    src="/image-943.png"
                  />
                </div>
              </div>

              {/* Prize List */}
              <div className="absolute w-[390px] h-[189px] top-[141px] left-1/2 -translate-x-1/2">
                <div className="absolute w-[340px] h-[175px] top-1.5 left-12">
                  <div className="absolute h-[175px] top-0 left-0 [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-white text-[26.5px] leading-[25.5px] flex flex-col gap-[25px]">
                    {prizeData.map((prize, index) => (
                      <React.Fragment key={index}>
                        <div>{prize.text}</div>
                        {index < prizeData.length - 1 && (
                          <img
                            className="absolute w-80 h-0.5 top-[{(index+1)*50-15}px] left-0"
                            alt="Separator"
                            src="/vector-888.svg"
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <img
                    className="absolute w-80 h-0.5 top-10 left-0"
                    alt="Vector"
                    src="/vector-888.svg"
                  />
                  <img
                    className="absolute w-80 h-0.5 top-[90px] left-0"
                    alt="Vector"
                    src="/vector-888.svg"
                  />
                  <img
                    className="absolute w-80 h-0.5 top-[139px] left-0"
                    alt="Vector"
                    src="/vector-888.svg"
                  />
                </div>

                {/* Prize Icons */}
                <div className="flex flex-col w-[37px] h-[189px] items-start justify-center gap-[11.05px] absolute top-0 left-0 shadow-[0px_0px_22.11px_#071c45]">
                  {prizeData.map((prize, index) => (
                    <div
                      key={index}
                      className="relative w-[37.07px] h-[38.9px]"
                    >
                      <img
                        className="absolute w-9 h-[39px] top-0 left-0"
                        alt={`Prize icon ${index + 1}`}
                        src={prize.icon}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-[25px] left-1/2 -translate-x-1/2 [text-shadow:0px_0px_18.49px_#ffb42540] [background:linear-gradient(180deg,rgba(255,227,173,1)_0%,rgba(255,180,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-transparent text-[31.4px] text-center">
                25,000 $MAVIA + 100 NFTs
              </div>
            </CardContent>
          </Card>

          {/* Lucky Number Card */}
          <Card className="w-full h-[167px] rounded-[20px] border-2 border-[#1cd7d7] [background:linear-gradient(180deg,rgba(8,17,48,1)_16%,rgba(8,52,115,1)_100%)]">
            <CardContent className="p-0 h-full flex items-center">
              <div className="flex flex-col w-[237px] items-start gap-2.5 ml-9">
                <div className="flex items-end gap-2 w-full">
                  <div className="[text-shadow:0px_0px_20px_#ffb42540] [background:linear-gradient(180deg,rgba(255,227,173,1)_0%,rgba(255,180,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-transparent text-[34px] text-center">
                    YOUR LUCKY #
                  </div>
                </div>
                <div className="[text-shadow:0px_0px_20px_#ffffff40] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-white text-[74px] text-center leading-[68.1px] w-full">
                  5121
                </div>
              </div>
              <img
                className="w-[126px] h-[156px]"
                alt="Mascot"
                src="/ksajlkasd-1.png"
              />
            </CardContent>
          </Card>

          {/* Deadline Notice */}
          <div className="w-full text-center mt-4">
            <div className="flex items-start justify-center">
              <img
                className="w-6 h-6 mt-1 mr-1"
                alt="Time icon"
                src="/time-fill.png"
              />
              <div className="[font-family:'Century_Gothic-Regular',Helvetica] text-xl tracking-[-0.20px] leading-7 text-white">
                <span className="[font-family:'Century_Gothic-Bold',Helvetica] font-bold text-[#5ff8ff]">
                  Deadline:
                </span>
                &nbsp;&nbsp;Registrations must be submitted by
                <br />
                <span className="[font-family:'Century_Gothic-Bold',Helvetica] font-bold">
                  05 June 2025 @6:00 VN (23:00 UTC)
                </span>
                &nbsp;to be eligible.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="w-full flex justify-center mt-16">
        <img
          className="w-[345px] h-[84px] object-cover"
          alt="Logo"
          src="/23123-1.png"
        />
      </div>
    </section>
  );
};
