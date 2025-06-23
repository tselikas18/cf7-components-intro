import {Trash2} from "lucide-react";

type Todo = {
    id: number;
    text: string;
}

type TodoListState = {
    todos: Todo[];
    Dispatch: React.Dispatch<{type: "DELETE"; payload: number}>;
}

const TodoList =({todos, dispatch}: TodoListProps) => {

    const handleDelete =(id: number) => () => {
        dispatch({type: "DELETE", payload: id});
    }
    return (
        <>
            <ul className="space-y-1">
                {todos.map(todo => (
                        <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                            <span>{todo.text}</span>
                            <button
                                className="text-cf-dark-red hover:underline"
                                onClick={handleDelete(todo.id)}
                            >
                                <Trash2 size={18}/>
                            </button>
                        </li>
                    )
                )}
            </ul>
        </>
    )
}

export default TodoList;