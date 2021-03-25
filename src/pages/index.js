import Head from 'next/head';
import Header from 'container/Header';
import SettingContextProvider from 'container/SettingContextProvider';
import TweetContainer from 'container/TweetContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>HoloTweets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SettingContextProvider>
          <Header />
          <TweetContainer />
        </SettingContextProvider>
      </main>
    </>
  );
}
