import {
  midnight,
  zed,
  darkWinds,
  winterKing,
  justified,
  pedarGoardula,
} from "../public/assets/broadcast";

import { Sat, Sun, Mon, seshanbeh, Wed, Thu } from "../public/assets/weekdays";
export const broadcastInfo = [
  {
    broadcastDay: Sat,
    broadcastTitle: "نیمه شب",
    day: "شنبه",
    broadcastBanner: midnight,
    broadcastBannerAlt: "نیمه شب",
    index: 1,
  },
  {
    broadcastDay: Sun,
    broadcastTitle: "ضد",
    day: "یکشنبه",
    broadcastBanner: zed,
    broadcastBannerAlt: "ضد",
    index: 2,
  },
  {
    broadcastDay: Mon,
    broadcastTitle: "بادهای تاریک",
    day: "دوشنبه",
    broadcastBanner: darkWinds,
    broadcastBannerAlt: "بادهای تاریک",
    index: 3,
  },
  {
    broadcastDay: seshanbeh,
    broadcastTitle: "پادشاه زمستان",
    day: "سه شنبه",
    broadcastBanner: winterKing,
    broadcastBannerAlt: "پادشاه زمستان",
    index: 4,
  },
  {
    broadcastDay: Wed,
    broadcastTitle: "موجه: شهر باستانی",
    day: "چهار شنبه",
    broadcastBanner: justified,
    broadcastBannerAlt: "موجه: شهر باستانی",
    index: 5,
  },
  {
    broadcastDay: Thu,
    broadcastTitle: "پدر گواردیولا",
    day: "پنج شنبه",
    broadcastBanner: pedarGoardula,
    broadcastBannerAlt: "پدر گواردیولا",
    index: 6,
  },
];
