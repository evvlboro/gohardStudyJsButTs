// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Register = lazy(() => import(/* webpackChunkName: "Register" */ './Register'));
export const Lesson1 = lazy(() => import(/* webpackChunkName: "Lesson1" */ './Lesson1'));
export const Lesson2 = lazy(() => import(/* webpackChunkName: "Lesson2" */ './Lesson2'));
