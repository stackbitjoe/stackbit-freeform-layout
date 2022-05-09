import { React } from 'react';
import { getComponent } from '../component-registry';
import { withTheme } from 'styled-components';

import { Box } from '../Box';

function PageLayout(props) {
    const { page, theme } = props;
    const freeform = page.Freeform || null;
    const pageMeta = page?.__metadata || {};

    return (
        <div data-sb-object-id={pageMeta.id}>
            <Box {...props} theme={theme} width={[1, .9, .8]} margin={'0 auto'} id="main">
                <div data-sb-field-path="Freeform">
                    <Box data-sb-field-path="Boxes">
                        {freeform?.Boxes?.map((box, boxIndex) => {
                            return <BoxGrouping
                                key={`${Math.floor(Math.random() * 1000000)}`}
                                box={box} index={boxIndex}
                                {...props}
                                css={placeHolderStyles(box)} />
                        })}
                    </Box>
                </div>
            </Box>
        </div>
    );
}

export const BoxGrouping = (props) => {
    let { box, index, depth = 0, theme } = props;
    let isPlaceHolder = !box.Boxes?.length > 0;

    return (
        <Box
            theme={theme}
            key={`${depth}_${index}`}
            data-sb-field-path={`.Boxes.${index}`}
            display={box.display}
            flexWrap={box.wrap}
            alignContent={box.align}
            justifyContent={box.justify}
            css={placeHolderStyles(box)}
            width={[
                box.smallWidth / 100,
                box.mediumWidth / 100,
                box.largeWidth / 100
            ]}>
            {box.Boxes.map((childBox, childBoxIndex) => {
                if (childBox.Boxes) {
                    return <BoxGrouping box={childBox} index={childBoxIndex} parentIndex={index} depth={depth + 1} theme={theme} />
                }

                const Component = getComponent(childBox.type);

                if (!Component) {
                    throw new Error(`no component matching the page section's type: ${childBox.type}`);
                }

                return (
                    <Component {...props} annotationPrefix={`.Boxes.${childBoxIndex}`} key={`${Math.floor(Math.random() * 1000000)}`} {...childBox} />
                );
            })}
            {isPlaceHolder && <h1>Empty Container</h1>}
        </Box >
    )
}

let placeHolderStyles = (box) => {
    if (!box.Boxes?.length > 0) {
        return {
            border: 'solid 5px #ccc',
            borderRadius: '15px',
            textAlign: 'center !important',
            justifyContent: 'center !important',
            color: '#ccc',
            minHeight: '100px'
        }
    }
}

export default withTheme(PageLayout);