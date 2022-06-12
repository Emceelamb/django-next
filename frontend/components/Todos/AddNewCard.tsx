import { useRef, useEffect, useState } from "react";
import { TodoType } from "../../utils/Types";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const AddNewCard = (props: { post: Function; setTodos: Function }) => {
  const textAreaRef = useRef<null | HTMLTextAreaElement>(null);
  const [todo, setTodo] = useState<string | null>(null);

  const handleTodoEdit = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const todoEdit = event.target.value;
    setTodo(todoEdit);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await props.post({
      todo: todo,
    });
    props.setTodos((prev: TodoType[]) => [...prev, response["data"]]);

    if (textAreaRef && textAreaRef.current) textAreaRef.current.value = "";
  };

  return (
    <li className="col-span-1 bg-gray-50 rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6 border border-gray-200 rounded shadow-md">
        <div className="flex-1 truncate">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              New Task
            </h3>
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
                  defaultValue={""}
                  onChange={handleTodoEdit}
                  ref={textAreaRef}
                />

                {/* Spacer element to match the height of the toolbar */}
                <div className="py-2" aria-hidden="true">
                  {/* Matches height of button in toolbar (1px border + 36px content height) */}
                  <div className="py-px">
                    <div className="h-9" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-end bg-white border border-gray-300">
                <div className="flex-shrink-0">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Task
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
