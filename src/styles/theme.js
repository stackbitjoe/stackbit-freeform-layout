const globalStyles = require('../../content/data/styles.json')
const breakpoints = [`${globalStyles.small}px`, `${globalStyles.medium}px`, `${globalStyles.large}px`, `${globalStyles.extraLarge}px`];

const theme = {
    breakpoints: breakpoints,
    space: ['1rem', '1.25rem', '1.5rem', '1.75rem', '1.75rem', '2rem', '2.25rem', '2.5rem', '1'],
    fontSizes: [16, 20, 28, 32],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    }
}

export default theme;
