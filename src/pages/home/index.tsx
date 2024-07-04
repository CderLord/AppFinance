import { Button, Fab, FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { BasicModal, Card } from "../../components"
import "./home.style.css"
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PixIcon from '@mui/icons-material/Pix';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import 'dayjs/locale/en-gb'
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useReducer } from "react";
import { reducer } from "./reducer";
const initialState: { openModal: boolean, modalName: string } = { openModal: false, modalName: "", }

export const HomePage = () => {
    const [state, dispatch] = useReducer(reducer, initialState)



    const [openModal, setopenModal] = useState<boolean>(false);
    const [showTotalValue, setShowTotalValue] = React.useState(false);
    const handleClickShowText = () => setShowTotalValue((show) => !show);
    const handleMouseDownText = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (

        <div className="container-home">
            <div className="container-dashboard-home">
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
                                <div className="title-card-home-content-rigth">

                                    <h3>Acesso Rápido</h3>
                                </div>
                                <div className="home-buttons-rigth">
                                    <Button className="button-register" onClick={() => dispatch({ type: "register" })}>
                                        <div className="button-home-options">
                                            <ControlPointIcon className="icon-add" />
                                            <span>Receita</span>
                                        </div>
                                    </Button>

                                    <Button className="button-expenses" onClick={() => dispatch({ type: "expense" })} >
                                        <div className="button-home-options">
                                            <RemoveCircleOutlineIcon className="icon-subs" />
                                            <span>Despesas</span>
                                        </div>
                                    </Button>
                                </div>

                            </div>
                        </div>

                    </>
                </Card>
            </div>


            <div className="card-home-final-balance">
                <Card>
                    <div className="home-box-total-balance">
                        <FormControl variant="standard">
                            <label htmlFor="box-total-balance">Saldo Geral</label>
                            <Input
                                defaultValue={"0,00"}
                                disabled
                                id="box-total-balance"
                                type={showTotalValue ? 'text' : 'password'}
                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowText}
                                            onMouseDown={handleMouseDownText}
                                        >
                                            {showTotalValue ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </Card>
            </div>


            {/* Modal-Config */}

            <BasicModal onClose={() => dispatch({ type: "closeModal" })}
                open={state?.openModal as boolean}>
                <Card>
                    <div className="budget-modal">
                        <div className="header-modal">
                            <h3>{state?.modalName}</h3>
                        </div>
                        <div className="input-group">
                            <div className="description-input">
                                <TextField
                                    fullWidth
                                    required
                                    label='Descrição'
                                    margin="normal"
                                />
                            </div>
                            <div className="purchase-info-inputs">
                                <div className="currence-input">
                                    <TextField
                                        required
                                        id="currence-input"
                                        label='Valor'
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                        }}
                                        margin="dense"

                                    />
                                </div>

                                <div className="Date-input">
                                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                                        <DemoContainer components={['DatePicker']} >
                                            <DatePicker
                                                label="Data Da Compra"
                                                format="DD-MM-YYYY"
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>
                            </div>

                            <div className="home-payment-method">
                                <FormControl fullWidth margin="dense"  >
                                    <InputLabel className="home-payment-method-input">Forma de Pagamento</InputLabel>
                                    <Select
                                        labelId="home-payment-method-select"
                                        id="home-payment-method-select"
                                        label="Forma de Pagamento"
                                    >
                                        <MenuItem value={''}><CreditCardIcon />9986-Cred</MenuItem>
                                        <MenuItem value={''}><CreditCardIcon />9987-Debt</MenuItem>
                                        <MenuItem value={''}><PixIcon />PIX</MenuItem>
                                        <MenuItem value={''}><AttachMoneyIcon />Dinheiro</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="modal-button-save">
                            <Fab
                                color="success"
                                aria-label="Salvar"
                            >
                                <AddIcon />

                            </Fab>
                        </div>
                    </div>

                </Card>
            </BasicModal>
        </div>



    )
}