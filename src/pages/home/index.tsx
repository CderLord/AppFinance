import { Button } from "@mui/material"
import { Card } from "../../components"
import "./home.style.css"
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


export const HomePage = () => {
    return (

        <div className="container-home">

            <Card>
                <>
                    <div className="card-home-content-left">
                        <div>
                            <p>Boa Noite,</p>
                            <p className="card-home-user-name-text">André Tiago</p>
                        </div>
                        <Card>
                            <div className="card-home-month-finances">
                                <p >receita mensal:</p>
                                <h3 className="title-green">R$0,00</h3>
                            </div>
                        </Card>
                        <Card>
                            <div className="card-home-month-finances">
                                <p>dispesas mensal:</p>
                                <h3 className="title-red">R$0,00</h3>
                            </div>
                        </Card>
                        <Button className="graph-button-home">
                            <AutoGraphIcon />
                            Relatórios
                        </Button>

                        <div className="card-home-content-rigth">
                            <h3>Acesso Rápido</h3>
                            <div className="home-buttons-rigth">
                                <Button className="button-expenses">
                                    <div className="button-add">
                                        <ControlPointIcon/>
                                        <span>Despesas</span>
                                    </div>
                                </Button>




                            </div>

                        </div>
                    </div>

                </>
            </Card>
            <div className="card-home-final-balance">
                <Card>
                    <div>
                        <p>saldo</p>
                    </div>
                </Card>
            </div>
        </div>



    )
}