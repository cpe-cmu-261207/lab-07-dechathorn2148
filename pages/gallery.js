import Image2 from '../public/Image/Image2.jpg';
import Image3 from '../public/Image/Image3.jpg';
import Image4 from '../public/Image/Image4.jpg';
import Image5 from '../public/Image/Image5.jpg';
import Image6 from '../public/Image/Image6.jpg';
import Image7 from '../public/Image/Image7.jpg';
import Image8 from '../public/Image/Image8.jpg';
import Image9 from '../public/Image/Image9.jpg';
import Image10 from '../public/Image/Image10.jpg';
import Image11 from '../public/Image/Image11.jpg';
import Image12 from '../public/Image/Image12.jpg';
import Image13 from '../public/Image/Image13.jpg';
import Link from 'next/link';



const Gallery = () => {
  return (
      <div>
            <head>
                <title>Gallery</title>
            </head>
    <body>
    <p></p>
    <button><Link href='http://localhost:3000/'>Home</Link></button>
        <button><Link href='\gallery'>Gallery</Link></button>
        <button><Link href='\contact'>Contact</Link></button>
        <button><Link href='\gpa'>Gpa Calculator</Link></button>
        <button><Link href='\post'>Post</Link></button>
        <hr/>
    <p>
        <h1><ins>Gallery</ins></h1>
    </p>
        <table/>
            <tr>
                <th><img src={Image2} width = {500} height={350}/></th>
                <th><img src={Image3} width = {500} height={350}/></th>
                <th><img src={Image4} width = {500} height={350}/></th>
            </tr>
            <tr>
                <th>Calla lily, carnation, daisy</th>
                <th>Silently chase away your worries</th>
                <th>Chrysanthemum, kalanchoe</th>
            </tr>
            <tr>
                <th><img src={Image5} width = {500} height={350}/></th>
                <th><img src={Image6} width = {500} height={350}/></th>
                <th><img src={Image7} width = {500} height={350}/></th>
            </tr>
            <tr>
                <th>Become your shield whenever you fall asleep</th>
                <th>Petals dance for our valediction</th>
                <th>And synchronize to your frozen pulsation</th>
            </tr>
            <tr>
                <th><img src={Image8} width = {500} height={350}/></th>
                <th><img src={Image9} width = {500} height={350}/></th>
                <th><img src={Image10} width = {500} height={350}/></th>
            </tr>
            <tr>
                <th>Take me to where your soul may live in peace</th>
                <th>Final destination</th>
                <th>Touch of your skin sympathetically brushed against</th>
            </tr>
            <tr>
                <th><img src={Image11} width = {500} height={350}/></th>
                <th><img src={Image12} width = {500} height={350}/></th>
                <th><img src={Image13} width = {500} height={350}/></th>
            </tr>
            <tr>
                <th>The shoulders you used to embrace</th>
                <th>Sparkling ashes drift along your flames</th>
                <th>And softly merge into the sky</th>
            </tr>
        </body>
      </div>
  )
}

export default Gallery
