import { Song } from "../models/song";
import { Devotee } from "../models/devotee";
import { Request, Response } from 'express';


  export async function getSong(req:Request, res:Response){
    console.log('get song')
    try {
      const { id } = req.params;
      const song = await Song.findById(id);
      res.status(201).json(song);
    } catch (error:any) {
      res.json({message: error.message});
    }
  }
  export async function getSongs(_req: Request, res: Response){
    console.log('get songs')
    try {
      const songs = await Song.find();
      res.status(201).json({data: songs, length: songs.length})
    } catch (error: any) {
      res.json({message: error.message})
    }
  }
  export async function getSongsByTitle(req: Request, res: Response){
    try {
      const { title } = req.params;
      console.log(title)
      const song = await Song.find({ title: { $regex: title, $options: "i" } });
      res.json(song)
    } catch (error:any) {
      res.json({message: error.message})
    }
  }
  export async function getSongsByAlbum(req: Request, res: Response){
    try {
      const { album } = req.params;
      const song = await Song.find({ release: { $regex: album, $options: "i" } });
      res.json(song)
    } catch (error:any) {
      res.json({message: error.message})
    }
  }
  export async function getSongsByProducer(req: Request, res: Response){
    try {
      const { producer } = req.params;
      const song = await Song.find({ producer: { $regex: producer, $options: "i" } });
      res.json(song)
    } catch (error:any) {
      res.json({message: error.message})
    }
  }
    export async function getSongTitles(_req: Request, res: Response){
      try {
        const songs = await Song.find();
        const titles = songs.map((s)=>{ return s.title} )
        res.json(titles)
      } catch (error:any) {
        res.json({message: error.message})
      }
    }

    export async function addSongToFavs(req: Request, res: Response){
      try {
        const { user, song } = req.body;
        const devotee = await Devotee.findById(user);
        const songDb = await Song.findById(song);
        if ( songDb ) {
          songDb.favourite++;
          songDb.save();
        }
        if ( devotee && songDb) {
          devotee.favouriteSongs.push(songDb.title)
          devotee.save();

        }
        console.log(devotee?.userName)
        console.log(songDb?.title)

        res.json({ message: `${songDb?.title} has been added to ${devotee?.userName}'s favourite songs`})
      } catch (error: any) {
        res.json({message: error.message})
      }
    }

    export async function getTopFavourite(req: Request, res: Response) {
      try {
        const { rank } = req.params;
        const top = await Song.find({favourite:{$gte : 1 }}).sort({ favourite: -1 }).limit(Number(rank))
        console.log(top.length)
        res.status(200).json(top)
      } catch (error:any) {
        res.send(error.message)
      }
    }

