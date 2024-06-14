"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { MdAccountCircle } from "react-icons/md";
import { MdQueueMusic } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { useState, useEffect } from 'react';

export default function Home() {

//   // const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://abdulaxad575:Abdu1axad2839@firstexample.ipcbbsn.mongodb.net/?retryWrites=true&w=majority&appName=FirstExample";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // const newTask = `${task.length + 1}`;
      setTasksArray([task, ...tasksArray]);
      setTask('');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // const newTask = `${task.length + 1}`;
      setTasksArray([task, ...tasksArray]);
      setTask('');
    }
  };

  const [currentTime, setCurrentTime] = useState('');
  const [currentDay, setCurrentDay]=useState('')

  useEffect(() => {
    // Функция для обновления текущего времени
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0'); // Добавляем ноль перед однозначными часами
      const minutes = now.getMinutes().toString().padStart(2, '0'); // Добавляем ноль перед однозначными минутами
      setCurrentTime(`${hours}:${minutes}`);
      setCurrentDay(now.toLocaleDateString())

    // // Устанавливаем интервал обновления времени каждую секунду
    // const intervalId = setInterval(updateTime, 1000);

    // // Очищаем интервал при размонтировании компонента
    // return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <div id={styles.FirstDiv}>
        <h1 id={styles.LogoText}>Abdulaxad Blog</h1>
        <div id={styles.IconDiv}>
        <Link id={styles.LinkColor} href={"../pages/explore"}>
          <MdExplore id={styles.ExploreIcon} />
        </Link>
        <Link id={styles.LinkColor} href={"../pages/my-account"}>
        <MdAccountCircle id={styles.AccountIcon} />
        </Link>
        <MdQueueMusic id={styles.TranslateIcon} />
        <Link id={styles.LinkColor} href="">
        <MdSearch id={styles.SearchIcon}/>
        </Link>
        </div>
      </div>
      <div id={styles.MainText}>
        <h1>What I am thinking about?</h1>
        <form onSubmit={inputSubmit} id={styles.InputForm}       >
          <input id={styles.MainInput}  value={task} onChange={inputChange} onKeyPress={handleKeyPress} placeholder="Write here"></input>
          <button id={styles.UploadButton}>Upload</button>
        </form>
        <div id={styles.CardBox}>
        {tasksArray.map((task, index) => (
          <div id={styles.CardDiv} key={index}>
            <h1 id={styles.CardName}>Abdulaxad Xadjimetov</h1>
            <h1 id={styles.CardValue}>{task}</h1>
            <h3 id={styles.CardDayTime}>{currentDay}, {currentTime}</h3>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}
