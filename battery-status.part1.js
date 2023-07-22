// IN:    Our script reds the battery status data (in %)
// FACT:  the factory settings indicate how long does a % last
// OUT: calculate how many minutes our device has left

// variables
// camelCase (without prefixes: var, let, const)
// name: a.. ZA..Z0..9_

//70, 100, 10, 0.001, -100  - Numbers


batteryCharge = 50  //%    <--- variable

FULL_BATTERY = 100  // %
chargePercentInMinutes = 10 // 1% ~ 10 minutes
chargePercentInHours = 0.166 // 1% ~ 0.16 hours

etWorkInMinutes = batteryCharge * chargePercentInMinutes

etWorkInHours = batteryCharge * chargePercentInHours


// display functions:
alert( "remaining time (minutes) " + etWorkInMinutes )
alert( "remaining time (hours) " + etWorkInHours )
// "remaining time (minutes) " - String