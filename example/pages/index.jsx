import Head from 'next/head';
import Header from './../components/header/header.jsx';
import Coin from './../components/coin/coin.jsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const Index = () => (
  <React.Fragment>
    <Head>
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
      <meta key="charset" charSet="utf-8" />
      <meta key="description" name="description" content="This is an experimental application created to provide the status and statistics of your crypto currencies." />
      <meta key="keywords" name="keywords" content="home,index" />
      <meta key="author" name="author" content="John Doe" />
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <link href="./../static/css/cryptofont.min.css" rel="stylesheet" />
    </Head>
    <style jsx global>{`
      body {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
        padding: 0;
      }
    `}</style>
    <style jsx>{`
      .wrapper {
        margin: 0 auto;
        max-width: 940px;
        text-align: center;
      }
      .inner {
        margin: 24px;
      }
      h2 {
        font-size: 18px;
        font-weight: 400;
      }
      .coin-wrapper {
        display: flex;
        justify-content: center;
      }
      .button-wrapper {
        margin: 40px 0 30px 0;
      }
    `}</style>
    <Header />
    <div className={'wrapper'}>
      <div className={'inner'}>
        <h2>This is an experimental application created to provide the status and statistics of your crypto currencies.</h2>
        <div className={'button-wrapper'}>
          <Link href="/dashboard">
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </Link>
        </div>
        <div className={'coin-wrapper'}>
          <Coin icon={'cf-btc'} />
          <Coin icon={'cf-eth'} />
          <Coin icon={'cf-ltc'} />
          <Coin icon={'cf-xrp'} />
        </div>
        <p>
          Please note: The information provided may not be 100% accurate. Do not rely on this information when making a purchase or sale.
          We do not take any responsibility of any financial loss incurred from using this web application.
      </p>
      </div>
    </div>
  </React.Fragment >
)

export default Index