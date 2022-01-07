import React from "react"
import axios from "axios"
import { StyleSheet, css } from "aphrodite"
import algo from "../images/algo.png"
import { useState } from "react"
import { Ellipsis } from "react-bootstrap/esm/PageItem"



const styles = StyleSheet.create({
    container : {
        width: '50%',
        // display : 'flex',
        height : '100%',
        position: 'fixed',
        // zIndex: '1',
        top: '0',
        overflowX: 'hidden',
        paddingTop: '20px'
    },
    title: {
        textAlign: 'center',
        padding: '24px',
        margin: '24px',
        color : '#0570EE',
    },
    left: {
        backgroundColor : '#0570EE',
        left: '0'

    },
    right: {
        justifyContent : 'center',
        alignItems: 'center',
        right: '0'
    },
    image: {
        top: '50%',
        left: '50%',
        // backgroundImage: `url(${algo})`,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
    },

    input: {
        width: '300px',
        padding: '16px',
        display: 'block',
        marginRight : 'auto',
        marginLeft: 'auto'
    },
    button: {
        padding: '16px',
        width: '350px',
        display: 'block',
        marginRight : 'auto',
        marginLeft: 'auto',
        backgroundColor : '#0570EE',
        border: 'none',
        color: 'white'
    },

    subtext:{
        lineHeight: '24px',
        fontSize: '18px',
        textAlign: 'center',
        margin: '24px',
    }, 

    subhead: {
        fontSize: '24px',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    create: {
        display: 'block',
        fontSize: '16px',
        textAlign: 'center',
        fontWeight: 'bold',
        color : '#0570EE',
    },
    newAccount: {
        display: 'block',
        fontSize: '16px',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    generate: {
        // display: 'none'
    },

    centered : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)}',
        textAlign: 'center',
        margin: '24px',
        padding: '16px'
      }

})



  export default function CreateAccount() : JSX.Element{

    const [isLoading, setLoading] = useState(false)
    const [address, setAddress] = useState('')
    const [secret, setSecret] = useState('')
    const [input, setInput] = useState('')

    const generateAccount = async () =>{
        try{
            let data = await axios.get("https://api-eu1.tatum.io/v3/algorand/wallet/" ,{
                headers :{
                    'content-type': 'text/json',
                   "x-api-key" : process.env.REACT_APP_TATUM_API_KEY!
                   
               },
              })
              setAddress(data.data.address)
              setSecret(data.data.secret)

              console.log(data.data.address)

        }catch(err){
            console.log(err)
        }    
     }

    const  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
    console.log(input)
  };

  const validateLogin  = async () =>{
    try{
        let data = await axios.get(`https://api-eu1.tatum.io/v3/algorand/address/${input}` ,{
            headers :{
                'content-type': 'text/json',
                "x-api-key" : process.env.REACT_APP_TATUM_API_KEY!
           },
          })
          console.log(data.data.address)
          if (data.status == 200){
            console.log('correct go to dashboard')
          }else{
              console.log('incorrect secret')
          }
    }catch(err){
        console.log(err)
    } 
  }

     return(
         <div>
            <div className={`${css(styles.container)} ${css(styles.left)}`} >
            <div className={css(styles.centered)}>
                    <img className={css(styles.image)} src={algo} alt="algorand logo"/>
                </div>
         </div>
    

        <div className={`${css(styles.container)} ${css(styles.right)}`}>
            <h1 className={css(styles.title)}>Tatum Algorand Wallet</h1>
            <input onChange = {onChange}  value= {input} className={css(styles.input)} type="text" placeholder="Enter your private key/ mnemonic phrase"/><br/><br/>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => {validateLogin()}}
 className={css(styles.button)}>Login</button><br/>
            <span className={css(styles.newAccount)}>Don't have a wallet?</span> 
            <span className={css(styles.create)} onClick={generateAccount}> Create new Wallet</span>
            <div className={css(styles.generate)}> 
                <p className={css(styles.subtext)}>Copy and save your secret key, you will need it to have access to your account</p>
                <p className={css(styles.subhead)}>Address</p>
                <p className={css(styles.subtext)}>{address}</p>
                <p className={css(styles.subhead)}>Secret Key</p>
                <p className={css(styles.subtext)}>{secret}</p>
            </div>
        </div>
         </div>
    
    
    )

  }
  