import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useNow } from "@vueuse/core";
import { computed } from "vue";

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

export function remainingTime(endTime) {
  return computed(() => {
    const now = useNow();

    const endTimeDayjs = dayjs.tz(endTime, "America/New_York");

    // 利用 untilDayjs 計算跟now的差距

    const duration = computed(() => {
      if (endTimeDayjs.isBefore(now.value)) {
        return dayjs.duration(0);
      }
      return dayjs.duration(endTimeDayjs.diff(now.value));
    });

    const remaining = computed(() => {
      const dur = duration.value;
      // let days = String(Math.floor(dur.asDays()));
      // if (days.length === 1) {
      //   days = `0${days}`;
      // }
      const hms = dur.format("HH[:]mm[:]ss");
      return `${hms}`;
    });

    return remaining;
  });
}
