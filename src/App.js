import React, { useState, useEffect } from 'react';
// import { io } from "socket.io-client";
import  socket  from './server.js';
import { Icon } from 'leaflet';
import { Map, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import './App.css';
import {Flex, View} from '@adobe/react-spectrum'


const truck_icon = new Icon({
  iconUrl: '../public/truck.png',
  iconSize: [25,25]
});

var trucks = [{code: 'CAT013', position: [0,0], origin: [0,0], destination: [0,0], engine: '', truck: '', capacity: 0, staff: [{},{},{}], status: 'ok'}, 
 {code: 'CAT015', position: [0,0], origin: [0,0], destination: [0,0], engine: '', truck: '', capacity: 0, staff: [{},{},{}], status: 'ok'},
 {code: 'KOM401', position: [0,0], origin: [0,0], destination: [0,0], engine: '', truck: '', capacity: 0, staff: [{},{},{}], status: 'ok'},
 {code: 'KOM500', position: [0,0], origin: [0,0], destination: [0,0], engine: '', truck: '', capacity: 0, staff: [{},{},{}], status: 'ok'},
 {code: 'KOM501', position: [0,0], origin: [0,0], destination: [0,0], engine: '', truck: '', capacity: 0, staff: [{},{},{}], status: 'ok'}];

export default function App() {

  const [location, setLocation] = useState([0,0]);
  const [activeTruck, setActiveTruck] = useState(null);
  // const [status, setStatus] = useState(true);

  socket.emit("TRUCKS");
  // useEffect(() => {
    socket.once("TRUCKS", (data2) => {
      // console.log(data2);
      for (let i = 0; i < data2.length; i++) {
        let newOrigin = [data2[i].origin[0], data2[i].origin[1]];
        trucks[i].origin[0] = newOrigin[0];
        trucks[i].origin[1] = newOrigin[1];
        trucks[i].destination[0] = data2[i].destination[0];
        trucks[i].destination[1] = data2[i].destination[1];
        trucks[i].engine = data2[i].engine;
        trucks[i].truck = data2[i].truck;
        trucks[i].capacity = data2[i].capacity;
        for (let j = 0; j < data2[i].staff.length; j++){
          trucks[i].staff[j] = data2[i].staff[j];
        }
      }
    });
  // });
  useEffect(() => {
    socket.on("POSITION", (data) => {
        // console.log(data);
        let newLocation = [data.position[0], data.position[1]];
        setLocation(newLocation);
        if (data.code === 'CAT013' && trucks[0].status === 'ok'){
          trucks[0].position[0] = newLocation[0];
          trucks[0].position[1] = newLocation[1];
        }
        else if (data.code === 'CAT015' && trucks[1].status === 'ok'){
          trucks[1].position[0] = newLocation[0];
          trucks[1].position[1] = newLocation[1];
        }
        else if (data.code === 'KOM401' && trucks[2].status === 'ok'){
          trucks[2].position[0] = newLocation[0];
          trucks[2].position[1] = newLocation[1];
        }
        else if (data.code === 'KOM500' && trucks[3].status === 'ok'){
          trucks[3].position[0] = newLocation[0];
          trucks[3].position[1] = newLocation[1];
        }
        else if (data.code === 'KOM501' && trucks[4].status === 'ok'){
          trucks[4].position[0] = newLocation[0];
          trucks[4].position[1] = newLocation[1];
        }
    });
  }, [socket]);

  useEffect(() => {
    socket.on("FAILURE", (data3) => {
        console.log(data3);
        let str1 = "Falla ";
        if (data3.code === 'CAT013' && trucks[0].status === 'ok'){
          trucks[0].status = str1.concat(data3.source);
          // TODO mostrar la razon de la falla en la info de camiones
        }
        else if (data3.code === 'CAT015' && trucks[1].status === 'ok'){
          trucks[1].status = str1.concat(data3.source);
          // TODO mostrar la razon de la falla en la info de camiones
        }
        else if (data3.code === 'KOM401' && trucks[2].status === 'ok'){
          trucks[2].status = str1.concat(data3.source);
          // TODO mostrar la razon de la falla en la info de camiones
        }
        else if (data3.code === 'KOM500' && trucks[3].status === 'ok'){
          trucks[3].status = str1.concat(data3.source);
          // TODO mostrar la razon de la falla en la info de camiones
        }
        else if (data3.code === 'KOM501' && trucks[4].status === 'ok'){
          trucks[4].status = str1.concat(data3.source);
          // TODO mostrar la razon de la falla en la info de camiones
        }
    });
  }, [socket]);

  function send_fix(truck){
    socket.emit("FIX", {code: truck.code});
    socket.once("FIX", (data_fix) => {
      console.log(data_fix);
      if (data_fix.code === truck.code){
        truck.status = 'ok';
      }
    });
  };

  // useEffect(() => {
  //   socket.on("FIX", (data4) => {
  //       console.log(data4);
  //       if (data4.code === 'CAT013'){
  //         trucks[0].status = 'ok';
  //         // TODO mostrar la razon de la falla en la info de camiones
  //       }
  //       else if (data4.code === 'CAT015'){
  //         trucks[1].status = 'ok';
  //         // TODO mostrar la razon de la falla en la info de camiones
  //       }
  //       else if (data4.code === 'KOM401'){
  //         trucks[2].status = 'ok';
  //         // TODO mostrar la razon de la falla en la info de camiones
  //       }
  //       else if (data4.code === 'KOM500'){
  //         trucks[3].status = 'ok';
  //         // TODO mostrar la razon de la falla en la info de camiones
  //       }
  //       else if (data4.code === 'KOM501'){
  //         trucks[4].status = 'ok';
  //         // TODO mostrar la razon de la falla en la info de camiones
  //       }
  //   });
  // });

  return (

  <div>
    <Map center={[-21.9, -68.8]} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {trucks.map(truck => (
        <Marker
          key={truck.code}
          position={[
            truck.position[0],
            truck.position[1]
          ]}

          onClick={() => {
            setActiveTruck(truck);
          }}
        />
      ))}

      {activeTruck && (
          <Popup
            position={[
              activeTruck.position[0],
              activeTruck.position[1]
            ]}
            onClose={() => {
              setActiveTruck(null);
            }}
          >
            <div>
              <h2>{activeTruck.code}</h2>
              <p>Engine:{activeTruck.engine}</p>
              <p>Truck:{activeTruck.truck}</p>
            </div>
          </Popup>
        )}
      {trucks.map(truck => (
        <Polyline key={truck.code}
        positions={[
          truck.origin,
          truck.destination,
        ]} />
      ))}
    </Map>
    <Flex direction="row" height="size-800" gap="size-100">
      <div
        style={
          {
          border: '2px solid black'
          }
        }
      >
        <h1>Camion {trucks[0].code} </h1>
        <p><b>Origen:</b> {trucks[0].origin[0]}, {trucks[0].origin[1]}</p>
        <p><b>Destino:</b> {trucks[0].destination[0]}, {trucks[0].destination[1]}</p>
        <p><b>Status:</b> {trucks[0].status}</p>
        <button onClick={() => send_fix(trucks[0])}>
          <b>Arreglar</b>
        </button>
      </div>

      <div
        style={
          {
          border: '2px solid black'
          }
        }
      >
        <h1>Camion {trucks[1].code} </h1>
        <p><b>Origen:</b> {trucks[1].origin[0]}, {trucks[1].origin[1]}</p>
        <p><b>Destino:</b> {trucks[1].destination[0]}, {trucks[1].destination[1]}</p>
        <p><b>Status:</b> {trucks[1].status}</p>
        <button onClick={() => send_fix(trucks[1])}>
          <b>Arreglar</b>
        </button>
      </div>

      <div
        style={
          {
          border: '2px solid black'
          }
        }
      >
        <h1>Camion {trucks[2].code} </h1>
        <p><b>Origen:</b> {trucks[2].origin[0]}, {trucks[2].origin[1]}</p>
        <p><b>Destino:</b> {trucks[2].destination[0]}, {trucks[2].destination[1]}</p>
        <p><b>Status:</b> {trucks[2].status}</p>
        <button onClick={() => send_fix(trucks[2])}>
          <b>Arreglar</b>
        </button>
      </div>

      <div
        style={
          {
          border: '2px solid black'
          }
        }
      >
        <h1>Camion {trucks[3].code} </h1>
        <p><b>Origen:</b> {trucks[3].origin[0]}, {trucks[3].origin[1]}</p>
        <p><b>Destino:</b> {trucks[3].destination[0]}, {trucks[3].destination[1]}</p>
        <p><b>Status:</b> {trucks[3].status}</p>
        <button onClick={() => send_fix(trucks[3])}>
          <b>Arreglar</b>
        </button>
      </div>

      <div
        style={
          {
          border: '2px solid black'
          }
        }
      >
        <h1>Camion {trucks[4].code} </h1>
        <p><b>Origen:</b> {trucks[4].origin[0]}, {trucks[4].origin[1]}</p>
        <p><b>Destino:</b> {trucks[4].destination[0]}, {trucks[4].destination[1]}</p>
        <p><b>Status:</b> {trucks[4].status}</p>
        <button onClick={() => send_fix(trucks[4])}>
          <b>Arreglar</b>
        </button>
      </div>
    </Flex>
  </div>
  );
}
