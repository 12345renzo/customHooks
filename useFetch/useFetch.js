import { useEffect } from "react";
import { useState } from "react";

const localCache = {};

export function useFetch(url){

    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch(url);
    },[url]);

    const setLoading = () => {
        setState({
            data: null,
            loading: true,
            hasError: false,
            error: null
        });
    }

    const getFetch = async (url) => {

        if(localCache[url]){
            setState({
                data:localCache[url],
                loading : false,
                hasError : false,
                error : null
            });
            return;
        }

        setLoading();

        const res = await fetch(url);

        if(!res.ok){
            setState({
                data: null,
                loading: false,
                hasError: true,
                error: {
                    code: res.status,
                    message: res.statusText
                }
            });
            return;
        }
        const data = await res.json();     
        setState({
            data,
            loading: false,
            hasError: false,
            error: null
        });   

        //manejo de cache
        localCache[url] = data;
    };

    return {
        data: state.data,
        loading: state.loading,
        hasError: state.hasError,
        error: state.error
    };
  
}
