////1

const [items, setItems] = useState<string[]>(['item 1', 'item 2', 'item 3']);

const updateArray = (): void => {
  const newItem: string = 'new item';
  setItems(prevItems => [...prevItems, newItem]);
};

////2

interface Person {
  name: string;
  age: number;
  location: string;
}

function MyComponent(): JSX.Element {
  const [person, setPerson] = useState<Person>({
    name: 'John',
    age: 30,
    location: 'New York'
  });

  const updateAge = (): void => {
    setPerson(prevPerson => ({
      ...prevPerson,
      age: prevPerson.age + 1
    }));
  };
  return (<></>)
    
/////3
    
interface Person {
  id: number;
  name: string;
  age: number;
}
function MyComponent(): JSX.Element {
  const [people, setPeople] = useState<Person[]>([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Carol', age: 28 }
  ]);

  const updateAge = (personId: number): void => {
    setPeople(prevPeople => 
      prevPeople.map(person => 
        person.id === personId ? { ...person, age: person.age + 1 } : person
      )
    );
  };

  return (<></>)

////4
    
interface Item {
  itemId: number;
  itemName: string;
}

interface Data {
  id: number;
  name: string;
  items: Item[];
}

function MyComponent(): JSX.Element {
  const [data, setData] = useState<Data>({
    id: 1,
    name: 'Example',
    items: [
      { itemId: 101, itemName: 'Item 1' },
      { itemId: 102, itemName: 'Item 2' },
      { itemId: 103, itemName: 'Item 3' }
    ]
  });

  const updateItemName = (itemId: number, newItemName: string): void => {
    setData(prevData => ({
      ...prevData,
      items: prevData.items.map(item =>
        item.itemId === itemId ? { ...item, itemName: newItemName } : item
      )
    }));
  };

  return (<></>)

    
///////5

    
interface NestedObject {
  [key: string]: string;
}

interface Data {
  id: number;
  name: string;
  nestedObject: NestedObject;
}

function MyComponent(): JSX.Element {
  const [data, setData] = useState<Data>({
    id: 1,
    name: 'Example',
    nestedObject: {
      key1: 'Value 1',
      key2: 'Value 2',
      key3: 'Value 3'
    }
  });

  const updateNestedValue = (key: string, newValue: string): void => {
    setData(prevData => ({
      ...prevData,
      nestedObject: {
        ...prevData.nestedObject,
        [key]: newValue
      }
    }));
  };

  return (<></>);








    

