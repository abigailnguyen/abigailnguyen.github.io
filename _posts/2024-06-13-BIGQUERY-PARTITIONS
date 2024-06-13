## Bigquery partitioning tables:
```sql
SELECT * FROM `PROJECT_ID.DATASET.TABLE_NAME` WHERE TIMESTAMP_TRUNC(time_range_start, MONTH) = TIMESTAMP("2024-05-01") LIMIT 1000
```

```sql
SELECT
  table_name,
  partition_expiration_ms
FROM
  `PROJECT_ID.DATASET.__TABLES_SUMMARY__`
```

```sql
ALTER TABLE `project-name`.dataset_name.table_name
SET OPTIONS (partition_expiration_days=NULL);

SELECT table_name, partition_id, total_rows
FROM `PROJECT_ID.DATASET.INFORMATION_SCHEMA.PARTITIONS`
WHERE partition_id IS NOT NULL 
AND table_name='TABLE_NAME'
```
