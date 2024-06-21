---
layout: post
title: "NDJSON"
date: 2024-06-21 23:45:00 +1000
---

## Using NDJSON to parse a file
NDJON is a type of format for Newline delimited JSON, that is useful to save a list of records of data, or events. A file of this Json type is normally with the extension 'jsonl'
In typescript and Javascript world, we use this package to enable parse and create NDJSON files: https://www.npmjs.com/package/ndjson

## To read from a JSONL file
```javascript
import * as ndjson from 'ndjson';
import { createWriteStream, createReadStream, promises } from 'fs';

const path = `sla${new Date().toISOString()}.jsonl`;
const readStream = createReadStream(path).pipe(ndjson.parse());
const stats = await promises.stat(path);
if (stats.size === 0) {
    throw new Error('File is empty');
}
// To iterate through each record of the readStream
for await (const obj of readStream) {
  console.log(JSON.stringify(obj));
}
```

## To write to

