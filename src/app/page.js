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
        <h1 id={styles.LogoText}>Blog's</h1>
        
      </div>
      <div id={styles.MainText}>
        <h1>What are you thinking about?</h1>
        <form onSubmit={inputSubmit} id={styles.InputForm}       >
          <input id={styles.MainInput}  value={task} onChange={inputChange} onKeyPress={handleKeyPress} placeholder="Write here"></input>
          <button id={styles.UploadButton}>Upload</button>
        </form>
        <p id={styles.save}>They won't save in our service</p>
        <div id={styles.CardBox}>
        {tasksArray.map((task, index) => (
          <div id={styles.CardDiv} key={index}>
            <h1 id={styles.CardName}>You blog</h1>
            <h1 id={styles.CardValue}>{task}</h1>
            <h3 id={styles.CardDayTime}>{currentDay}, {currentTime}</h3>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}
