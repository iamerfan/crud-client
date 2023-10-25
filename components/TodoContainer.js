"use client";
import Input from "@/components/Input";
import Todos from "@/components/Todos";
import { server } from "@/const";
import { useState } from "react";
import ShortUniqueId from "short-unique-id";

export default function TodoContainer({ data }) {
  const id = new ShortUniqueId({ length: 5 }).rnd();
  const [todos, setTodos] = useState([...data].reverse());
  const [loading, setLoading] = useState(false);

  const handleDelete = async (todoId) => {
    try {
      const result = await fetch(`${server}/${todoId}`, {
        method: "DELETE",
        cache: "no-cache",
      });
      if (result.ok) {
        return setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleEditValue = async (todoId, editedValue) => {
    try {
      const result = await fetch(`${server}/${todoId}/${editedValue}`, {
        method: "PUT",
        cache: "no-cache",
      });
      if (result.ok) {
        setTodos((prev) => {
          return prev.map((todo) => {
            if (todo.id === todoId) {
              return { ...todo, value: editedValue };
            }
            return todo;
          });
        });
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const handleAdd = async (value) => {
    try {
      setLoading(true);
      const response = await fetch(server, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id, value }),
      });
      if (response.ok) setTodos([{ id, value }, ...todos]);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border w-full min-h-[10rem] bg-slate-50 rounded-lg shadow-lg">
      <Input loading={loading} handleAdd={handleAdd} />
      <div>
        <label>Todos : </label>
        <Todos
          loading={loading}
          todos={todos}
          handleEditValue={(id, value) => handleEditValue(id, value)}
          handleDelete={(todoId) => handleDelete(todoId)}
        />
      </div>
    </div>
  );
}
