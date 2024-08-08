import React from 'react';
import ReqProprty from './ReqProprty';

const RequestedProperty = () => {
  return (
    <>
      <ReqProprty propertyStatus="approved" />
      <ReqProprty propertyStatus="approved" />
      <ReqProprty propertyStatus="rejected" />
      <ReqProprty propertyStatus="pending" />
    </>
  );
};

export default RequestedProperty;
