import React, { useState } from 'react';

type Todo = {
    id: number;
    text: string;
};

const TodoList: React.FC = () => {
    const [todoItems, setTodoItems] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            const newTodoItem: Todo = {
                id: Date.now(),
                text: newTodo,
            };
            setTodoItems([...todoItems, newTodoItem]);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (id: number) => {
        const updatedTodos = todoItems.filter((todo) => todo.id !== id);
        setTodoItems(updatedTodos);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todoItems.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
