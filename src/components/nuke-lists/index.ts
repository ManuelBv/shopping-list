import {
  nukeListsLabelString,
  nukeListsButtonId,
  fieldRowClass,
} from '@/utils/constants';
import { createComponent } from '@/utils/helpers';

export const nukeListsButton = createComponent({
  tag: 'button',
  props: {
    'data-js': nukeListsButtonId,
  },
  childComponents: [nukeListsLabelString],
});

export const nukeListsWrapper = createComponent({
  tag: 'div',
  className: fieldRowClass,
  childComponents: [nukeListsButton],
});
