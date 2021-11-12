import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReactLoading from 'react-loading';
import bittrex from "../bittrex.png";
import poloniex from "../poloniex.png";
import bitcoin from "../btc.png";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';
import ApexChart from '../component/DataTablePoloniex.js'
import CandeChart from '../component/CandleChart.js'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
      },
    paper: {
        margin: 20,
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));


export default function Table() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [seconds, setSeconds] = useState(0);
    const [color, setColor] = useState("black");
    const [done, setDone] = useState(undefined);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        (async function() {
            try {
                const response = await fetch("https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=25");
                const res = await response.json();
                console.log("POLONIEX",res);
                

            } catch (e) {
                console.error(e);
            }
        })();
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        (async function() {
            try {
                const response = await fetch("http://localhost:5000");
                const json = await response.json();
                setData(json.data);
                // setColor("white")
                setDone(true);
            } catch (e) {
                console.error(e);
            }
        })();
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return (
        <>
            {!done ? (
                <>
                    <ReactLoading type={"bubbles"} color={"white"} height={100} width={100} /> 
                    <Typography style={{justifyContent:'center'}} variant="h6"> УНШИЖ БАЙНА ТҮР ХҮЛЭЭНЭ ҮҮ... </Typography>
                </>
            ) : (
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div>
                                {data.map(function(d, idx){
                                    return (
                                        <div key={idx} className={classes.root}>
                                            <img src={bittrex} alt="bittrex logo"  width="300"/><hr/> 
                                            <Typography variant="h3" gutterBottom>
                                                {/* {seconds}  */}
                                                <h><img src={bitcoin} alt="bitcoin logo"  width="50"/> {d.MarketName} ХОСЛОЛ</h>
                                            </Typography>
                                            <ButtonGroup color="secondary"   aria-label="outlined primary button group">
                                                <Button> VOLUME</Button>
                                                <Button> {d.Volume}</Button>
                                                <Button> Open Buy Orders</Button>
                                                <Button> {d.OpenBuyOrders}</Button>
                                                <Button> Open Sell Orders</Button>
                                                <Button> {d.OpenSellOrders}</Button>
                                                
                                            </ButtonGroup>

                                            <ButtonGroup color="primary"  aria-label="outlined primary button group">
                                                <Button> <TrendingUpIcon  style={{ color: "green" }}/></Button>
                                                <Button color="primary">HIGH: {d.High}</Button>
                                            </ButtonGroup>
                                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                                <Button> <TrendingDownIcon  style={{ color: "red" }}/></Button>
                                                <Button>LOW: {d.Low}</Button>
                                            </ButtonGroup>
                                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                                <Button> <AttachMoneyIcon  style={{ color: "red" }}/></Button>
                                                <Button>BID: {d.Bid}</Button>
                                            </ButtonGroup>
                                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                                <Button> <HelpOutlineIcon  style={{ color: "red" }}/></Button>
                                                <Button>ASK: {d.Ask}</Button>
                                            </ButtonGroup>
                                        </div>
                                )})}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div>
                            
                                {data.map(function(d, idx){
                                    return (
                                        <div key={idx} className={classes.root}>
                                            <img src={poloniex} alt="poloniex logo" width="450"/>
                                            <Typography variant="h3" gutterBottom>
                                                {/* {seconds}  */}
                                                <h><img src={bitcoin} alt="bitcoin logo"  width="50"/> {d.MarketName} ХОСЛОЛ</h>
                                            </Typography>
                                            <ButtonGroup color="primary"   aria-label="outlined primary button group">
                                                <Button> Open Buy Orders</Button>
                                                <Button> {d.OpenBuyOrders}</Button>
                                                <Button> Open Sell Orders</Button>
                                                <Button> {d.OpenSellOrders}</Button>
                                            </ButtonGroup>

                                            <ButtonGroup color="primary"  aria-label="outlined primary button group">
                                                <Button> <TrendingUpIcon  style={{ color: "green" }}/></Button>
                                                <Button color="primary">HIGH: {d.High}</Button>
                                            </ButtonGroup>
                                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                                <Button> <TrendingDownIcon  style={{ color: "red" }}/></Button>
                                                <Button>LOW: {d.Low}</Button>
                                            </ButtonGroup>
                                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                                <Button> <AttachMoneyIcon  style={{ color: "red" }}/></Button>
                                                <Button>BID: {d.Bid}</Button>
                                            </ButtonGroup>
                                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                                <Button> <HelpOutlineIcon  style={{ color: "red" }}/></Button>
                                                <Button>ASK: {d.Ask}</Button>
                                            </ButtonGroup>
                                    </div>)
                                })}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div>
                                <CandeChart/>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div>
                                <ApexChart/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </>
    );
}
