import { CreateComponentProps } from '@/utils/types';
import {
  liveListString,
  statusBarListNumberSelector,
  statusBarNumberOfShoppingLists,
} from './constants';

export const getFormattedDay = () => {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());
};

export const updateShoppingListNumberStatus = () => {
  const statusBarNumberListBox = document.querySelector(
    statusBarListNumberSelector,
  );

  if (!statusBarNumberListBox) return;

  statusBarNumberListBox.textContent = `${statusBarNumberOfShoppingLists}${
    getLiveShoppingLists().length
  }`;
};

export const getLiveShoppingLists = () => {
  const liveListArray: string[] = [];

  for (let i = 0; i < window.localStorage.length; i++) {
    const currentKey = window.localStorage.key(i);
    if (currentKey?.includes(liveListString)) {
      liveListArray.push(currentKey);
    }
  }

  return liveListArray;
};

export const deleteLiveShoppingListsFromStorage = () => {
  const initialLiveLists = getLiveShoppingLists();
  if (initialLiveLists.length === 0) {
    alert('There are NO live lists to delete!');
    return;
  }

  for (let i = 0; i < initialLiveLists.length; i++) {
    window.localStorage.removeItem(initialLiveLists[i]);
  }

  const liveListsAfterDeletion = getLiveShoppingLists();
  if (!liveListsAfterDeletion.length) {
    alert('ALL live lists deleted!');
  } else {
    alert('Live list DELETION failed!');
  }
};

export const createComponent = ({
  tag,
  className,
  childComponents,
  props,
}: CreateComponentProps): HTMLElement => {
  const component = document.createElement(tag);
  if (className) {
    component.setAttribute('class', className);
  }

  if (props) {
    const listOfProps = Object.entries(props);
    listOfProps.forEach((property) => {
      const [attribute, value] = property;
      component.setAttribute(attribute, value);
    });
  }

  if (!childComponents) {
    return component;
  }

  childComponents.forEach((childComponent) => {
    let componentToAdd: typeof childComponent | Text = childComponent;
    if (typeof childComponent === 'string') {
      componentToAdd = document.createTextNode(childComponent);
    }

    component.appendChild(componentToAdd as HTMLElement);
  });

  return component;
};
