import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';

const GenreList = () => { 
    const {data} = useGenres();
  return (
    <ul>
        {data.map((genre: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList