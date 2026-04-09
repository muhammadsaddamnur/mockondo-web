Mockondo includes an S3-compatible local object storage server. Use it to test file uploads, downloads, and bucket operations without any cloud setup.

## Features

- Create and manage multiple buckets
- Upload and download files (any type)
- Presigned URL generation
- Automatic binding to your local Wi-Fi IP accessible across devices on the same network
- Compatible with any AWS S3 SDK (set endpoint to the Mockondo address)

## Connecting with AWS SDK

```typescript
import { S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "us-east-1",
  endpoint: "http:// [your-local-IP]:9000", // Mockondo S3 port
  forcePathStyle: true,
  credentials: {
    accessKeyId: "mockondo",
    secretAccessKey: "mockondo",
  },
});
```
