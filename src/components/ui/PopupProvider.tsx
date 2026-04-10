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
        <DialogContent className="w-fit max-w-[95vw] md:max-w-[90vw] p-0 bg-transparent border-none text-foreground [&>button]:text-white [&>button]:bg-primary [&>button]:hover:bg-primary/90 [&>button]:border [&>button]:border-primary/50 [&>button]:rounded-full [&>button]:p-2.5 [&>button]:opacity-100 [&>button]:focus:ring-0 [&>button]:right-4 [&>button]:top-4 [&>button]:z-[60] [&>button]:shadow-lg [&>button]:shadow-primary/40 [&>button_svg]:w-6 [&>button_svg]:h-6">
          <DialogTitle className="sr-only">Popup View</DialogTitle>
          <div className="w-full text-7xl min-h-[30vh] max-h-[85vh] min-w-[70vw] md:min-w-[40vw] flex justify-center bg-background/95 backdrop-blur-xl rounded-[10px] border border-primary/30 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary/80 transition-all">
            <div className="my-auto w-fit p-4">
              {content}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PopupContext.Provider>
  );
}
