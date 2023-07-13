---
inject: true
to: src/shared/components/index.ts
before: export
sh: yarn prettier
---

export { default as <%= name %> } from './<%= name %>';

