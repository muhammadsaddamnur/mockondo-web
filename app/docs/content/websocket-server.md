Simulate real-time bidirectional communication chat apps, live notifications, stock tickers, collaborative tools, and more.

## Endpoint configuration

| Field | Description |
|-------|-------------|
| Path | WebSocket endpoint path, e.g. `/ws` or `/chat` |
| On-connect message | Message sent immediately when a client connects |
| Message rules | Respond to specific incoming messages with defined replies |
| Scheduled push | Broadcast messages to all clients on a timer |

## Message matching

Define rules to respond to specific incoming messages. Matching supports:

- **Exact match** responds when message equals the rule value exactly
- **Contains** responds when message contains the rule value
- **Regex** responds when message matches a regular expression pattern

## Scheduled push

Configure a push interval (in milliseconds) to have Mockondo automatically broadcast a message to all connected clients at regular intervals. Useful for simulating real-time data feeds.

```json
{
  "symbol": "${random.word}",
  "price": ${math.random(100, 500)},
  "change": ${math.random(-5, 5)}
}
```
