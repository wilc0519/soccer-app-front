import { useEffect, useState } from 'react';
import Position from '../interfaces/position';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const PositionTableMiu = () => {
    const posicion:number = 0
    const classes = useStyles();
    const [positions, setPositions] = useState<Position[]>([])

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('http://localhost:5000/matches/position', { mode: 'cors' });
            const data: [] = await res.json();
            setPositions([...data])
        }
        getData()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell >Team</TableCell>
                        <TableCell align="right">Points</TableCell>
                        <TableCell align="right">PJ</TableCell>
                        <TableCell align="right">PG</TableCell>
                        <TableCell align="right">PP</TableCell>
                        <TableCell align="right">PE</TableCell>
                        <TableCell align="right">GF</TableCell>
                        <TableCell align="right">GC</TableCell>
                        <TableCell align="right">GD</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {positions.map((position) => (
                        <TableRow key={position.team}>
                            <TableCell component="th" scope="row">
                                {position.team}
                            </TableCell>
                            <TableCell align="right">{position.points}</TableCell>
                            <TableCell align='right'>{position.matchesPlayed}</TableCell>
                            <TableCell align="right">{position.wonMatches}</TableCell>
                            <TableCell align="right">{position.lostMatches}</TableCell>
                            <TableCell align="right">{position.tiedMatches}</TableCell>
                            <TableCell align='right'>{position.golsScored}</TableCell>
                            <TableCell align='right'>{position.golsRecived}</TableCell>
                            <TableCell align='right'>{position.goalDiference}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );



};

export default PositionTableMiu;