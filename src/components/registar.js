import React, { useState } from "react";

function Registar() {
  const [total, setTotal] = useState(0);
  const [cost, setCost] = useState(0);
  const [cash, setCash] = useState(0);
  const [description, setDescription] = useState("");
  const [order, setOrder] = useState([]);
  const [submit, setSubmit] = useState(false);
  function handleSubmit(e) {
    const val = cash - cost;
    e.preventDefault();
    setOrder([
      ...order,
      {
        itemcost: cost,
        customercash: cash,
        itemdescription: description,
        orderChange: val
      }
    ]);
    setTotal(total + cost);
    setSubmit(!submit);
    console.log(val);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>item cost</label>

        <input
          typr="number"
          name="cost"
          onChange={e => setCost(e.target.value)}
        />
        <label> customer pays with:</label>
        <input
          type="number"
          name="cash"
          onChange={e => setCash(e.target.value)}
        />
        <label> item description</label>

        <input
          type="text"
          name="description"
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit"> submit</button>
      </form>
      <ul>
        {order.map(items => (
          <li>
            {" "}
            description:{items.itemdescription} cost:{items.itemcost} pays with:
            {items.customercash}
            change:{items.orderChange}
          </li>
        ))}
      </ul>
      <h1>Grand total={total}</h1>
    </div>
  );
}

export default Registar;
