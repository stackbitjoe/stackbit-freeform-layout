import styled from 'styled-components'
import css from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
    compose,
    space,
    layout,
    typography,
    color,
    flexbox,
    border,
    fontSize
} from 'styled-system'

const Box = styled('div', { shouldForwardProp })(
    props => props.css,
    {
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0
    },
    compose(space, layout, typography, color, flexbox, border, fontSize),
);

export default Box;