import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import "./Body.css";
const express= require('express');
const app = express();
function Body() {
  const router=createBrowserRouter([])

  return (
    <>
      <div className="con">
        <div className="card" onClick={()=>{
        }}>
          <div className="text">
            <h1>SJF</h1>
          </div>
          <div className="para">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            ea inventore illo ab! Cum laudantium dolore sequi aspernatur rerum
            commodi, modi magni ratione rem ducimus, placeat esse perferendis
            adipisci id deserunt veritatis quas pariatur quis! Laborum corporis
            harum labore recusandae nemo nisi praesentium commodi placeat ea
            nobis obcaecati est autem rem totam consequatur, fugit itaque quae
            aliquid. Ullam officiis voluptates excepturi in quam amet assumenda
            dicta, libero odit eaque quos iure commodi et maiores exercitationem
            placeat, ex fugiat nisi esse.
          </p>
          </div>
        </div>
        <div className="card">
          <div className="text1">
            <h1>Dining Philosophers</h1>
          </div>
          <div className="para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            doloribus veritatis ipsum tempore veniam quae omnis id eum! Optio
            ipsam et inventore quidem, dicta rem voluptatibus nulla repudiandae
            consectetur reiciendis at praesentium corporis saepe eligendi
            quibusdam expedita quod suscipit, voluptate quisquam. Deserunt esse
            provident deleniti earum ab. Sapiente praesentium totam ducimus rem.
            Totam vel sapiente corporis, maxime non eaque, fugiat obcaecati
            neque at enim in alias dicta sit nisi debitis quo reprehenderit
            repellat, fugit vero est esse. Nam, distinctio in nulla, placeat ut,
            fugit delectus fugiat assumenda deserunt non cumque.
          </p>
          </div>
        </div>
        <div className="card">
          <div className="text">
            <h1>C-look</h1>
          </div>
          <div className="para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            dolorum asperiores beatae, nulla dignissimos deserunt velit
            doloribus atque sequi corrupti nihil debitis? Nulla reprehenderit
            vero provident exercitationem accusantium? Modi, exercitationem
            vitae. Culpa earum minus eveniet et odio, consectetur minima
            voluptatibus reiciendis necessitatibus unde labore quasi odit
            maiores sunt libero. Soluta quaerat laudantium ipsam. Iste, quaerat
            repellendus odio cum perferendis ex, ullam qui error asperiores
            veritatis nam atque quia ducimus rem temporibus velit! Fugiat ut
            soluta ratione qui voluptatibus recusandae labore, laudantium
            asperiores similique quam aperiam nisi itaque sequi, obcaecati rerum
            repellendus harum esse. Dolore excepturi blanditiis, et consequatur
            quisquam sunt?
          </p>
          </div>
        </div>
        <div className="card">
          <div className="text">
            <h1>FIFO</h1>
          </div>
          <div className="para">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            magni unde eum. Nam illo possimus officiis laudantium blanditiis
            voluptates, ex animi qui repellendus, sit ipsum dicta repudiandae
            consectetur quae rerum! Molestiae, deserunt quasi sint ullam quaerat
            fuga? Iusto blanditiis assumenda illum quibusdam inventore
            repudiandae quam, harum minus nesciunt qui quidem quae odio expedita
            laborum, reiciendis deserunt perspiciatis veniam in reprehenderit!
            Iusto dolores veritatis nobis accusantium voluptatem deserunt in
            voluptate facere voluptas ipsam sapiente sunt impedit explicabo
            similique eius laboriosam aliquid magnam mollitia, recusandae
            corrupti dolorum? Ducimus alias eaque est veniam iusto sunt
            obcaecati explicabo cupiditate ex, cumque assumenda consectetur
            possimus?
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
