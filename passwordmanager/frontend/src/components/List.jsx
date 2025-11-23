
import CardItem from "./Accountitem";
import { accounts as items } from "./data";

export default function AccountList() {


  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };


  return (
    <div className="product-list">
      <div className="cards-container">
        {items.map((item) => (
          <CardItem
            key={item.id}
            name={item.name}
            username={item.username}
            password={item.password}
            onDelete={() => deleteItem(item.id)}
          />
        ))}
      </div>

    </div>
  );
}
