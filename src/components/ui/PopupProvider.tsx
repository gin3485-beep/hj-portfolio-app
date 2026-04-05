'use client';

import React, { createContext, useContext, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface PopupContextType {
  openPopup: (content: React.ReactNode) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error('usePopup must be used within PopupProvider');
  return ctx;
};

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openPopup = (newContent: React.ReactNode) => {
    setContent(newContent);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[500px] w-[88vw] p-0 bg-transparent border-none shadow-none text-white [&>button]:text-white [&>button]:bg-purple-600 [&>button]:hover:bg-purple-500 [&>button]:border [&>button]:border-purple-400 [&>button]:rounded-full [&>button]:p-1.5 [&>button]:opacity-100 [&>button]:focus:ring-0 [&>button]:-right-2 [&>button]:-top-2">
          <DialogTitle className="sr-only">Popup View</DialogTitle>
          <div className="w-full flex items-center justify-center text-7xl min-h-[30vh] bg-[#1a0b33]/80 backdrop-blur-xl rounded-2xl border border-purple-500/30 overflow-hidden shadow-[0_0_50px_rgba(126,34,206,0.3)]">
            {content}
          </div>
        </DialogContent>
      </Dialog>
    </PopupContext.Provider>
  );
}
