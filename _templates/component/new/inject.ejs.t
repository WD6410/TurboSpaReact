---
inject: true
to: src/shared/components/index.ts
append: true
sh: yarn prettier
---

export { default as <%= name %> } from './<%= name %>';

