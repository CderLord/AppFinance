/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Fab, FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { BasicModal, Card } from "../../components";
import { useEffect, useState, useReducer } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { reducer } from "./reducer";
import { format } from "date-fns";

import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PixIcon from '@mui/icons-material/Pix';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import dayjs from "dayjs";

import "./home.style.css";
import 'dayjs/locale/en-gb';
import { Link } from "react-router-dom";

// Estado inicial para o useReducer
const initialState: { openModal: boolean, modalName: string, id: string } = { openModal: false, modalName: "", id: "" }

export const HomePage = () => {
    // Declaração dos estados
    const [storageData, setStorageData] = useState<Array<unknown>>([]);
    const [description, setDescription] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentValue, setPaymentValue] = useState('');
    const [date, setDate] = useState(() => {
        const savedDate = localStorage.getItem('date');
        return savedDate ? dayjs(savedDate) : null;
    });
    const [state, dispatch] = useReducer(reducer, initialState);
    const [greeting, setGreeting] = React.useState('');
    const [showTotalValue, setShowTotalValue] = React.useState(false);


    // Função para alternar a exibição do valor total
    const handleClickShowTotalValue = () => setShowTotalValue((show) => !show);
    const handleMouseDownTotalValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // Função para definir a saudação com base na hora atual
    const getGreeting = () => {
        const currentHour = parseInt(format(new Date(), 'H'), 10);
        if (currentHour < 12) {
            setGreeting("Bom Dia!")
        } else if (currentHour < 18) {
            setGreeting('Boa Tarde!');
        } else {
            setGreeting('Boa Noite!');
        }
    };

    // Calcular o valor total das despesas
    const totalValue = storageData?.map((item: any) => item.paymentValue)
    const total = totalValue.reduce((acc, current) => { return Number(acc) + Number(current) }, 0)

    // Função para salvar o formulário e atualizar o estado
    const saveForm = () => {
        setStorageData((prev) => {
            console.log(prev)
            const newData = [...prev, { description, paymentMethod, paymentValue, date: date?.toISOString() }];
            console.log("newdata", newData)
            return newData;
        });
        localStorage.setItem(state?.id, JSON.stringify(storageData));
        dispatch({ type: "closeModal" });
        console.log('id',state.id)
    };

    // Carregar dados do localStorage e definir a saudação ao montar o componente
    useEffect(() => {
        if (localStorage.getItem(state.id)&& state.id !== "0") {
            const data = JSON.parse(localStorage.getItem(state.id) as string)
            console.log("data", data)
            setStorageData(data)
            
        }


        getGreeting()
    }, [state.id])

    return (

        //header//
        <div className="container-home">
            <div className="container-dashboard-home">
                <Card>
                    <>
                        {/* card-left */}
                        <div className="card-home-content-left">
                            <div className="wellcome-home">
                                <p>{greeting}</p>
                                <p className="card-home-user-name-text">André Tiago</p>
                            </div>
                            <Card>
                                <div className="card-home-month-finances">
                                    <p>receita mensal:</p>
                                    <h3 className="title-green">R$0,00</h3>
                                </div>
                            </Card>
                            <Card>
                                <div className="card-home-month-finances">
                                    <p>despesas mensal:</p>
                                    <h3 className="title-red">R$ {total}</h3>
                                </div>
                            </Card>

                            <Button className="graph-button-home">
                                <AutoGraphIcon />
                                <Link to='/expense' style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Typography variant="button">Relatórios</Typography>
                                </Link>

                            </Button>

                            {/* card-rigth */}
                            <div className="card-home-content-right">
                                <div className="title-card-home-content-right">
                                    <h3>Acesso Rápido</h3>
                                </div>
                                <div className="home-buttons-right">
                                    <Button className="button-register" onClick={() => dispatch({ type: "register" })}>
                                        <div className="button-home-options">
                                            <ControlPointIcon className="icon-add" />
                                            <span>Receita</span>
                                        </div>
                                    </Button>

                                    <Button className="button-expenses" onClick={() => dispatch({ type: "expense" })}>
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

            {/* card-final-balance */}
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
                                            onClick={handleClickShowTotalValue}
                                            onMouseDown={handleMouseDownTotalValue}
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
            <BasicModal onClose={() => dispatch({ type: "closeModal" })} open={state?.openModal as boolean}>
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
                                    name="description"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="purchase-info-inputs">
                                <div className="currency-input">
                                    <TextField
                                        required
                                        id="currency-input"
                                        label='Valor'
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                        }}
                                        margin="dense"
                                        name="value"
                                        value={paymentValue}
                                        onChange={e => setPaymentValue(e.target.value)}
                                    />
                                </div>

                                <div className="date-input">
                                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                label="Data Da Compra"
                                                format="DD-MM-YYYY"
                                                value={date}
                                                onChange={(newValue) => setDate(newValue)}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>
                            </div>

                            <div className="home-payment-method">
                                <FormControl fullWidth margin="dense">
                                    <InputLabel className="home-payment-method-input">Forma de Pagamento</InputLabel>
                                    <Select
                                        labelId="home-payment-method-select"
                                        id="home-payment-method-select"
                                        label="Forma de Pagamento"
                                        name="paymentMethod"
                                        value={paymentMethod}
                                        onChange={e => setPaymentMethod(e.target.value)}
                                    >
                                        <MenuItem value={'credit'}><CreditCardIcon />9986-Crédito</MenuItem>
                                        <MenuItem value={'debit'}><CreditCardIcon />9987-Débito</MenuItem>
                                        <MenuItem value={'pix'}><PixIcon />PIX</MenuItem>
                                        <MenuItem value={'cash'}><AttachMoneyIcon />Dinheiro</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="modal-button-save">
                            <Fab onClick={saveForm} color="success" aria-label="Salvar">
                                <AddIcon />
                            </Fab>
                        </div>
                    </div>
                </Card>
            </BasicModal>
        </div>
    )
}
