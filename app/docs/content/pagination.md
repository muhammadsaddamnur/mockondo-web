Generate paginated API responses from a single item template. Mockondo handles the pagination math and wraps items in your configured envelope format.

## Configuration

| Field | Description |
|-------|-------------|
| Item template | JSON template for a single item (supports interpolation) |
| Page param | Query param name for the page number (default: `page`) |
| Limit param | Query param name for items per page (default: `limit`) |
| Total items | Total number of items to simulate |
| Response envelope | Wrapper structure: `{ data, total, page, limit }` |

## Example request

```
GET /users?page=2&limit=10
```

Returns items 11–20 of the total set, with pagination metadata.

## Example config

Normal response

```json
{
  "total": 100,
  "data": ${pagination.data}
}

```
Pagination Data (data from ${pagination.data})

```json
{
  "id": "${random.uuid}",
  "name": "${random.name}",
  "email": "${random.email}",
  "role": "${request.body.role}",
  "city": "${customdata.cities.random}",
  "score": ${math.random(0, 100)},
  "token": "${random.jwt}"
}
```
