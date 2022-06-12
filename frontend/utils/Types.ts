export interface TodoType {
  id: number;
  todo: string;
  status: string;
  patch: Function;
  delete: Function;
  setTodos: Function;
}
