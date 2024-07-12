
import { Button, Fab, IconButton, InputBase } from "@mui/material"
import { Card } from "../../components"

import AddIcon from '@mui/icons-material/Add';

import { BiAlignMiddle } from "react-icons/bi";
// import register from "../../assets/register.svg"

import "./register.style.css"

export const RegisterPage = () => {
    return (
        <div className="container-register">
            <Card>
                <>
                    <div className="top-container">
                        <div className="financialEntryAddition">
                            <Button className="addEntryButton">
                                <Fab className="fabAddEntryButton">
                                    <AddIcon />
                                </Fab>
                            </Button>
                        </div>
                        <div className="searchBarRegister">

                            <IconButton>
                                <BiAlignMiddle />
                            </IconButton>
                            <InputBase
                                placeholder="Pesquise"
                            />

                        </div>

                    </div>

                    {/* <div className="img">
                        <img src={register} alt="Pagina de Lançamentos"></img>
                    </div> */}
                </>
            </Card>
        </div>

    )
}