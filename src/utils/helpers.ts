import { CreateComponentProps } from '@/utils/types';

const createComponent = ({
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

export default createComponent;
