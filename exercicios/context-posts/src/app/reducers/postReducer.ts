import { Post } from "../types/Post"; // Importa o tipo `Post` que define a estrutura de um post.

// Define o tipo para a ação "add" (adicionar post).
type AddAction = {
    type: 'add'; // Ação de tipo "add".
    payload: { 
        title: string; // Título do novo post.
        body: string;  // Conteúdo do novo post.
    }
}

// Define o tipo para a ação "remove" (remover post).
type RemoveAction = {
    type: 'remove'; // Ação de tipo "remove".
    payload: { 
        id: number; // ID do post a ser removido.
    }
}

// União dos dois tipos de ações, permitindo que o reducer lide com ambos.
type PostActions = AddAction | RemoveAction;

// Função reducer que recebe o estado atual (`posts`) e uma ação (`action`).
export const postReducer = (posts: Post[], action: PostActions) => {
    // Avalia o tipo da ação usando um `switch`.
    switch (action.type) {
        // Caso "add", retorna um novo array de posts com o novo post adicionado.
        case 'add': 
            return [
                ...posts, // Mantém os posts existentes.
                {
                    id: posts.length, // Define o ID do novo post como o próximo índice.
                    title: action.payload.title, // Adiciona o título do payload.
                    body: action.payload.body // Adiciona o conteúdo do payload.
                }
            ];

        // Caso "remove", retorna um array filtrado, excluindo o post com o ID especificado.
        case "remove": 
            return posts.filter(p => p.id !== action.payload.id);

        // Caso o tipo da ação não seja reconhecido, retorna o estado atual sem modificações.
        default:
            return posts;
    }
}
/**
 * Explicação:
Tipos das Ações (AddAction e RemoveAction):

Cada ação descreve uma modificação possível no estado dos posts.
AddAction contém os dados necessários para criar um novo post.
RemoveAction contém o ID do post que será removido.
Unificação das Ações (PostActions):

A união (|) permite que o reducer reconheça e processe diferentes tipos de ações.
postReducer:

É uma função pura que recebe o estado atual (posts) e uma ação (action), retornando um novo estado.
Lógica de Adicionar (case 'add'):

Usa o operador spread (...posts) para copiar os posts existentes.
Adiciona um novo objeto Post com as informações fornecidas na ação e define o ID como o próximo índice.
Lógica de Remover (case 'remove'):

Usa o método filter para criar um novo array, excluindo o post com o ID fornecido.
Padrão (default):

Se a ação não for reconhecida, o estado atual é retornado inalterado, garantindo que não haja quebras inesperadas.
Observações:
IDs dos posts: Atualmente, o ID dos posts é baseado no comprimento do array. Isso pode gerar problemas se você remover um post, pois o comprimento pode não refletir o próximo ID único. Uma alternativa seria usar um identificador único (ex.: Date.now() ou bibliotecas como uuid).
break após default: Não é necessário, pois o return já encerra a execução da função. Você pode removê-lo.
 */