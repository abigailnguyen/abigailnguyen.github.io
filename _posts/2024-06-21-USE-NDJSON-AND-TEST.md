---
layout: post
title: "NDJSON"
date: 2024-06-21 23:45:00 +1000
---

## Using NDJSON to parse a file
NDJON is a type of format for Newline delimited JSON, that is useful to save a list of records of data, or events. A file of this Json type is normally with the extension 'jsonl'
In typescript and Javascript world, we use this package to enable parse and create NDJSON files: https://www.npmjs.com/package/ndjson

## To read from a JSONL file
```ts
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

## To write to file with JSONL
```ts
type SLAResponse = {
  environments: {
    name: string;
    dimensions: {
      name: string;
      metrics: {
        name: string;
        values: string[];
      }[];
      individualNames: string[];
    }[];
  }[];
  metaData?: {
    notices: string[];
  };
};

export async function extractStatsAPIResponseToNLJSON(
  statsData: SLAResponse,
  timeRangeEnd: string,
  dimensions: string[],
  timeRangeStart: string,
  writeToStream?: any,
) {
  const stream = ndjson.stringify();
  const pass = new PassThrough();

  stream.on('data', function (line: any) {
    pass.write(line);
    writeToStream?.write(line);
  });
  // handle stream error
  stream.on('error', (err) => console.error(err));

  const data = statsData.environments[0];
  data.dimensions.forEach((record) => {
    const tableValues = {};
    dimensions.forEach(
      (di, idx) => (tableValues[di] = record.individualNames[idx]),
    );
    const stats = record.metrics
      .map((metric) => ({
        name: metric.name,
        value: metric.values?.[0],
      }))
      .filter((record) => record.value !== undefined && record.value !== null);

    if (stats.length === 0) {
      return;
    }
    const metricRec = {
      time_range_start: timeRangeStart,
      time_range_end: timeRangeEnd,
      ...tableValues,
      stats,
    };
    stream.write(metricRec);
  });

  stream.on
  stream.end(() => {
    pass.end();
    writeToStream?.end();
  });

  return pass;
}
```

