import {useMemo} from 'react';
import {useSetRecoilState, useRecoilValue} from 'recoil';
import {todosState, nextTodoId} from '../atoms/todos';

export default function useTodosActions() {
  const set = useSetRecoilState(todosState);
  const nextId = useRecoilValue(nextTodoId);

  return useMemo(
    () => ({
      add: (text: string) =>
        set(prevState =>
          prevState.concat({
            id: nextId,
            text,
            done: false,
          }),
        ),
      remove: (id: number) =>
        set(prevState => prevState.filter(todo => todo.id !== id)),

      toggle: (id: number) =>
        set(prevState =>
          prevState.map(todo =>
            todo.id === id ? {...todo, done: !todo.done} : todo,
          ),
        ),
    }),
    [nextId, set],
  );
}
