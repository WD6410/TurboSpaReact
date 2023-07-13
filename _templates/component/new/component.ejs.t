---
to: src/shared/components/<%= name %>/<%= name %>.tsx
---

import { classNamesFunc } from 'classnames-generics';

import styles from './<%= name %>.module.scss';

const classNames = classNamesFunc<keyof typeof styles>();

interface I<%= name %>Props {
  [x: string]: any;
  // declare props here
}

export default function <%= name %>(_props: I<%= name %>Props) {
  return <div className={classNames(styles['<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>'])}><%= name %></div>;
}
