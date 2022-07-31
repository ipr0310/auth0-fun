import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const MembersOnly: NextPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>Members Only!!!</h1>

      <a href="/api/auth/logout">
        <button style={{ width: 500, marginTop: "1rem" }}>Logout</button>
      </a>
    </div>
  );
};

export default MembersOnly;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
