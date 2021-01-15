import React, {useState, useEffect} from 'react';
import {FETCH} from '../../Fetch';
import axios from 'axios';
import './FarmersStats.css';
import TransacIcon from '../../assets/lending.png';
import AgriIcon from '../../assets/agriculture.png';


export default function FarmersStats() {


    const [transactions , setTransactions] = useState([]);
    const [dataFarmers, setDataFarmers] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/farmers',{})
        .then((res) => res.data)
        .then((data) => {
          setDataFarmers(data);
        })
        .catch((err) => {
          let message;
          if (err.response.status === 401) {
            message = "You're not authorized to access these datas";
          } else {
            message = err.response.data.errorMessage;
          }
          console.log(message);
          console.error(err);
        });
       
          },[]);
         
          useEffect(() => {
            axios
            .get('http://localhost:8000/api/transactions',{})
            .then((res) => res.data)
            .then((data) => {
              setTransactions(data);
            })
            .catch((err) => {
              
              console.error(err);
            });
           
              },[]);
              
    return(
        <div className="stats-container">
         <p className="total-farmers"><img src={AgriIcon} />Agriculteurs partenaires : <span className="data-farmers">{dataFarmers.length} </span></p>
         <p className="total-transactions"> <img src = {TransacIcon} /> Nombre de transactions :  <span className="data-farmers">{transactions.length} </span></p>
        

        </div>
    );
}