import React from "react";

function Block(props) {
  let { index, previousHash, hash, nonce, timestamp, body } = props;
  return (
    <>
      <div className="card" style={{ marginTop: "90px"}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            <span>index : {index}</span><br></br>
            <span>previousHash : {previousHash}</span><br></br>
            <span>hash : {hash}</span><br />
            <span>nonce : {nonce}</span><br />
            <span>timestamp : {timestamp}</span><br />
            <span>
              body :{" "}
              {`from : ${
                body[0] !== undefined ? body[0].from : "nil"
              } , to: ${
                body[0] !== undefined ? body[0].to : "nil"
              } , amount: ${
                body[0] !== undefined ? body[0].amount : "nil"
              }`}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Block;
