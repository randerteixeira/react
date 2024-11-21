import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// Definimos uma constante para a chave que será usada no localStorage para armazenar o tema.
const STORAGE_KEY = 'themeContextKey';

// Criamos o tipo `ThemeContext` para definir o formato do contexto do tema.
type ThemeContext = {
    theme: string; // O tema atual, representado como uma string.
    setTheme: (newTheme: string) => void; // Função para atualizar o tema.
}

// Criamos o contexto com um valor inicial `null`.
// Isso significa que o contexto pode inicialmente não estar definido até que seja fornecido por um provedor.
export const ThemeContext = createContext<ThemeContext | null>(null);

// Criamos o componente `ThemeProvider` para envolver os componentes filhos e fornecer o contexto do tema.
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // Usamos o `useState` para gerenciar o estado do tema.
    // O valor inicial é obtido do `localStorage`, ou é definido como 'ligth' (aparentemente 'light' está escrito incorretamente).
    const [theme, setTheme] = useState(
        localStorage.getItem(STORAGE_KEY) || 'ligth' // Busca o tema no localStorage, ou usa 'ligth' como padrão.
    );

    // Usamos o `useEffect` para atualizar o `localStorage` sempre que o estado `theme` for alterado.
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme); // Atualiza o tema no localStorage.
    }, [theme]); // Esse efeito depende do valor de `theme`.

    // Retornamos o provedor do contexto, fornecendo o estado do tema e a função para alterá-lo.
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children} {/* Renderizamos os componentes filhos que serão envolvidos pelo provedor. */}
        </ThemeContext.Provider>
    );
}

// Criamos um hook customizado `useTheme` para facilitar o acesso ao contexto do tema.
// Isso elimina a necessidade de chamar `useContext` diretamente nos componentes.
export const useTheme = () => useContext(ThemeContext);
