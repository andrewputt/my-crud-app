import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { listTodos } from "./graphql/queries";
import { createTodo, deleteTodo } from "./graphql/mutations";

function ToDo({ user, signOut }) {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "" });

  const client = generateClient({ authMode: "userPool" });

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const apiData = await client.graphql({ query: listTodos });
      setTodos(apiData.data.listTodos.items);
    } catch (e) {
      console.log("error fetching todos", e);
    }
  }

  async function createTodoItem() {
    if (!formData.name) return;
    try {
      await client.graphql({
        query: createTodo,
        variables: { input: formData },
      });
      setFormData({ name: "", description: "" });
      fetchTodos();
    } catch (e) {
      console.log("error creating todo", e);
    }
  }

  async function deleteTodoItem({ id }) {
    try {
      await client.graphql({
        query: deleteTodo,
        variables: { input: { id } },
      });
      fetchTodos();
    } catch (e) {
      console.log("error deleting todo", e);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello {user.username}</h1>

      <div style={{ marginBottom: 20, padding: 10, border: "1px solid #ddd" }}>
        <p>
          <strong>Todo userid:</strong> {user.userId}
        </p>
        <p>
          <strong>Todo username:</strong> {user.username}
        </p>
      </div>

      <button
        onClick={signOut}
        style={{ backgroundColor: "#000", color: "#fff", padding: "8px 16px" }}
      >
        Sign out
      </button>
      <br />
      <br />

      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="New item name"
        value={formData.name}
        style={{ padding: 8, marginRight: 8 }}
      />
      <button onClick={createTodoItem}>Add Item</button>

      <div style={{ marginTop: 30 }}>
        {todos.map((todo) => (
          <div
            key={todo.id || todo.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
              padding: 10,
            }}
          >
            <span>{todo.name}</span>
            <button onClick={() => deleteTodoItem(todo)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
