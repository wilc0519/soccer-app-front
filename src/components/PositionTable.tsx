import React, { useEffect, useState } from 'react';
import Position from '../interfaces/position';


const PositionTable = () => {
    const [positions, setPositions] = useState<Position[]>([])


    useEffect(() => {
        const getData = async () => {
            const res = await fetch('http://localhost:5000/matches/position', {mode:'cors'});
            const data:[] = await res.json();
            setPositions([...data])
        }
        getData()
    },[])

    console.log(positions)

    
    return (
        <div className='container-left mt-5 mb-5'>
            <table className="table table-striped table-hover mt-4 mb-4 shadow-lg">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Point</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PP</th>
                        <th>PE</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>GD</th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map((position) => {
                        return(
                            <tr key={position.team}>
                                <td>{position.team}</td>
                                <td>{position.points}</td>
                                <td>{position.matchesPlayed}</td>
                                <td>{position.wonMatches}</td>
                                <td>{position.lostMatches}</td>
                                <td>{position.tiedMatches}</td>
                                <td>{position.golsScored}</td>
                                <td>{position.golsRecived}</td>
                                <td>{position.goalDiference}</td>

                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
            
            
        </div>
    );
};

export default PositionTable;