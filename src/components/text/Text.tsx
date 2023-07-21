/* Text component accepts props:
    content - content of the Text component
    color - optional - string that specifies color of the text if it is different from primary color;
    size - optional - number that specifies font size, by default - 16px;
    textAlign - optional - string that specifies text align, by default - center
    opacity - optional - number that specifies opacity, by default - 100%
*/

import {TEXT_COLORS} from '../../constants';

type TextPropsType = {
    content: string,
    color?: string,
    size?: number,
    textAlign?: "center" | 'left' | 'right',
    opacity?: number
}

function Text (props:TextPropsType) {
    const {
        content, 
        color = TEXT_COLORS.PRIMARY, 
        size = 16, 
        textAlign = "center", 
        opacity = 100
    } = props;

    const style = {
        color: color,
        fontSize: `${size}px`,
        textAlign: textAlign,
        opacity: `${opacity}%`
    }

    return <p style={style}>{content}</p>
}

export default Text;