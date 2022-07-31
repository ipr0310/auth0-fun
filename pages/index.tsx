import type { NextPage } from "next";
import { useUser } from "@auth0/nextjs-auth0";

import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  console.log(user);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js+Auth0!</a>
        </h1>

        <p className={styles.description}>
          Get started with
          <code className={styles.code}>Auth0</code>
        </p>

        <div className={styles.grid}>
          {isLoading && (
            <a className={styles.card}>
              <h2>Loading Data...</h2>
            </a>
          )}

          {error && (
            <a className={styles.card}>
              <h2>{error.message}</h2>
            </a>
          )}

          {user && (
            <a className={styles.card}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {user.picture && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    width={40}
                    height={40}
                    style={{ marginRight: 10, borderRadius: "50%" }}
                    src={user.picture}
                    alt="user avatar"
                  />
                )}

                <p style={{ fontSize: "2rem", fontWeight: 700 }}>
                  {`Welcome ${user.given_name}`}
                </p>
              </div>
              <p>Email: {user.email}</p>
              <p>Name: {user.name}</p>

              <a href="/membersonly">
                <button style={{ width: "100%", marginTop: "1rem" }}>
                  Go To Members Only Page
                </button>
              </a>

              <a href="/api/auth/logout">
                <button style={{ width: "100%", marginTop: "1rem" }}>
                  Logout
                </button>
              </a>
            </a>
          )}

          {user && (
            <a
              className={styles.card}
              style={{
                display: "block",
                flexWrap: "wrap",
                lineBreak: "anywhere",
              }}
            >
              {JSON.stringify(user)}
            </a>
          )}

          {!user && (
            <a href="/api/auth/login" className={styles.card}>
              <h2>Log In Now!</h2>
              <p>Find out how easy it is to log in with Auth0!</p>
            </a>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;