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

export async function useGet<T>(path: string, options:UseFetchOptions<T> = {}) {
  const response = await useApi(path, {
    method: 'GET',
    ...options,
  });

  if(response.error.value) {
    const toast = useToast();
    toast.add({
      title: 'Erro',
      description: 'Falha ao buscar registros.',
      icon:'i-heroicons-x-circle',
      color:'red'
    });
  }

    return response;
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
        icon:'i-heroicons-x-circle',
        color:'red'
      });

    }

    toast.add({
          title: 'Sucesso',
          description: 'Registro criado com sucesso.',
          type: 'success',
          icon:'i-heroicons-check-circle'
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
            icon:'i-heroicons-x-circle',
            color:'red'
        });

        }

        toast.add({
              title: 'Sucesso',
              description: 'Registro atualizado com sucesso.',
              icon:'i-heroicons-check-circle'
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
          icon:'i-heroicons-x-circle',
          color:'red'
        });

      }

      toast.add({
            title: 'Sucesso',
            description: 'Registro deletado com sucesso.',
            type: 'success',
            icon:'i-heroicons-check-circle'
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
