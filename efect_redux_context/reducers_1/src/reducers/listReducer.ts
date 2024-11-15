import { Item } from "@/types/Item";

// Tipos de ações que o reducer pode executar

// Ação para adicionar um novo item
type AddAction = {
    type: 'add'; // Define o tipo de ação como 'add'
    payload: {
        text: string // Ação contém o texto do novo item
    };
}

// Ação para editar o texto de um item existente
type EditAction = {
    type: 'editText'; // Define o tipo de ação como 'editText'
    payload: {
        id: number; // O ID do item a ser editado
        newText: string; // O novo texto a ser definido
    };
}

// Ação para alternar o estado de "feito" (done) de um item
type ToogleDoneAction = {
    type: 'toogleDone'; // Define o tipo de ação como 'toogleDone'
    payload: {
        id: number; // O ID do item cujo status será alterado
    };
}

// Ação para remover um item da lista
type RemoveAction = {
    type: 'remove'; // Define o tipo de ação como 'remove'
    payload: {
        id: number; // O ID do item a ser removido
    };
}

// Tipo genérico que une todas as ações possíveis em uma única definição
type ListActions = AddAction | EditAction | ToogleDoneAction | RemoveAction;

// Função reducer que recebe a lista e uma ação e retorna a nova lista
export const listReducer = (list: Item[], action: ListActions) => {
    // Switch para tratar os diferentes tipos de ação
    switch(action.type){
        
        // Caso 'add': adiciona um novo item à lista
        case "add":
            return [
                ...list, // Retorna uma nova lista com todos os itens existentes
                {
                    id: list.length, // O ID é o comprimento atual da lista
                    text: action.payload.text, // O texto é passado via payload
                    done: false // O estado inicial de 'done' é sempre falso
                }
            ];

        // Caso 'editText': edita o texto de um item específico
        case "editText":
            return list.map((t) => { // Mapeia a lista
                if (t.id === action.payload.id) { // Verifica se o item corresponde ao ID
                    t.text = action.payload.newText; // Atualiza o texto
                }
                return t; // Retorna o item (seja alterado ou não)
            });

        // Caso 'toogleDone': alterna o estado de 'done' de um item específico
        case "toogleDone":
            return list.map((t) => { // Mapeia a lista
              if (t.id === action.payload.id) { // Verifica se o item corresponde ao ID
                // Retorna uma cópia do item com 'done' alternado
                return { ...t, done: !t.done };
              }
              return t; // Retorna o item não modificado se não for o correspondente
            });

        // Caso 'remove': remove o item da lista com base no ID
        case "remove":
            return list.filter(t => t.id !== action.payload.id); // Filtra os itens que não correspondem ao ID
        
        // Caso default: se a ação não corresponder a nenhuma, retorna a lista sem alterações
        default:
            return list;
    }

    // Retorna a lista final (caso não tenha passado por nenhuma ação)
    return list;
}
