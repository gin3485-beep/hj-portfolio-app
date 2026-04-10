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
        <DialogContent showCloseButton={false} className="w-fit max-w-[95vw] sm:max-w-[90vw] p-0 bg-transparent border-none text-foreground">
          <DialogTitle className="sr-only">Popup View</DialogTitle>
          <div className="relative w-full text-7xl min-h-[30vh] max-h-[85vh] min-w-[70vw] sm:min-w-[40vw] flex justify-center bg-background/95 backdrop-blur-xl rounded-[10px] border border-primary/30 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary/80 transition-all">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-[60] w-6 h-6 sm:w-7 sm:h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-primary text-white border border-primary/50 shadow-lg shadow-primary/40 hover:bg-primary/90 transition-all"
              aria-label="닫기"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className="my-auto w-fit p-4">
              {content}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PopupContext.Provider>
  );
}
