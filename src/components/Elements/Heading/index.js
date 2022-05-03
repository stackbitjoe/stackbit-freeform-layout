import react from 'react';
import styled from 'styled-components'
import { space, layout, color, fontSize, compose } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop'

function getHeading(level, theme) {
    return styled(level, { shouldForwardProp })(
        props => props.css,
        compose(fontSize, color, space),
    );
}

const Heading = ((props) => {
    const annotationPrefix = props['data-sb-field-path'] || '';
    let { theme, text, level } = props;

    console.log(theme);
    const Tag = getHeading(level, theme);
    return (
        <Tag
            {...props}
            fontSize={theme.fontSizes}
            m={theme.space}
            p={theme.space}
            data-sb-field-path={`${annotationPrefix} .text`}>
            {text}
        </Tag>
    )
})

export default Heading;

