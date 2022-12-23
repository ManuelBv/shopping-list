import {
  titleBarClass,
  titleBarTextClass,
  titleBarTextString,
} from '@/utils/constants';
import createComponent from '@/utils/helpers';

const titleBarText = createComponent({
  tag: 'div',
  className: titleBarTextClass,
  childComponents: [titleBarTextString],
});

const titleBar = createComponent({
  tag: 'div',
  className: titleBarClass,
  childComponents: [titleBarText],
});

export default titleBar;
