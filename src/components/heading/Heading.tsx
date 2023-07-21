import { ElementType, HTMLAttributes, FC } from 'react';

import { TEXT_COLORS } from '../../constants';

interface HeadingProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  text: string;
  color?: string;
}

const Heading: FC<HeadingProps> = ({ as: Tag = 'h2', text, color=TEXT_COLORS.PRIMARY, ...otherProps }) => {
    return <Tag {...otherProps} style={{color: color}}>{text}</Tag>;
};

export default Heading;