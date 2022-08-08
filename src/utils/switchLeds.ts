const switchLed = (data: string) => {
  if (data === "1") {
    return {
      first: "not_active",
      second: "active",
      third: "active",
      fourth: "not_active",
      fifth: "not_active",
      sixth: "not_active",
      seventh: "not_active",
    }
  }

  if (data === "2") {
    return {
      first: "active",
      second: "active",
      third: "not_active",
      fourth: "active",
      fifth: "active",
      sixth: "not_active",
      seventh: "active",
    }
  }

  if (data === "3") {
    return {
      first: "active",
      second: "active",
      third: "active",
      fourth: "active",
      fifth: "not_active",
      sixth: "not_active",
      seventh: "active",
    }
  }

  if (data === "4") {
    return {
      first: "not_active",
      second: "active",
      third: "active",
      fourth: "not_active",
      fifth: "not_active",
      sixth: "active",
      seventh: "active",
    }
  }

  if (data === "5") {
    return {
      first: "active",
      second: "not_active",
      third: "active",
      fourth: "active",
      fifth: "not_active",
      sixth: "active",
      seventh: "active",
    }
  }

  if (data === "6") {
    return {
      first: "active",
      second: "not_active",
      third: "active",
      fourth: "active",
      fifth: "active",
      sixth: "active",
      seventh: "active",
    }
  }

  if (data === "7") {
    return {
      first: "active",
      second: "active",
      third: "active",
      fourth: "not_active",
      fifth: "not_active",
      sixth: "not_active",
      seventh: "not_active",
    }
  }

  if (data === "8") {
    return {
      first: "active",
      second: "active",
      third: "active",
      fourth: "active",
      fifth: "active",
      sixth: "active",
      seventh: "active",
    }
  }

  if (data === "9") {
    return {
      first: "active",
      second: "active",
      third: "active",
      fourth: "not_active",
      fifth: "not_active",
      sixth: "active",
      seventh: "active",
    }
  }

  if (data === "0") {
    return {
      first: "active",
      second: "active",
      third: "active",
      fourth: "active",
      fifth: "active",
      sixth: "active",
      seventh: "not_active",
    }
  }

  // for (let i = 0; i < dataStringfy.length; i++) {
  //   handleIndentifyNumber(dataStringfy[i], type);
  // }

  // return array;
};

export default switchLed;