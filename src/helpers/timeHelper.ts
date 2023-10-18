function parseStringToFloat(text?: string) {
  if (!text) {
    return undefined;
  }

  try {
    if (text.includes(":")) {
      const splitted = text.trim().split(":");
      return (
        Math.round(
          (parseInt(splitted[0]) + parseInt(splitted[1]) / 60.0) * 10000,
        ) / 10000
      );
    } else {
      return parseFloat(text.trim());
    }
  } catch (err) {
    return 0;
  }
}

function parseFloatToString(num?: number) {
  if (num === undefined) {
    return undefined;
  }

  let finalString;
  let hours = Math.floor(Math.abs(num));
  let mins = Math.round((Math.abs(num) % 1) * 100) / 100;

  if (mins >= 1) {
    hours = hours + 1;
    mins = 0.0;
  } else {
    mins = mins * 60;
  }

  const hoursString = hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
    useGrouping: false,
  });
  const minsStrings = mins.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
    useGrouping: false,
  });

  finalString = `${hoursString}:${minsStrings}`;

  if (num < 0) {
    finalString = "-" + finalString;
  }

  return finalString;
}

export { parseStringToFloat, parseFloatToString };
