import {
    Dimensions
} from 'react-native';

const pw = 1180;
const ph = 1920;

/**
 * 将原型上的宽度转换为设备宽度
 * @param {Number} w 
 */
export function width(w){
    const {height, width} = Dimensions.get('window');

    return w / pw * width;
}

/**
 * 将原型上的高度转换为设备高度
 * @param {Number} w 
 */
export function height(h) {
    const {height, width} = Dimensions.get('window');
    return h / ph * height;
}