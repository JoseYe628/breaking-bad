
import { useParams } from 'react-router-dom'
import {useFetch} from '../hooks/useFetch';

export const CharacterInfoPage = () => {

  const { id } = useParams();
  const [ data, loading, error ] = useFetch(`https://www.breakingbadapi.com/api/characters/${id}`)

  return (
    <div className='grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 container w-[500px] md:w-[800px] m-10 md:mx-auto my-10 p-10 border border-breaking-400 rounded-xl'>
      {
        loading
          ? <p>loading...</p>
          : error 
            ? <p>Ocurrió un error</p>
            : (
                <>
                  <div className='h-80'>
                    <img className='h-full rounded' src={ data[0].img }/>
                  </div>
                  <div className=''>
                    <p className='text-4xl my-4'>{ data[0].name }</p>
                    <p className='my-2 '><div className='inline font-bold'>Birthday:</div> { data[0].birthday }</p>
                    <p className='my-2 '><div className='inline font-bold'>Category:</div> { data[0].category[0] }</p>
                    <p className='my-2 '><div className='inline font-bold'>Alias:</div> { data[0].nickname }</p>
                    <p className='my-2 '><div className='inline font-bold'>Status:</div> { data[0].status }</p>
                    <p className='my-2 '><div className='inline font-bold'>Occupation:</div></p>
                    <ul>
                      {
                        data[0].occupation.map( (occupation, index) => <li className='list-disc relative left-6' key={index}>{occupation}</li> )
                      }
                    </ul>
                  </div>
                </>
              )
      }
    </div>
  );
}

