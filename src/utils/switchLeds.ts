import { LedsProps } from "../App.types";

const switchLed = (data: string) => {
  const leds: LedsProps[] = [];

  const handleLeds = (data: string) => {
    if (data === "1") {
      leds.push({
        first: "not_active",
        second: "active",
        third: "active",
        fourth: "not_active",
        fifth: "not_active",
        sixth: "not_active",
        seventh: "not_active",
      });
    }

    if (data === "2") {
      leds.push({
        first: "active",
        second: "active",
        third: "not_active",
        fourth: "active",
        fifth: "active",
        sixth: "not_active",
        seventh: "active",
      });
    }

    if (data === "3") {
      leds.push({
        first: "active",
        second: "active",
        third: "active",
        fourth: "active",
        fifth: "not_active",
        sixth: "not_active",
        seventh: "active",
      });
    }

    if (data === "4") {
      leds.push({
        first: "not_active",
        second: "active",
        third: "active",
        fourth: "not_active",
        fifth: "not_active",
        sixth: "active",
        seventh: "active",
      });
    }

    if (data === "5") {
      leds.push({
        first: "active",
        second: "not_active",
        third: "active",
        fourth: "active",
        fifth: "not_active",
        sixth: "active",
        seventh: "active",
      });
    }

    if (data === "6") {
      leds.push({
        first: "active",
        second: "not_active",
        third: "active",
        fourth: "active",
        fifth: "active",
        sixth: "active",
        seventh: "active",
      });
    }

    if (data === "7") {
      leds.push({
        first: "active",
        second: "active",
        third: "active",
        fourth: "not_active",
        fifth: "not_active",
        sixth: "not_active",
        seventh: "not_active",
      });
    }

    if (data === "8") {
      leds.push({
        first: "active",
        second: "active",
        third: "active",
        fourth: "active",
        fifth: "active",
        sixth: "active",
        seventh: "active",
      });
    }

    if (data === "9") {
      leds.push({
        first: "active",
        second: "active",
        third: "active",
        fourth: "not_active",
        fifth: "not_active",
        sixth: "active",
        seventh: "active",
      });
    }

    if (data === "0") {
      leds.push({
        first: "active",
        second: "active",
        third: "active",
        fourth: "active",
        fifth: "active",
        sixth: "active",
        seventh: "not_active",
      });
    }
  };

  for (let i = 0; i < data.length; i++) {
    handleLeds(data[i]);
  }

  return leds;
};

export default switchLed;
