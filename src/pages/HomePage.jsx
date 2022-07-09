
import {CharacterCard} from "../components/CharacterCard";
import {useForm} from "../hooks/useForm";

export const HomePage = () => {

  const { handleChange, handleInput, data, error, loading } = useForm('');

  return (
    <div>
      <div className="">
        <p className="w-[400px] text-center py-5 my-10 m-auto ">
          <span className="font-kdam text-7xl w-[20px]  ">
            Breaking Bad
          </span>
        </p>
      </div>
      <div className="basis-full text-center">
        <input
          type='text'
          placeholder="Buscar"
          className="h-12 w-[70%] px-6 border-4 border-breaking-200 rounded-full focus:outline-none font-kdam"
          name='character'
          autoComplete="off"
          onChange={ handleChange }
          onKeyDown={ handleInput }
        />
      </div>
      <div className="container mx-auto">
        {
          loading
            ? <p className="bg-slate-200 h-12 px-4 my-4 flex items-center border border-slate-400 rounded">Cargando...</p>
            : !error && 
              ( 
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 my-4">
                  {
                    data.map( (character, index) => <CharacterCard key={index} character={character} /> )
                  }
                </div> 
              )
        }
      </div>
    </div>
  );
}

