import React from 'react';
import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';
import PostsApp from './components/PostsApp';
import {RecoilRoot} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <AuthApp />
      {/* <TodoApp /> */}
      {/* <PostsApp /> */}
    </RecoilRoot>
  );
}

export default App;
