# Wrappers for TDLib API

This repository contains strict typed wrappers for all [TDLib](https://core.telegram.org/tdlib) (1.4.0) methods and classes.

- [TDLib methods](/docs/td-methods.md)
- [TDLib input types](/docs/td-inputs.md)
- [TDLib output types](/docs/td-outputs.md)

**Differences from the original API**:
- All parameter names are represent in "camelCase".
- Parameter `@type` renamed to `_`.

## Installation
```bash
# npm
npm install airgram-api
```

## Basic usage

```typescript
import { apiFactory } from 'airgram-api'

function callApi (method, params) {
    // some function which sends request to TDLib
    return requestToTDLib({
      _: method,
      ...params
    }) 
}

const api = apiFactory(callApi)

// Now you can invoke all TDLib methods
api.getMe().then((response) => {
  console.info(response)
})
```

## License

The source code is licensed under GPL v3. License is available [here](/LICENSE).
