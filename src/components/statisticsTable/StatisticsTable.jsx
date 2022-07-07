import React, { useContext } from 'react'
import GeneralContext from '../../context/GeneralContext'

import { statisticsReducer } from './statisticsReducer'

const StatisticsTable = () => {
    const { team } = useContext(GeneralContext)

    const statistics = statisticsReducer(team);

    return <div className='grid grid-rows-2 grid-flow-col gap-2 text-center'>
        <div className='mb-2 px-2 flex flex-col'>
            <span>Hp</span>
            <p>{statistics.hp}</p>
        </div>
        <div className='mb-2 px-2 flex flex-col'>
            <span>Attack</span>
            <p>{statistics.attack}</p>
        </div>
        <div className='mb-2 px-2 flex flex-col'>
            <span>Defense</span>
            <p>{statistics.defense}</p>
        </div>
        <div className='mb-2 px-2 flex flex-col'>
            <span>Special-Attack</span>
            <p>{statistics["special-attack"]}</p>
        </div>
        <div className='mb-2 px-2 flex flex-col'>
            <span>Special-Defense</span>
            <p>{statistics["special-defense"]}</p>
        </div>
        <div className='mb-2 px-2 flex flex-col'>
            <span>Speed</span>
            <p>{statistics.speed}</p>
        </div>
    </div>

}

export default StatisticsTable