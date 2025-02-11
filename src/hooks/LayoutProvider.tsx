import React, { createContext, useContext, useState, ReactNode } from "react";

interface LayoutContextProps {
  theme: string;
  setTheme: (theme: string) => void;
  menuSelected: string;
  setMenuSelected: (menu: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("light");
  const [menuSelected, setMenuSelected] = useState<string>("1");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        theme,
        setTheme,
        menuSelected,
        setMenuSelected,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = (): LayoutContextProps => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
