import { createContext, ReactNode, useEffect, useReducer } from "react";
import { postReducer } from "../reducers/postReducer"; // Importa o reducer responsável por gerenciar a lógica de manipulação dos posts.
import { Post } from "../types/Post"; // Importa o tipo que define a estrutura de um Post.
const STORAGE_KEY = 'postContextContent'; // Chave utilizada para salvar os posts no localStorage.

// Define o formato do contexto, especificando os dados e funções que ele vai expor.
type PostContextType = {
    posts: Post[]; // Lista de posts.
    addPost: (title: string, body: string) => void; // Função para adicionar um post.
    removePost: (id: number) => void; // Função para remover um post.
}

// Cria o contexto com um valor inicial de `null`.
export const PostContext = createContext<PostContextType | null>(null);

// Componente que vai fornecer o contexto para seus filhos.
export const PostProvider = ({ children }: { children: ReactNode }) => {
    // useReducer gerencia o estado dos posts utilizando o reducer `postReducer`.
    // O estado inicial é obtido do localStorage. Se não houver nada salvo, será um array vazio.
    const [posts, dispatch] = useReducer(
        postReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') // Recupera os posts salvos no localStorage.
    );

    // Função para adicionar um post. Chama o dispatch para disparar a ação "add".
    const addPost = (title: string, body: string) => {
        dispatch({
            type: 'add',
            payload: {
                title,
                body
            }
        });
    }

    // Função para remover um post. Chama o dispatch para disparar a ação "remove".
    const removePost = (id: number) => {
        dispatch({
            type: 'remove',
            payload: { id }
        });
    }

    // useEffect sincroniza o estado dos posts com o localStorage toda vez que o estado mudar.
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }, [posts]);

    // Retorna o provider que envolve os filhos do componente e fornece o valor do contexto.
    return (
        <PostContext.Provider value={{ posts, addPost, removePost }}>
            {children}
        </PostContext.Provider>
    );
}
/**
 * Explicação geral:
createContext e PostContext:

O contexto (PostContext) permite que os dados dos posts e as funções (addPost e removePost) sejam acessadas de
qualquer lugar dentro da árvore de componentes que usam o PostProvider.
useReducer com postReducer:

postReducer é uma função separada (não fornecida no código) que implementa a lógica para adicionar ou remover posts no estado.
useReducer é ideal para gerenciar estados complexos ou que envolvam várias ações, como adicionar ou remover itens.
LocalStorage:

O estado inicial dos posts é carregado do localStorage. Isso permite persistência entre as recargas da página.
O useEffect garante que qualquer atualização no estado dos posts também seja salva no localStorage.
Funções addPost e removePost:

Essas funções encapsulam as ações de dispatch e tornam o uso do contexto mais amigável para os componentes consumidores.
Provider:

O PostProvider envolve os componentes filhos e fornece o valor do contexto, que inclui o estado atual dos posts e as funções para manipulá-los.
Observação:
Certifique-se de que o postReducer esteja implementado corretamente para que as ações como add e remove sejam tratadas conforme esperado.
 * 
 */