import * as React from 'react';
import AllFiles from './files'
import PdfViewer from './pdftron';
import { useRoutes } from 'react-router-dom';


const routes = [
    {
        path: '/',
        children: [{element: <AllFiles />, index: true}]
    },
    {
        path: '/pdf/:pdfPath',
        children: [{element: <PdfViewer />, index: true}]
    },

]
const AppRouter = () => {
  const appRoutes = useRoutes(routes);

  return appRoutes;
};

export default AppRouter;

