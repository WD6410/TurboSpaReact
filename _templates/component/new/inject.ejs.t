---
inject: true
to: src/shared/components/index.ts
after: export
---

export { default as <%= name %> } from './<%= name %>'


