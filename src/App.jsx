import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import authOperations from 'redux/auth/authOperations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spiner from 'components/Spiner';
import authSelectors from 'redux/auth/authSelectors';

const HomeView = lazy(() => import('./views/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const PublicRoute = lazy(() => import('./routes/PublicRoute'));
const PrivateRoute = lazy(() => import('./routes/PrivateRoute'));

export function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? null : (
    <>
      <Suspense
        fallback={
          <Spiner width={250} height={250} color="#0b0fe6" isNeedMargin />
        }
      >
        <AppBar />
        <Routes>
          <Route path="/" exact element={<HomeView />} />
          <Route element={<PublicRoute closed redirectTo="contacts" />}>
            <Route path="/login" element={<LoginView />} />
          </Route>
          <Route element={<PublicRoute closed redirectTo="contacts" />}>
            <Route path="/register" element={<RegisterView />} />
          </Route>
          <Route element={<PrivateRoute redirectTo="login" />}>
            <Route path="contacts" element={<ContactsView />} />
          </Route>
          <Route path="*" element={<HomeView />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2500} />
    </>
  );
}
