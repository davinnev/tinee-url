import React from "react";

interface URLCardProps {
  url: string;
  token: string;
  createDate: string;
  expiredDate: string;
}

export function URLCard(props: URLCardProps) {
  const cardStyles = {
    card: {
      width: "100%",
      maxWidth: "1060px",
      backgroundColor: "#DEE4E7",
      borderRadius: "15px",
      overflow: "hidden",
      display: "table",
      paddingBottom: "10px",
      paddingTop: "5px",
      //boxShadow: "5px 5px #273043",
    },
    content: {
      marginLeft: "25px",
      color: "#273043",
    },
    data: {
      marginRight: "10px",
      marginLeft: "10px",
      fontSize: "14px",
      maxWidth: "1000px",
    },
    token: {
      marginBottom: "0",
      fontSize: "16px",
    },
  };

  return (
    <div style={cardStyles.card}>
      <div style={cardStyles.content}>
        <h2 style={cardStyles.token}>
          <a
            href={`https://tinee.vercel.app/${props.token}`}
            target="_blank"
          >{`tinee.vercel.app/${props.token}`}</a>
        </h2>
        <div style={cardStyles.data}>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Original URL:{" "}
            </span>{" "}
            <a href={props.url} target="_blank">
              {props.url}
            </a>
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>Create Date: </span>
            {props.createDate}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>Expired Date: </span>
            {props.expiredDate}
          </p>
        </div>
      </div>
    </div>
  );
}
