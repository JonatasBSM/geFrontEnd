import {useCookie, useFetch, type UseFetchOptions} from "#app";

export function useApi<T>(path: string, options:UseFetchOptions<T> = {}) {

  let headers: any = {};

  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
  }

  return useFetch('http://localhost:8000' + path, {
    credentials: 'include',
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    },
  });
}

export function useGet<T>(path: string, options:UseFetchOptions<T> = {}) {
  return useApi(path, {
    method: 'GET',
    ...options,
  });
}

export async function usePost<T>(path: string, options:UseFetchOptions<T> = {}, toast:boolean = false) {
  const response = await useApi(path, {
    method: 'POST',
    ...options,
  });

  if(toast) {
    const toast = useToast();

    if(response.error.value) {
      toast.add({
        title: 'Erro',
        description: 'Falha ao criar registro.',
      });

    }

    toast.add({
        title: 'Sucesso',
        description: 'Registro criado com sucesso.',
        type: 'success',
        });
  }

    return response;
}

export async function usePut<T>(path: string, options:UseFetchOptions<T> = {}, toast:boolean = false) {
  const response = await useApi(path, {
    method: 'PUT',
    ...options,
  });

    if(toast) {
        const toast = useToast();

        if(response.error.value) {
        toast.add({
            title: 'Erro',
            description: 'Falha ao atualizar registro.',
        });

        }

        toast.add({
            title: 'Sucesso',
            description: 'Registro atualizado com sucesso.',
            type: 'success',
            });
    }

        return response;
}

export async function useDelete<T>(path: string, options:UseFetchOptions<T> = {}, toast:boolean = false) {
  const response = await useApi(path, {
    method: 'DELETE',
    ...options,
  });

  if(toast) {

      const toast = useToast();

      if(response.error.value) {
        toast.add({
          title: 'Erro',
          description: 'Falha ao deletar registro.',
        });

      }

      toast.add({
          title: 'Sucesso',
          description: 'Registro deletado com sucesso.',
          type: 'success',
          });
    }

    return response;
}

export function usePatch<T>(path: string, options:UseFetchOptions<T> = {}) {
  return useApi(path, {
    method: 'PATCH',
    ...options,
  });
}
