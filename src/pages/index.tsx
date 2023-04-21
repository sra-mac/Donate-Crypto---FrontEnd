import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import {doLogin} from '../service/Web3Service'
import { useState } from 'react'

export default function Home() {
  const [wallet, setWallet] = useState("")
  const [error, setError] = useState("")
  function btnLoginClick(){
    doLogin()
      .then(wallet=> setWallet(wallet))
      .catch(err=> setError(err.message));
  }
  return (
    <>
      <Head>
        <title>Donate Crypto | Index</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container px-4 py-3">
        <div className="row flex-lg-row">
        {
          !wallet?
          (
            <div className="col-10 col-sm-8 col-lg-6 py-3">
            <img className="global-background" src="/image/global.png" alt="happy people" />
              
              {/* <img className="d-block mx-lg-auto img-fluid" width="700" height="500" src="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="happy people" /> */}
            </div>
          ):(
            <div className="col-10 col-sm-8 col-lg-6">
              <p className="mb-3">Be Welcome {wallet}</p>
              <p className="mb-3">What do you want to do? </p>
              <div className="col-12">
                <p><Link href="/donate" className='btn btn-primary col-6 p-3'>Quero fazer uma doação</Link></p>
                <p><Link href="/create" className='btn btn-secondary col-6 p-3'>Quero criar uma campanha</Link></p>
              </div>

            </div>
          )
        }
          <div className="col-lg-8 py-5">
          <h1 className="fw-bold mb-3 py-5">Donate Crypto</h1>          
          </div>
          <div className="col-lg-6">
            <p>Sua plataforma descentralizada de doações.</p>
            <p className="mb-3">Autentique-se com sua carteira, crie sua campanha ou doe para campanhas existentes.</p>
            {!wallet ?(
              
              <div className='row flex align-items-center'>
                <button className="btn btn-primary btn-lg px-4 me-md-2 col-8" type='button' onClick={btnLoginClick}>
                  <img src="/metamask.svg" width={64} className='me-3' alt="Clique no botão para doar" />
                  Conectar com a Metamask
                </button>
                <img src="/image/icon-button.png" className='icon_button col-4' alt="" />
              </div>
            ):<></>
            }
            
            {error}
          </div>
        </div>
      <Footer></Footer>
      </div>

    </>
  )
}
