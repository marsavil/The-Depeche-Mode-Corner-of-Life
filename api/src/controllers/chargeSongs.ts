import fs from "fs"; // Importa el módulo 'fs' para trabajar con archivos en Node.js
import { Song } from "../models/song";

export default async function chargeSongs() {
  // Lee el contenido del archivo JSON
  const songsData = fs.readFileSync("D:\\Git Repositories\\DM\\api\\src\\songs/data.json", "utf8");

  // Parsea el contenido del archivo JSON a un objeto JavaScript
  const songs = JSON.parse(songsData);

  songs.map((s: any) => {
    if (s) {
      let song = new Song({
        title: s.title, 
        release: s.release,
        date: s.date,
        composer: s.composer,
        producer: s.producer,
        engineer: s.engineer,
        studio: s.studio,
      });
      song.save();
    }
  });
}
