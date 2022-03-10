import {atom, selector} from 'recoil';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [
    {id: 1, text: '리액트 네이티브 배우기', done: true},
    {id: 2, text: '상태 관리 배우기', done: false},
  ],
});

export const nextTodoId = selector({
  key: 'nextTodoId',
  get: ({get}) => {
    const todos = get(todosState);
    const lastId = todos[todos.length - 1]?.id ?? 0;
    return lastId + 1;
  },
});
