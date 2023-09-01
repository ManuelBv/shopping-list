import {
  statusBarHelpText,
  statusBarListNumberId,
  statusBarNumberOfShoppingLists,
  statusBarTodayString,
} from '@/utils/constants';
import {
  createComponent,
  getFormattedDay,
  getLiveShoppingLists,
} from '@/utils/helpers';

export const statusBarField = (text: string, dataJsTarget?: string) =>
  createComponent({
    tag: 'p',
    className: 'status-bar-field',
    childComponents: [text],
    ...(dataJsTarget && {
      props: {
        'data-js': dataJsTarget,
      },
    }),
  });

export const statusBarWrapper = createComponent({
  tag: 'div',
  className: 'status-bar',
  childComponents: [
    statusBarField(statusBarHelpText),
    statusBarField(`${statusBarTodayString}${getFormattedDay()}`),
    statusBarField(
      `${statusBarNumberOfShoppingLists}${getLiveShoppingLists().length}`,
      statusBarListNumberId,
    ),
  ],
});
