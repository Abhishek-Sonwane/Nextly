import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "User Dashboard",
  desc:"",
  image: benefitOneImg,
  bullets: [
    {
      title: "Displays KPIs",
      desc: "These KPIs can be used to measure the effectiveness of display advertising campaigns, track progress towards business objectives, and inform optimization and budget allocation decisions.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Delivery Predictions",
      desc: "The Delivery Predictions feature is designed to provide users with accurate and timely information about the expected delivery dates and times for their orders.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Inventory Levels",
      desc: "The Inventory Levels feature provides a comprehensive overview of current stock quantities for products, helping users and administrators manage inventory effectively.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Cost Analytics",
      desc: "The Cost Analytics feature provides a detailed analysis of costs associated with operations, helping businesses understand their spending patterns, optimize expenses, and improve profitability.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Admin Panel",
  desc:"",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Manages data inputs",
      desc:"",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Users",
      desc:"",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Vechiles",
      desc:"",
      icon: <SunIcon />,
    },
  ],
};

const benefitThree = {
  title: "Interactive Maps",
  desc:"",
  image: benefitOneImg,
  bullets: [
    {
      title: "Route Optimization",
      desc:"",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Real-Time Tracking",
      desc:"",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};

const benefitFour = {
  title: "Feedback Interface",
  desc:"",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Collect Customer Feedback",
      desc:"",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Display Sentiment Analysis",
      desc:"",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};


export {benefitOne, benefitTwo, benefitThree, benefitFour};
