import React from "react";
import { format } from "date-fns";

interface ValueLabelTwoProps {
 value: number | number[];
 minDate: string;
 maxDate: string;
 min: number;
 max: number;
}
const ValueLabelTwo: React.FC<ValueLabelTwoProps> = ({
 value,
 minDate,
 maxDate,
 min,
 max,
}) => {
 let label: string;
 if (Array.isArray(value)) {
   // value is an array
   if (value[0] === min && value[1] === max) {
     label =
       format(new Date(minDate), "yyyy MMM") +
       " - " +
       format(new Date(maxDate), "yyyy MMM");
   } else if (value[0] === min) {
     label =
       format(new Date(minDate), "yyyy MMM") +
       " - " +
       format(new Date(value[1] * 1000), "yyyy MMM");
   } else if (value[1] === max) {
     label =
       format(new Date(value[0] * 1000), "yyyy MMM") +
       " - " +
       format(new Date(maxDate), "yyyy MMM");
   } else {
     label =
       format(new Date(value[0] * 1000), "yyyy MMM") +
       " - " +
       format(new Date(value[1] * 1000), "yyyy MMM");
   }
 } else {
   // value is a single number
   if (value === min) {
     label = format(new Date(minDate), "yyyy MMM");
   } else if (value === max) {
     label = format(new Date(maxDate), "yyyy MMM");
   } else {
     label = format(new Date(value * 1000), "yyyy MMM");
   }
 }
 return <span>{label}</span>;
};

export default ValueLabelTwo;