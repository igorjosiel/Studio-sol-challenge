import { LedsProps } from "../App.types";

const switchLed = (data: string) => {
  const leds: LedsProps[] = [];

  const handleLeds = (data: string) => {
    if (data === "1") {
      leds.push({
        first: "off",
        second: "on",
        third: "on",
        fourth: "off",
        fifth: "off",
        sixth: "off",
        seventh: "off",
      });
    }

    if (data === "2") {
      leds.push({
        first: "on",
        second: "on",
        third: "off",
        fourth: "on",
        fifth: "on",
        sixth: "off",
        seventh: "on",
      });
    }

    if (data === "3") {
      leds.push({
        first: "on",
        second: "on",
        third: "on",
        fourth: "on",
        fifth: "off",
        sixth: "off",
        seventh: "on",
      });
    }

    if (data === "4") {
      leds.push({
        first: "off",
        second: "on",
        third: "on",
        fourth: "off",
        fifth: "off",
        sixth: "on",
        seventh: "on",
      });
    }

    if (data === "5") {
      leds.push({
        first: "on",
        second: "off",
        third: "on",
        fourth: "on",
        fifth: "off",
        sixth: "on",
        seventh: "on",
      });
    }

    if (data === "6") {
      leds.push({
        first: "on",
        second: "off",
        third: "on",
        fourth: "on",
        fifth: "on",
        sixth: "on",
        seventh: "on",
      });
    }

    if (data === "7") {
      leds.push({
        first: "on",
        second: "on",
        third: "on",
        fourth: "off",
        fifth: "off",
        sixth: "off",
        seventh: "off",
      });
    }

    if (data === "8") {
      leds.push({
        first: "on",
        second: "on",
        third: "on",
        fourth: "on",
        fifth: "on",
        sixth: "on",
        seventh: "on",
      });
    }

    if (data === "9") {
      leds.push({
        first: "on",
        second: "on",
        third: "on",
        fourth: "off",
        fifth: "off",
        sixth: "on",
        seventh: "on",
      });
    }

    if (data === "0") {
      leds.push({
        first: "on",
        second: "on",
        third: "on",
        fourth: "on",
        fifth: "on",
        sixth: "on",
        seventh: "off",
      });
    }
  };

  for (let i = 0; i < data.length; i++) {
    handleLeds(data[i]);
  }

  return leds;
};

export default switchLed;
