import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchCharactersAsync } from '../../features/characters/charactersAsyncActions';
import { selectCharacters } from '../../features/characters/charactersSlice';

export const MainPage = (): React.ReactElement => {

    const dispatch = useAppDispatch();
    const characters = useAppSelector(selectCharacters);

    console.log('characters: ', characters)

    useEffect(() => {
        dispatch(fetchCharactersAsync({page: 1}))
    }, [dispatch])

    return (
        <div>
            This is the main page
        </div>
    )
}