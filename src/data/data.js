import { IoMdAnalytics } from "react-icons/io";
import { FaEye, FaUsers, FaMoneyCheckDollar } from "react-icons/fa6";
import { TfiStatsUp } from "react-icons/tfi";
import { TbHomeStats } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";


export const salesData = [
  {
    title: "Sales",
    value: "300k",
    icons: TfiStatsUp,
  },
  {
    title: "Profit",
    value: "100k",
    icons: TbHomeStats,
  },
  {
    title: "Revenue",
    value: "500k",
    icons: FaMoneyCheckDollar,
  },
  {
    title: "Customers",
    value: "90k",
    icons: FaUsers,
  },
];

export const statsData = [
  {
    title: "Views",
    value: 4000,
    time: "Per day",
    icon: FaEye,
  },
  {
    title: "Visits",
    value: 7000,
    time: "Per minutes",
    icon: IoMdAnalytics,
  },
  {
    title: "Orders",
    value: 900,
    time: "Per day",
    icon: CiDeliveryTruck,
  },
];

export const progressData = [
  {
    title: "Sales",
    intro: "Total sales today",
    amount: 500,
    color: "bg-green-100",
  },
  {
    title: "Profit",
    intro: "Per day ratio",
    amount: 200,
    color: "bg-orange-100",
  },
  {
    title: "Orders",
    intro: "Total order today",
    amount: 200,
    color: "bg-blue-100",
  },
  {
    title: "Visits",
    intro: "Total visit today",
    amount: 350,
    color: "bg-gray-100",
  },
];
