import React, { useEffect, useState } from "react";
import { URLCard } from "../components/url-card";
import Head from "next/head";
import {
  useSession,
  signOut,
  getSession,
  GetSessionParams,
} from "next-auth/react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [userUrls, setUserUrls] = useState([]);
  const { status, data: session } = useSession();

  useEffect(() => {
    const fetchUser = async () => {
      const session = await getSession();
      if (session) {
        setUser(session.user);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        console.log("User: ", user);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/profile-data`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: user.name }),
          }
        );
        const res = await response.json();
        console.log(res);
        setUserUrls(res.data);
        console.log(userUrls);
      }
    };
    fetchData();
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = `${process.env.NEXT_PUBLIC_HOST}`;
  };

  return (
    <>
      <Head>
        <style>{`
          html,
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Head>
      <div
        style={{ display: "flex", height: "100vh", fontFamily: "Helvetica" }}
      >
        <div
          style={{
            flex: "0 0 25%",
            backgroundColor: "#273043",
            color: "#fff",
            padding: "20px",
            paddingLeft: "40px",
          }}
        >
          <h1>User Profile</h1>
          {user && (
            <>
              <h3>Username </h3>
              <p style={{ fontStyle: "italic" }}>{user.name}</p>
              <h3>Account Creation Date </h3>
              <p style={{ fontStyle: "italic" }}>{user.email}</p>
              <h3>Account Tier</h3>
              <p style={{ fontStyle: "italic" }}>Free</p>
            </>
          )}

          <div style={{ marginTop: "110%" }}>
            <a
              onClick={handleSignOut}
              style={{
                textDecoration: "none",
                fontSize: "15px",
                borderRadius: "15px",
                padding: "10px",
                paddingLeft: "25px",
                paddingRight: "25px",
                border: "2px solid #fff",
                backgroundColor: "#fff",
                color: "#273043",
                cursor: "pointer",
              }}
            >
              Logout
            </a>
            <a
              href="/"
              style={{
                textDecoration: "none",
                fontSize: "15px",
                borderRadius: "15px",
                padding: "10px",
                paddingLeft: "25px",
                paddingRight: "25px",
                border: "2px solid #9bc7da",
                backgroundColor: "#9bc7da",
                color: "#273043",
                marginLeft: "15px",
                cursor: "pointer",
              }}
            >
              Home
            </a>
          </div>
        </div>
        <div style={{ flex: 1, padding: "20px" }}>
          {/* Right part content */}
          {userUrls.map((userUrl) => (
            <div>
              <URLCard
                url={userUrl.url}
                token={userUrl.hash}
                createDate={userUrl.createDate}
                expiredDate={userUrl.expiredDate}
              />
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
