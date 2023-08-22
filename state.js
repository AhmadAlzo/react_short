const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);

const updateArray = () => {
  const newItem = 'new item';
  setItems(prevItems => [...prevItems, newItem]);
};

const [person, setPerson] = useState({
  name: 'John',
  age: 30,
  location: 'New York'
});

const updateAge = () => {
  setPerson(prevPerson => ({
    ...prevPerson,
    age: prevPerson.age + 1
  }));
};

const [people, setPeople] = useState([
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Carol', age: 28 }
]);
  
const updateAge = (personId) => {
  setPeople(prevPeople => 
    prevPeople.map(person => 
      person.id === personId ? { ...person, age: person.age + 1 } : person
    )
  );
};

const [data, setData] = useState({
  id: 1,
  name: 'Example',
  items: [
    { itemId: 101, itemName: 'Item 1' },
    { itemId: 102, itemName: 'Item 2' },
    { itemId: 103, itemName: 'Item 3' }
  ]
});

const updateItemName = (itemId, newItemName) => {
  setData(prevData => ({
    ...prevData,
    items: prevData.items.map(item =>
      item.itemId === itemId ? { ...item, itemName: newItemName } : item
    )
  }));
};

const [data, setData] = useState({
  id: 1,
  name: 'Example',
  nestedObject: {
    key1: 'Value 1',
    key2: 'Value 2',
    key3: 'Value 3'
  }
});

const updateNestedValue = (key, newValue) => {
  setData(prevData => ({
    ...prevData,
    nestedObject: {
      ...prevData.nestedObject,
      [key]: newValue
    }
  }));
};


const [data, setData] = useState({
  id: 1,
  name: 'Example',
  nestedObjects: {
    object1: { key1: 'Value 1', key2: 'Value 2' },
    object2: { key1: 'Value 3', key2: 'Value 4' }
  }
});

const updateNestedValue = (objectKey, keyToUpdate, newValue) => {
  setData(prevData => ({
    ...prevData,
    nestedObjects: {
      ...prevData.nestedObjects,
      [objectKey]: {
        ...prevData.nestedObjects[objectKey],
        [keyToUpdate]: newValue
      }
    }
  }));
};

const [data, setData] = useState([
  {
    id: 1,
    name: 'Object 1',
    items: ['Item A', 'Item B', 'Item C']
  },
  {
    id: 2,
    name: 'Object 2',
    items: ['Item X', 'Item Y', 'Item Z']
  }
]);

const updateItem = (objectId, itemIndex, newItem) => {
  setData(prevData =>
    prevData.map(obj =>
      obj.id === objectId
        ? {
            ...obj,
            items: obj.items.map((item, index) =>
              index === itemIndex ? newItem : item
            )
          }
        : obj
    )
  );
};






