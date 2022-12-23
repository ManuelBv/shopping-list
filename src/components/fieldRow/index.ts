import { fieldRowClass } from '@/utils/constants';
import createComponent from '@/utils/helpers';

const fieldRow = (componentsList: HTMLElement[]) =>
  createComponent({
    tag: 'div',
    className: fieldRowClass,
    childComponents: [...componentsList],
  });

export default fieldRow;
