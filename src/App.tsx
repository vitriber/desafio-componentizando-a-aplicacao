import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';



export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export const [selectedGenreId, setSelectedGenreId] = useState(1);
export const [genres, setGenres] = useState<GenreResponseProps[]>([]);
export const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
export const [movies, setMovies] = useState<MovieProps[]>([]);

export function App() {

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar/>
      <Content/>
    </div>
  )
}