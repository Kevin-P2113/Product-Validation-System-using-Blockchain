import React, { useEffect } from "react";
import { useState } from "react";
import Block from "./Block";

function BlockChain() {
  const [blocks, setBlocks] = useState([]);
  const [done,setDone] = useState(false);

  const fetchBlockChain = () => {
    fetch(`http://localhost:3000/blockchain`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlocks(data.blocks);
        setDone(true);
      });
  };

  useEffect(()=>{
    fetchBlockChain();
  },[done])
  return (
    <>
      <div className="container my-5">
        <h1>Blockchain</h1>
        <div className="row">
          {blocks.map((block) => (
            <div className="col-sm-12 col-md-6 col-lg-4 my-4" key={block.index}>
              <Block
                index={block.index}
                previousHash={block.previousHash}
                hash={block.hash}
                nonce={block.nonce}
                timestamp={block.timestamp}
                body={block.body}
              ></Block>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlockChain;
