# Demo Express + TypeScript + Jest

## Scripts
- `npm run dev` - start dev server with ts-node + nodemon
- `npm run build` - compile TypeScript to `dist`
- `npm start` - run compiled server
- `npm test` - run test suite
- `npm run test:watch` - watch mode
- `npm run test:cov` - coverage report
- `npm run lint` - lint source

## Endpoints
- `GET /health` -> `{ status: 'ok' }`
- `GET /greet/:name` -> `{ message: 'Hello, <name>!' }`

## Example
```bash
curl http://localhost:3000/health
```
