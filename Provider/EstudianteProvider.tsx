import React, { createContext, useContext, useEffect, useState } from 'react';

type Estudiante = {
  id: string;
  name: string;
};

type ContextType = {
  estudiantes: Estudiante[];
  setEstudiantes: React.Dispatch<React.SetStateAction<Estudiante[]>>;
};

const EstudianteContext = createContext<ContextType>({
  estudiantes: [],
  setEstudiantes: () => {},
});

export const EstudianteProvider = ({ children }: { children: React.ReactNode }) => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);

  useEffect(() => {
    const datosIniciales: Estudiante[] = [
      { id: '1', name: 'Juan' },
      { id: '2', name: 'María' },
      { id: '3', name: 'Carlos' },
      { id: '4', name: 'Sara' },
      { id: '5', name: 'Javier' },
      { id: '6', name: 'Zofia' },
      { id: '7', name: 'Alverto' },
      { id: '8', name: 'Marelyn' },
      { id: '9', name: 'Dalsin' },
      { id: '10', name: 'Carmen' },
    ];

    setEstudiantes(datosIniciales);

    const timer = setTimeout(() => {
      const nuevoEstudiante = { id: '11', name: 'Estudiante Nuevo' };
      setEstudiantes((prev) => [...prev, nuevoEstudiante]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <EstudianteContext.Provider value={{ estudiantes, setEstudiantes }}>
      {children}
    </EstudianteContext.Provider>
  );
};

export const useEstudianteContext = () => useContext(EstudianteContext);

