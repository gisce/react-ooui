import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isoWeek from "dayjs/plugin/isoWeek";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import calendar from "dayjs/plugin/calendar";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/es";
import "dayjs/locale/en";
import "dayjs/locale/ca";

dayjs.extend(utc);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(isoWeek);
dayjs.extend(timezone);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(calendar);
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(updateLocale);

// Add calendar formats with localized "Today" and "Yesterday"
dayjs.updateLocale("en", {
  calendar: {
    sameDay: "[Today]",
    lastDay: "[Yesterday]",
    lastWeek: "D MMMM",
    sameElse: "D MMMM",
  },
});

dayjs.updateLocale("es", {
  calendar: {
    sameDay: "[Hoy]",
    lastDay: "[Ayer]",
    lastWeek: "D [de] MMMM",
    sameElse: "D [de] MMMM",
  },
});

dayjs.updateLocale("ca", {
  calendar: {
    sameDay: "[Avui]",
    lastDay: "[Ahir]",
    lastWeek: "D MMMM",
    sameElse: "D MMMM",
  },
});

export default dayjs;
