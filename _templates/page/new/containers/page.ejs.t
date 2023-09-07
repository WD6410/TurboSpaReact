---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/containers/<%=name%>Page.tsx
---

import { classNamesFunc } from 'classnames-generics';

import styles from './<%=name%>.module.scss';

const classNames = classNamesFunc<keyof typeof styles>();

interface I<%= name %>Props {
  [x: string]: any;
  // declare props here
}

export function <%=name%>Page(_props: I<%= name %>Props) {
  return (
      <div className={classNames(styles['<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>'])}><%= name %>
        <h1><%=name%></h1>
      </div>
  );
}

export const Component = <%=name%>Page;
