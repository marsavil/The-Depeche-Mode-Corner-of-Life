import songs from "../songs/songs";
import { Song } from "../models/song";

export default async function chargeSongs() {
  songs.map((s: any) => {
    if (s) {
      let song = new Song({
        tittle: s.tittle,
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
