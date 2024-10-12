---
layout: post
title: "UTCOFFSET"
---

# Get the UTC offset using the standard Date library
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
