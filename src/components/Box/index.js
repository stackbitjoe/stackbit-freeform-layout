import styled from 'styled-components'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { compose, space, layout, typography, flexbox, border, fontSize } from 'styled-system'

export const Box = styled('div', { shouldForwardProp })(
    props => props.css,
    {
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0
    },
    compose(space, layout, typography, flexbox, border, fontSize),
);

export const BoxPlaceHolder = styled('div', { shouldForwardProp })(
    props => props.css,
    {
        border: 'solid 5px #ccc',
        borderRadius: '15px',
        textAlign: 'center',
        color: '#ccc',
        minHeight: '100px'
    }
);