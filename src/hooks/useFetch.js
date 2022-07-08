import {useEffect, useState} from "react"

export const useFetch = ( url ) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(result => result.json())
      .then(characters => {
        setData(characters)
        setLoading(false)
        setError(false)
      })
      .catch( err => {
        setError(err)
        setData(null)
        setLoading(false)
      })
  }, [url])

  return [ data, loading, error ];

}

