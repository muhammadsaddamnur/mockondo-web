Define HTTP endpoints with custom methods, paths, response bodies, status codes, and headers. No backend code required.

## Supported methods

`GET` `POST` `PUT` `PATCH` `DELETE`

## Response configuration

| Field | Description |
|-------|-------------|
| Path | URL path, e.g. `/users` or `/users/:id` |
| Status Code | HTTP status code, e.g. `200`, `201`, `404` |
| Response Body | JSON or plain text supports interpolation |
| Headers | Custom response headers (`Content-Type`, etc.) |
| Delay (ms) | Artificial latency to simulate network conditions |

## Conditional Rules

Route different responses based on incoming request attributes. Rules are evaluated top-to-bottom and the first match wins.

| Condition type | Example |
|----------------|---------|
| Query parameter | `status` equals `active` |
| Request header | `Authorization` contains `Bearer` |
| Request body field | `user.role` equals `admin` |
| URL path segment | path contains `/v2/` |
| Regex match | `email` matches `^[a-z]+@company\.com$` |
