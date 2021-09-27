import axios, { Canceler, AxiosResponse, AxiosError, AxiosInstance } from 'axios';

export type ServiceObject<R> = [Promise<R>, Canceler | null];

export const Send = <M, R>(client: AxiosInstance, data: { url: string; body: any; method: 'post' | 'put'; options?: { onProgress?: (progress: number) => void; timeout?: number}}) => {
    const { url, body, method, options } = data;
    let requestCanceler: Canceler | undefined;

    const request = new Promise<R>((resolve, reject) => {
        client[method]<M, AxiosResponse<R>>(url, body, {
            cancelToken: new axios.CancelToken((c) => requestCanceler = c),
            onUploadProgress: (e: { type: "progress" | ""; total: number; loaded: number}) => {
                if(e.type == "progress") {
                    const percentage = Math.round((e.loaded / e.total) * 100);
                    options?.onProgress && options.onProgress(percentage);
                }
            },
            timeout: options?.timeout || 45000
        })
            .then((resp) => {
                resolve(resp.data);
            })
            .catch((axiosError: AxiosError) => {
                reject(axiosError);
            });
    });

    
    return [request, requestCanceler] as ServiceObject<R>;

};

export const Post = <M, R>(client: AxiosInstance, url: string, body: M, options?: { onProgress?: (progress: number) => void; timeout?: number}): ServiceObject<R> => {
    return Send<M, R>(client, { body, method: 'post', url, options });
};


export const Get = <R>(client: AxiosInstance, url: string = '', query?: { [key: string]: any }): ServiceObject<R> => {
    let requestCanceler: Canceler | null = null;

    // Pegar a query String
    const request = new Promise<R>((resolve, reject) => {
        // Realizar requisição HTTP
        client.get(url, { params: query, cancelToken: new axios.CancelToken((c) => requestCanceler = c) })
            .then((resp: AxiosResponse<R>) => {
                resolve(resp.data);
            })
            .catch((axiosError: AxiosError) => {
                reject(axiosError);
            });
    });

    return [request, requestCanceler];
};