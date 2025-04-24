import { useEffect, useState } from "react"

function UseFetch<T>(url : string){
    const [data, setData] = useState<T>([] as T);
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태
    console.log(data);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data)
            setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }, [url])

    return {data , isLoading};
}

export default UseFetch;