import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Noto+Serif:400,700&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: none;
}

body {
  --gray1: #f7fafc;
	--gray2: #edf2f7;
	--gray3: #e2e8f0;
	--gray4: #cbd5e0;
	--gray5: #a0aec0;
	--gray6: #718096;
	--gray7: #4a5568;
	--gray8: #2d3748;
	--gray9: #1a202c;
	--gray10: #1D2B3D;
	--bg-black: #000;
	--bg-white: #fff;
  --textColor: #1D2B3D;
  --textSecondColor: #858d95;
  --mainColor: #4653A9;
  --backgroundColor: #FCFEFD;
}

body {
  background: var(--backgroundColor);
	font-family: 'Noto Serif', serif;
}
`
export default GlobalStyles