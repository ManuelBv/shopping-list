type SayNameType = (name: string) => string;

const sayName: SayNameType = (name) => {
  return `Name is ${name}`;
}

export default sayName;
