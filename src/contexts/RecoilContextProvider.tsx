'use client';
import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilContextProviderProps {
  children: ReactNode;
}
const RecoilContextProvider = ({ children }: RecoilContextProviderProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default RecoilContextProvider;
