// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Register = lazy(() => import(/* webpackChunkName: "Register" */ './Register'));
export const Lesson1 = lazy(() => import(/* webpackChunkName: "Lesson1" */ './Lesson1'));
export const Lesson2 = lazy(() => import(/* webpackChunkName: "Lesson2" */ './Lesson2'));
export const Lesson3 = lazy(() => import(/* webpackChunkName: "Lesson3" */ './Lesson3'));
export const Lesson4 = lazy(() => import(/* webpackChunkName: "Lesson4" */ './Lesson4'));
export const Lesson5 = lazy(() => import(/* webpackChunkName: "Lesson5" */ './Lesson5'));
export const Lesson6 = lazy(() => import(/* webpackChunkName: "Lesson6" */ './Lesson6'));
