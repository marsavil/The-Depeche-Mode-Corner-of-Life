import { Devotee } from "../models/devotee";
import { Request, Response } from 'express'


  export async function getDevotee(req:Request, res:Response){
    const { id } = req.params;
    try {
      if( id ){
        const devotee:any = await Devotee.findById(id);
        res.status(201).json(devotee);
      }else {
        const devotees = await Devotee.find();
        res.status(201).json({ data: devotees, length: devotees.length })
      }
      
    } catch (error:any) {
      res.json({message: error.message});
    }
  }

  