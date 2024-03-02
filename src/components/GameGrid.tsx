import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GamesCard from './GamesCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    const {data, error, isLoading} = useGames();
    const Skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={ { sm: 1,md: 2,lg: 3,xl: 5 }}  padding={10} spacing={3}>
        {isLoading && Skeletons.map(Skeletons =><GameCardContainer> <GameCardSkeleton key={Skeletons}/></GameCardContainer>)}
        {data.map(game => (
          <GameCardContainer><GamesCard key={game.id} game={game} /></GameCardContainer>
        ) )}

    </SimpleGrid>
    </>
  )
}

export default GameGrid