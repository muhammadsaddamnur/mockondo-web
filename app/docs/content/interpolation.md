Inject dynamic values into your response bodies using the `${...}` interpolation syntax. Works in HTTP responses, WebSocket messages, and HTTP client request bodies.

## random.*

| Variable | Description |
|----------|-------------|
| `${random.uuid}` | Random UUID v4 |
| `${random.name}` | Random full name |
| `${random.firstName}` | Random first name |
| `${random.lastName}` | Random last name |
| `${random.email}` | Random email address |
| `${random.phone}` | Random phone number |
| `${random.image}` | Random image URL (placeholder) |
| `${random.word}` | Random single word |
| `${random.sentence}` | Random sentence |
| `${random.lorem}` | Lorem ipsum paragraph |
| `${random.jwt}` | Random JWT token |
| `${random.int(min, max)}` | Random integer in range |
| `${random.float(min, max)}` | Random float in range |

## request.*

| Variable | Description |
|----------|-------------|
| `${request.query.KEY}` | Value of a query parameter |
| `${request.header.KEY}` | Value of a request header |
| `${request.body.KEY}` | Value of a body field (dot-notation for nested) |
| `${request.path.PARAM}` | Value of a URL path parameter |

## customdata.*

Reference user-defined data lists. Create a list named `cities` with values, then use:

```
${customdata.cities.random}   // picks a random item
${customdata.cities.0}        // picks by index
```

## math.*

Evaluate arithmetic expressions inline:

```
${math.2+2}          // → 4
${math.2*2}          // → 4
```

## pagination.*

Access pagination context variables when building paginated responses:

| Variable | Description |
|----------|-------------|
| `${pagination.page}` | Current page number |
| `${pagination.limit}` | Items per page |
| `${pagination.offset}` | Calculated offset (page * limit) |
| `${pagination.total}` | Total item count |
| `${pagination.data}` | List of item |

## Full example

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

```json
{
  "total": 100,
  "data": ${pagination.data}
}
```
