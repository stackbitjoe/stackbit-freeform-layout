import dynamic from 'next/dynamic';

export function getComponent(key) {
    return components[key];
}

const components = {
    'Box': dynamic(() => import('./Box')),
    'Card': dynamic(() => import('./Card')),
    'ImageBlock': dynamic(() => import('./ImageBlock')),
    'PageLayout': dynamic(() => import('./PageLayout')),
    'Banner': dynamic(() => import('./Banner'))
};