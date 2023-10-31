import { Devotee } from "../models/devotee";
import { Song }from '../models/song'
import { Request, Response } from "express";
import axios from "axios";
import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { getRandomArbitrary } from "../functions";
dotenv.config()
const code = "añlsdkfjqpw3ri5781";
const password = "contraseña";
const ROUNDS = Number(process.env.ROUNDS)

const songs = [
  "New Life",
  "Shout",
  "Just Can't Get Enough",
  "Any Second Now",
  "I Sometimes Wish I Was Dead",
  "Ice Machine",
  "Dreaming of me",
  "Nodisco",
  "What's Your Name",
  "Photographic",
  "Tora! Tora! Tora!",
  "Big Muff",
  "See You",
  "Now, This is Fun",
  "The Meaning of Love",
  "Oberkorn(It's a Small Town)",
  "Leave in Silence",
  "Excerpt From My Secret Garden",
  "Further Excerpt From My Secret Garden",
  "My Secret Garden",
  "Puppets",
  "Boys Say Go!",
  "Satellite",
  "A Photograph of You",
  "Shouldn't Have Done That",
  "The Sun and the Rainfall",
  "Get the Balance Right!",
  "The Great Outdoors!",
  "Everything Counts",
  "Work Hard",
  "Love in Itself",
  "More Than a Party",
  "Pipeline",
  "Two Minutes Warning",
  "Shame",
  "The Landscape is Changing",
  "Told You So!",
  "And Then...",
  "Fools",
  "Love in Itself.4 (The Lounge Version)",
  "People are People",
  "In Your Memoryd",
  "Master and Servant",
  "(Set Me Free) Remotivate Me",
  "Are People People?",
  "Something To Do",
  "Lie To Me",
  "It Doesn't Matter",
  "Monument",
  "Somebody",
  "Nothing to Fear",
  "Blasphemous Rumours",
  "Shake the Disease",
  "Flexible",
  "It's Called a Heart",
  "Fly on the Windscreen",
  "Stripped",
  "But not Tonight",
  "Breathing in Fumes",
  "Black Day",
  "Black Celebration",
  "Fly on The Windscreen - Final",
  "A Question of Lust",
  "Sometimes",
  "It Doesn't Matter Two",
  "A Question of Time",
  "Here is The House",
  "World Full of Nothing",
  "Dressed in Black",
  "New Dress",
  "Christmas Island ",
  "Strangelove",
  "Pimpf",
  "Agent Orange",
  "Never Let Me Down Again",
  "Pleasure Little Treasure",
  "To Have And To Hold",
  "The Things You Said",
  "Sacred",
  "Little 15",
  "I Want You Now",
  "Nothing",
  "Interlude #1: Mission Impossible",
  "Behind the Wheel",
  "Route 66",
  "Stjarna",
  "Sonata N° 14 in C#m 'Moonlight Sonata'",
  "If You Want",
  "Stories of Old",
  "Enjoy The Silence",
  "Memphisto",
  "Sibeling",
  "Sweetest perfection",
  "Halo",
  "Waiting for the night",
  "Blue Dress",
  "Clean",
  "World in my eyes",
  "Kaleid",
  "Happiest Girl",
  "Policy of Truth",
  "Sea of Sin",
  "Death’s door",
  "I Feel You",
  "One Caress",
  "Mercy in You",
  "Judas",
  "Get Right With Me",
  "Rush",
  "Higher Love",
  "Walking in My Shoes",
  "My Joy",
  "Condemnation",
  "In Your Room",
  "Barrel of a Gun",
  "Painkiller",
  "It's no Good",
  "Slowblow",
  "The Love Thieves",
  "Uselink",
  "Sister of Night",
  "Jazz Thieves",
  "Freestate",
  "The Bottom Line",
  "Insight",
  "Home",
  "Useless",
  "Surrender",
  "Only When I Lose Myself",
  "Headstar",
  "Dream On",
  "Dangerous",
  "Personal Jesus"
]


export async function chargeDevotees(_req: Request, res: Response){
  const people = await axios.get("https://api.generadordni.es/v2/profiles/person?limit=10");
  const passwordHasshed= await bcrypt.hash(password, ROUNDS)
  let count = 0
  people.data.forEach((p: any) => {
    let favSongs = [];
    for (let i = 0; i < 10; i++) {
      favSongs.push(songs[getRandomArbitrary(0, songs.length)]);
    }
    let devotee = new Devotee({
      Name: p.name,
      lastName: p.surname, 
      userName: p.username,
      email: p.email,
      password: passwordHasshed,
      favouriteSongs: favSongs,
      image: "https://res.cloudinary.com/dlzp43wz9/image/upload/v1689692354/136-1366211_group-of-10-guys-login-user-icon-png_xuupui.jpg", 
      country: "Argentina",
      verified: true,
      test: true, 
      code
    })
    devotee.save();
    favSongs.forEach(async(s) => {
      let song = await Song.findOne({tittle: s})
      console.log(song);
      if ( song ){
        song.favourite =+ 1;
        song.save();
      }


    })
    count ++
  })
  return res.send({message: ` ${count} Devotees de prueba cargados a la BD`})
}
export async function deleteDevDevotees(_req: Request, res: Response){
  try {
    const devotees = await Devotee.find({ test: true })
    devotees.forEach((d:any) => d.deleteOne())
    return res.send({message: "todos los devotees de prueba fueron eliminados de la BD"})
  } catch (error:any) {
    return res.send(error)
  }

}