import {useState} from "react"
import {useFetch} from "./useFetch"

export const useForm = (initialValue) => {

  const [value, setValue] = useState(initialValue)
  const [url, setUrl] = useState()
  const [data, loading, error] = useFetch(url) 

  const handleChange = ({target}) => {
    setValue({
      ...value,
      [target.name]: target.value
    })
  }

  const handleInput = (e) => {
    if(e.key == 'Enter'){
      let name = value.replace(/ /g, '%20')
      setUrl(`https://www.breakingbadapi.com/api/characters?name=${name}`)
    }
  }

  return {
    value,
    handleChange,
    handleInput,
    data,
    loading,
    error,
  }

}

