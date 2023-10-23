import { Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from '../components/mainLayout';
import { HhLogIn } from '../pages/auth/hhLogIn';
import { LogIn } from '../pages/auth/logIn';
import { MailSignUp } from '../pages/auth/mailSignUp';
import { TextEditor } from '../pages/TextEditor';

import s from './App.module.scss';

import KanbanBoard from 'components/kanban/KanbanBoard';

export const App = (): JSX.Element => {
  return (
    <div className={s.body}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="*" element={<Navigate to="/log-in" replace={true} />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/hh-log-in" element={<HhLogIn />} />
          <Route path="/sign-up" element={<MailSignUp />} />
          <Route path="/kanban" element={<KanbanBoard />} />
        </Route>

        <Route path="/editor" element={<TextEditor />} />
      </Routes>
    </div>
  );
};
