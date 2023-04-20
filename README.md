hpore# GDate (GLib) style julian days to and from gregorian date converter
Port of GLib functions to work with julian days, to convert between it and gregorian date.
Library was initially developed to help a sister library [node-xhb](https://github.com/hertzg/node-xhb) work with 
file generated by [HomeBank](http://homebank.free.fr/en/)

## Install
```shell
npm install gdate-julian
```

## Usage
Import ESM style
```javascript
import {dateToJulianDays, julianDaysToDate} from 'gdate-julian' 
```

## Example
Here we show small example how to convert between Gregorian Date and Julian Days
More detailed examples can be found in tests in `./src/__tests__/date_conversion_spec.js`

### Gregorian Date to Julian Days
```javascript
const julianDays = dateToJulianDays(new Date('1900-01-01T12:00:00Z'))
console.log(julianDays) // outputs 693596
```

### Julian Days to Gregorian Date 
```javascript
const gregorianDate = julianDaysToDate(693596)
console.log(gregorianDate) // outputs 1900-01-01T12:00:00Z
```

## TypeScript definitions
Project also includes type definitions for TypeScript in `./src/index.d.ts`

## License
The code provided here is based off GLib codebase, hence licenced under same LGPL.
