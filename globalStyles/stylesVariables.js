export const colors ={
  main: '#53ad35',
  second: '#565656',
  third: '#565656',
  white: '#fff',
  black: '#000'
}

export const fonts = {
  font_system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
  h1: '36px',
	h2: '24px',
	h3: '18px',
	p: '14px',
  small: '12px',
}

// media queries
const mediaSize = {
	mobile: '420px',
	tablet: '620px',
	miniDesktop: '920px',
	littleDesktop: '1315px',
	desktop: '1440px',
};

export const mediaQueries = {
	mobile: `(max-width: ${mediaSize.mobile})`,
	tablet: `(max-width: ${mediaSize.tablet})`,
	miniDesktop: `(max-width: ${mediaSize.miniDesktop})`,
	littleDesktop: `(max-width: ${mediaSize.littleDesktop})`,
	desktop: `(max-width: ${mediaSize.desktop})`,
};

export const width = {
	normal: '370px',
	mobile: '165px'
};
