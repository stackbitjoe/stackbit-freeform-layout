import { React, useState } from 'react';
import { getComponent } from '../component-registry';
import { withTheme } from 'styled-components';

import Box from '../Box';

function PageLayout(props) {
    const { page, theme } = props;
    const freeform = page.Freeform || null;
    const pageMeta = page?.__metadata || {};

    return (
        <div data-sb-object-id={pageMeta.id}>
            <Box {...props} theme={theme} width={[1, .9, .9, .8]} margin={'0 auto'} id="main">
                <div data-sb-field-path="Freeform">
                    <Box data-sb-field-path="Boxes">
                        {freeform?.Boxes?.map((box, boxIndex) => {
                            return <BoxGrouping key={`${Math.floor(Math.random() * 1000000)}`}
                                box={box}
                                index={boxIndex} {...props} padding={10} />
                        })}
                    </Box>
                </div>
            </Box>
        </div>
    );
}

export const BoxGrouping = (props) => {
    let { box, index, depth = 0, theme } = props;
    return (
        <Box
            theme={theme}
            key={`${depth}_${index}`}
            data-sb-field-path={`.Boxes.${index}`}
            display={box.display}
            flexWrap={box.wrap}
            alignContent={box.align}
            justifyContent={box.justify}
            // bg={colorDepthMap(depth)}
            // border={'dotted 1px'}
            style={{
                minHeight: '100px'
            }}
            width={[
                box.smallWidth / 100,
                box.mediumWidth / 100,
                box.largeWidth / 100,
                box.extraLargeWidth / 100
            ]}>

            {box.Boxes.map((childBox, childBoxIndex) => {
                if (childBox.Boxes) {
                    return <BoxGrouping box={childBox} index={childBoxIndex} parentIndex={index} depth={depth + 1} theme={theme} />
                } else {
                    const Component = getComponent(childBox.type);

                    if (!Component) {
                        throw new Error(`no component matching the page section's type: ${childBox.type}`);
                    }

                    return (
                        // <div data-sb-field-path={`.Boxes.${childBoxIndex}`} style={{ display: 'contents' }}>
                        <Component {...props} annotationPrefix={`.Boxes.${childBoxIndex}`} key={`${Math.floor(Math.random() * 1000000)}`} {...childBox} />
                        // </div>
                    );
                }
            })}
        </Box >
    )
}


function lookUpComponent(box, childBoxIndex) {
    const Component = getComponent(box.type);

    if (!Component) {
        throw new Error(`no component matching the page section's type: ${box.type}`);
    }

    return (
        <Component data-sb-field-path={`.Boxes.${childBoxIndex}`} key={`${Math.floor(Math.random() * 1000000)}`} {...box} />
    );
}

export default withTheme(PageLayout);