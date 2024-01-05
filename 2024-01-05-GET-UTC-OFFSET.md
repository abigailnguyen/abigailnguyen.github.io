layout: post
title: "Get the utcOffset"
date: 2024-01-05 10:00:00 -0000
categories: TYPESCRIPT CODE_SNIPPET
----------------------

# Get the UTC time offset using standard Date library
```js
const TIMEZONE = 'Australia/Melbourne'
function getTimezone(date: string): number {
  const d = new Date(date);
  const utcDate = new Date(d.toLocaleString('en-US', { timeZone: 'UTC' }));
  const tzDate = new Date(d.toLocaleString('en-US', { timeZone: TIMEZONE }));
  const offset = tzDate.getTime() - utcDate.getTime();
  return offset / 1000 / 60;
}
```
