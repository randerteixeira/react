import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
       // cacheTime: 1000 * 60 * 10, // 10 minutos //Tempo, em milissegundos, que os dados de uma query permanecem no cache antes de serem descartados.
        staleTime: 1000 * 60 * 1, // 1 minuto    //Tempo, em milissegundos, durante o qual os dados são considerados "frescos" e não precisam ser refetchados.
        retry: 2, //Descrição: Número de vezes que uma query deve ser reexecutada após uma falha.// Tenta novamente 2 vezes em caso de erro
        //retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),// Tempo de espera entre tentativas de refetch, em milissegundos.
        //refetchOnWindowFocus: true, //Determina se a query será refetchada ao recapturar o foco da janela do navegador.
        //refetchOnReconnect: true, // Determina se a query será refetchada quando a conexão de rede for restaurada.
        //refetchInterval: false, //Intervalo em milissegundos para refetchar automaticamente uma query.
        //enabled: true, //Determina se a query deve ser executada automaticamente ao ser montada.
        //keepPreviousData: true, // Dados iniciais usados antes do primeiro fetch.
        //initialData: { id: 1, name: 'John Doe' },// Dados iniciais usados antes do primeiro fetch.
        //placeholderData: { id: 0, name: 'Loading...' },// Dados "provisórios" exibidos enquanto a query é carregada pela primeira vez.
        //onSuccess: (data) => console.log('Carregado com sucesso:', data),// Callback executado quando a query é bem-sucedida.
        //onError: (error) => console.error('Erro na query:', error),//Callback executado quando a query falha.

      },
    },
  });