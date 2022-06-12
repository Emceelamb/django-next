import { useEffect, useState } from "react";
import { TodoType } from "../../utils/Types";
import { TrashIcon } from "@heroicons/react/outline";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const Card = (props: TodoType) => {
  const [todo, setTodo] = useState(props.todo);
  const [status, setStatus] = useState(props.status);

  const handlePatch = async () => {
    const response = await props.patch({
      id: props.id,
      status: status,
      todo: todo,
    });
    setStatus(response["data"]["status"]);
    setTodo(response["data"]["todo"]);
  };

  const handleDelete = async () => {
    const response = await props.delete({
      id: props.id,
    });
    props.setTodos((prev: TodoType) =>
      //@ts-ignore
      (prev).filter((item: TodoType) => item.id !== props.id)
    );
  };

  const handleTodoEdit = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const todoEdit = event.target.value;
    setTodo(todoEdit);
  };

  const handleStatusChange = async (status: string) => {
    switch (status) {
      case "To Do":
        setStatus("In Progress");
        break;
      case "In Progress":
        setStatus("Completed");
        break;
      case "Completed":
        setStatus("To Do");
        break;
      default:
        setStatus("To Do");
        break;
    }
    // setTimeout(()=>{handlePatch()}, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePatch();
  };

  /* useEffect(() => { */
  /*   handlePatch(); */
  /* }, [status]); */

  return (
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6 border border-gray-200 rounded shadow-md">
        <div className="flex-1 truncate">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-900 text-sm font-medium truncate">Task</h3>
            <div className="flex space-x-2">
              <button onClick={handleDelete}>
                <TrashIcon className="w-6 h-6 text-red-400" />
              </button>
              <button
                onClick={() => handleStatusChange(status)}
                className={classNames(
                  status === "To Do"
                    ? "flex-shrink-0 inline-block px-2 py-0.5 text-red-800 text-xs font-medium bg-red-100 rounded-full"
                    : status === "In Progress"
                    ? "flex-shrink-0 inline-block px-2 py-0.5 text-gray-800 text-xs font-medium bg-yellow-100 rounded-full"
                    : "flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                )}
              >
                <span>{status}</span>
              </button>
            </div>
          </div>
          <div className="min-w-0 flex-1 mt-4">
            <form onSubmit={handleSubmit} className="relative">
              <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                <label htmlFor="task" className="sr-only">
                  Todo Task
                </label>
                <textarea
                  rows={3}
                  name="task"
                  id="task"
                  className="block w-full p-3 border-0 resize-none focus:ring-0 sm:text-sm"
                  placeholder="Add your task..."
                  defaultValue={todo}
                  onChange={handleTodoEdit}
                />

                {/* Spacer element to match the height of the toolbar */}
                <div className="py-2" aria-hidden="true">
                  {/* Matches height of button in toolbar (1px border + 36px content height) */}
                  <div className="py-px">
                    <div className="h-9" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-end">
                <div className="flex-shrink-0">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </li>
  );
};
