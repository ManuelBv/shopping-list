export interface CreateComponentProps {
  tag: string;
  className?: string;
  childComponents?: (HTMLElement | string)[];
  props?: {
    [key: string]: string;
  };
}
