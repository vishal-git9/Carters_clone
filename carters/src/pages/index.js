import Head from 'next/head'
import { HomePage } from './Home'
export default function Home() {

  return (
    <div className='body'>
      <Head>
        <title>Carters</title>
        <meta name="description" content="diapers Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </div>
  )
}
