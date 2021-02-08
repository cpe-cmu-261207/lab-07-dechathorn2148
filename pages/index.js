import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'
import profileImage from '../public/Image/Image1.png';

const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
      <div>
        <p></p>
        <button><Link href='http://localhost:3000/'>Home</Link></button>
        <button><Link href='\gallery'>Gallery</Link></button>
        <button><Link href='\contact'>Contact</Link></button>
        <button><Link href='\gpa'>Gpa Calculator</Link></button>
        <button><Link href='\post'>Post</Link></button>
        <hr/>
        <h1><ins>Personal Profile</ins></h1>
        <img src={profileImage} alt='' id='profileImage' width = {500} height = {350}/>
        <p/>
        <br/><b>Dechathorn Intravijit</b>
        <br/><b>Student</b>
        <hr/>
        <p/>
        <b>Name</b> : นายเดชาธร อินทรวิจิตร
          <br/><b>Age</b> : 19 ปี
          <br/><b>Sex</b> : ชาย
          <br/> <b>Skill</b> : ไม่มี 
          <br/> <b>Hobbies</b> : นอนพักผ่อน และ นั่งพักผ่อน
          <br/> <b>Education</b> : ประถมศึกษาที่ โรงเรียนมารดาอุปถัมภ์ จังหวัดแพร่
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มัธยมศึกษาตอนต้นที่ โรงเรียนพิริยาลัย จังหวัดแพร่
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มัธยมศึกษาตอนปลายที่ โรงเรียนพิริยาลัย จังหวัดแพร่
          <br/> <b>Email</b> : dechathorn_in@cmu.ac.th
          <hr />
      </div>
  )
}

export default Home
