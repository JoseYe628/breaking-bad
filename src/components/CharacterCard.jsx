
import { useNavigate } from 'react-router-dom'

export const CharacterCard = ( {character} ) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${character.char_id}`)
  }

  return (
    <div className="border border-slate-500 rounded shadow-md hover:shadow-xl hover:bg-gray-50">
      <div>
        <img 
          className="object-cover object-top w-full h-60 rounded-t-[3px]"
          src={ character.img }
        />
      </div>
      <div className="p-4" onClick={ handleClick }>
        <p className="text-gray-900 font-bold text-xl cursor-default text-ellipsis">{ character.name }</p>
        <p className="text-sm text-gray-400 mb-2 cursor-default">{ character.birthday }</p>
        <p className="text-gray-700 text-base cursor-default">{ character.occupation[0] }</p>
      </div>
      <div className="w-full flex justify-center">
        <button onClick={handleClick} className="my-4 border border-green-400 py-2 px-6 text-green-600 hover:bg-green-100 rounded active:bg-green-200">
          Ver
        </button>
      </div>
    </div>
  );
}

