import { Global, css } from '@emotion/react';

export const ResetCss = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    padding: 0;
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
`;

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${ResetCss}
      `}
    />
  );
};
