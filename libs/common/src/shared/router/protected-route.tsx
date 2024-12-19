import React from 'react';
import {Navigate} from 'react-router-dom';

type TProps = {
  element: React.ReactElement;
  condition: boolean;
  replaceRoute: string;
};

export const ProtectedRoute: React.FC<TProps> = ({
  condition,
  element,
  replaceRoute,
}) => {
  return condition ? element : <Navigate to={replaceRoute} replace />;
};
