import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GamesCard from './GamesCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props{
  gameQuery: GameQuery;
  
}

const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const Skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={ { sm: 1,md: 2,lg: 3,xl: 5 }}  padding={10} spacing={3}>
        {isLoading && Skeletons.map(Skeletons =><GameCardContainer key={Skeletons}> <GameCardSkeleton /></GameCardContainer>)}
        {data.map(game => (
          <GameCardContainer key={game.id}><GamesCard  game={game} /></GameCardContainer>
        ) )}

    </SimpleGrid>
    </>
  )
}

export default GameGrid