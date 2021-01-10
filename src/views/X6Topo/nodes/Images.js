import { Shape } from '@antv/x6'

import computer1icon from './icons/终端1.png'

const computer1 = new Shape.Image({
    width: 100,
    height: 100,
    imageUrl: computer1icon,
    label: 'computer'
})

const images = { computer1 }

export default images;