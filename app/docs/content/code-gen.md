Paste any JSON payload and Mockondo will generate strongly-typed model classes in your language of choice.

## Supported languages

`TypeScript` `Dart` `Kotlin` `Swift`

## Example

Input JSON:

```json
{
  "id": "abc-123",
  "name": "Alice",
  "email": "alice@example.com",
  "isActive": true
}
```

Generated TypeScript:

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}
```
