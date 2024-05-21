import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["JavaScript", "PHP", "Vue", "C#", "HTML"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Code Languages"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
