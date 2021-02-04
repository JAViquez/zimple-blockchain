import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

const Create = ({ submitData }) => {
    const [data, setData] = useState("")
    
    const saveData = (e) => {
        e.preventDefault()
        const newData = data
        submitData(newData)
        setData("")
    }

    return (
        <Grid item
            xs={12}
            className="card"
            id="addBlockForm">
                <div className="card-header">
                    <h5>
                        Cree sus bloques aquí
                    </h5>
                </div>
                <div className="card-body">
                    <form onSubmit={saveData}>
                        <div className="form-group">
                            <label htmlFor="dataInput">Datos</label>
                            <input type="text" className="form-control" id="dataInput" placeholder="Digite los datos a almacenar" 
                                value={data} 
                                onChange={(e) => setData(e.target.value)}
                                required minLength={1} />
                        </div>
                        <Grid container
                            spacing={4}
                            direction="row"
                            justify="center"
                            alignItems="center">
                                <Grid item>
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </Grid>
                                <Grid item>
                                    <button type="reset" className="btn btn-secondary"
                                        onClick={() => setData("")}>Cancelar</button>
                                </Grid>
                        </Grid>
                    </form>
                </div>
        </Grid>
    )
}

Create.propTypes = {
    submitData: PropTypes.func.isRequired,
}

export default Create
