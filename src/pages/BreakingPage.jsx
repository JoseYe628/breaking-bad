import React, {useContext} from 'react'
import {useFetch} from "../hooks/useFetch"
import { CharacterCard } from '../components/CharacterCard'
import {AuthContext} from '../auth/AuthContext'

export const BreakingPage = () => {

  const uri = 'https://www.breakingbadapi.com/api/characters?category=Breaking%20Bad';

  const [data, loading, error] = useFetch(uri);

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-4xl font-kdam mb-8">Breaking Bad</h1>
      {
        loading
          ? <p className="bg-slate-200 h-12 px-4 flex items-center border border-slate-400 rounded">Cargando...</p>
          : error 
            ? <p className="bg-red-200 h-12 px-4 flex items-center border border-red-400 rounded">Error cargando los datos!</p>
            :( 
              <div className="border-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 my-4">
                {
                  data.map( (character, index) => <CharacterCard key={index} character={character} /> )
                }
              </div> 
            )
      }
    </div>
  )
}

