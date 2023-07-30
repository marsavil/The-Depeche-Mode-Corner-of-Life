import { Song } from "../models/song";
import { Request, Response } from 'express'


  export async function getSong(req:Request, res:Response){
    console.log("esta ejecutando getSongs")
    try {
      const { id } = req.params;
      const song = await Song.findById(id);
      res.status(201).json(song);
    } catch (error:any) {
      res.json({message: error.message});
    }
  }
  export async function getSongs(_req: Request, res: Response){
    try {
      const songs = await Song.find();
      res.status(201).json(songs)
    } catch (error: any) {
      res.json({message: error.message})
    }
  }
  export async function getSongsByTittle(req: Request, res: Response){
    try {
      const { tittle } = req.params;
      const song = await Song.find({ tittle: { $regex: tittle, $options: "i" } });
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
    export async function getSongTittles(_req: Request, res: Response){
      try {
        const songs = await Song.find();
        const tittles = songs.map((s)=>{ return s.tittle} )
        res.json(tittles)
      } catch (error:any) {
        res.json({message: error.message})
      }
    }
    export async function getSongByFavourite(_req: Request, res: Response) {
      try {
        const top = await Song.find({favourite:{$gte : 1 }}).sort({ favourite: -1 }).limit(10)
        console.log(top.length)
        res.status(200).json(top)
      } catch (error:any) {
        res.send(error.message)
      }
    }

