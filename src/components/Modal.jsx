import React, { useState } from 'react';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>
        <div className="z-10 bg-gray-800 rounded-lg shadow-lg p-6">{children}</div>
      </div>
    </div>
  );
};