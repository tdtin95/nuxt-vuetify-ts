import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

// extend('validateDate', value => {
//
//   console.log("validate")
//   const convertedDate = new DateTimeConverter().fromDateFormat(DATE_DEFAULT_FORMAT).toDateFormat(CALENDAR_FORMAT).convert(value)
//   if(convertedDate !== "Invalid date") {
//     return true
//   }
//
//   return value + ' is not valid date'
// });
