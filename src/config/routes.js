/* eslint-disable react/jsx-key */
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute'
import CompanyIntro from '../pages/CompanyIntro'
import ContactUs from '../pages/ContactUs'
import FAQ from '../pages/FAQ'
import React, { lazy } from 'react'
import ProductDetail from '../pages/ProductDetail'
import HomePage from '../pages/HomePage/HomePage'
import Product from '../pages/Product'

const Admin = lazy(() => import('../pages/Admin'))
const Companies = lazy(() => import('../pages/Companies'))
const Company = lazy(() => import('../pages/Companies/Company'))
const Tasks = lazy(() => import('../pages/Tasks'))
const Task = lazy(() => import('../pages/Tasks/Task'))
const FirebaseCols = lazy(() => import('../pages/Firebase/Cols'))
const FirebaseDocs = lazy(() => import('../pages/Firebase/Docs'))
const FirebaseLists = lazy(() => import('../pages/Firebase/Lists'))
const FirebaseMessaging = lazy(() => import('../pages/Firebase/Messaging'))
const FirebasePaths = lazy(() => import('../pages/Firebase/Paths'))
const FirebaseStorage = lazy(() => import('../pages/Firebase/Storage'))

const routes = [
  {
    path: '/',
    exact: true,
    element: (
      <HomePage />
    ),
  },
  {
    path: '/product',
    exact: true,
    element: <Product />,
  },
  {
    path: '/product_detail/:pid',
    exact: true,
    element: <ProductDetail />,
  },
  {
    path: '/FAQ',
    exact: true,
    element: (
      <FAQ />
    ),
  },
  {
    path: '/intro',
    exact: true,
    element: (
      <CompanyIntro />
    ),
  },
  {
    path: '/about',
    exact: true,
    element: (
      <CompanyIntro />
    ),
  },
  {
    path: '/contact-us',
    exact: true,
    element: (
      <ContactUs />
    ),
  },
  {
    path: '/firebase_paths',
    exact: true,
    element: (
      <AuthorizedRoute>
        <FirebasePaths />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/firebase_lists',
    exact: true,
    element: (
      <AuthorizedRoute>
        <FirebaseLists />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/firebase_docs',
    exact: true,
    element: (
      <AuthorizedRoute>
        <FirebaseDocs />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/firebase_cols',
    exact: true,
    element: (
      <AuthorizedRoute>
        <FirebaseCols />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/admin',
    exact: true,
    element: (
      <AuthorizedRoute>
        <Admin />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/companies',
    exact: true,
    element: (
      <AuthorizedRoute>
        <Companies />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/companies/:uid',
    exact: true,
    element: (
      <AuthorizedRoute>
        <Company />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/create_company',
    exact: true,
    element: (
      <AuthorizedRoute>
        <Company />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/tasks',
    exact: true,
    element: (
      <AuthorizedRoute>
        <Tasks />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/tasks/:uid',
    exact: true,
    element: (
      <AuthorizedRoute>
        <Task />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/create_task',
    exact: true,
    element: (
      <AuthorizedRoute>
        <Task />
      </AuthorizedRoute>
    ),
  },

  {
    path: '/firebase_messaging',
    exact: true,
    element: (
      <AuthorizedRoute>
        <FirebaseMessaging />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/firebase_storage',
    exact: true,
    element: (
      <AuthorizedRoute>
        <FirebaseStorage />
      </AuthorizedRoute>
    ),
  },
]

export default routes
