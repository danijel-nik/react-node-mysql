import { useState, useEffect } from "react"
import axios from 'axios'
import { Grid, TextField, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, IconButton } from "@material-ui/core"
import { withStyles, makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
  

const Home = () => {

    const classes = useStyles()

    const [name, setName] = useState("")
    const [search, setSearch] = useState("")

    const [dataRows, setDataRows] = useState([])

    useEffect(() => {
        try {
            let { data } = axios.get("/getAll")
            if (data) {
                setDataRows(data)
            }
        } catch (error) {
            console.error(error)
        }
    }, [])

    const addName = () => {
        console.log("Adding the name")
    }

    
    return (
        <>
            <Grid container className="toolbar">
                <Grid md={5} container>
                    <Grid md={10}>
                        <TextField label="Add Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                    </Grid>
                    <Grid md={2}>
                        <Button variant="contained" fullWidth className="btn" onClick={addName}>Add</Button>
                    </Grid>
                </Grid>

                <Grid md={2}></Grid>

                <Grid md={5} container>
                    <Grid md={10}>
                        <TextField label="Search by Name" variant="outlined" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Grid>
                    <Grid md={2}>
                        <Button variant="contained" fullWidth className="btn">Search</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <TableContainer fullWidth>
                    <Table className={classes.table}>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell width={50}>ID</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell width={150}>Date Added</StyledTableCell>
                                <StyledTableCell width={50}>Edit</StyledTableCell>
                                <StyledTableCell width={50}>Delete</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>

                        <TableBody>
                            {/* Goes to Loop */}
                            <StyledTableRow hover>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <IconButton><EditIcon /></IconButton>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <IconButton color="secondary"><DeleteIcon /></IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    )
}

export default Home