import { Devotee } from "../models/devotee";
import { Request, Response } from 'express'


  export async function getSong(req:Request, res:Response){
    try {
      const { id } = req.params;
      const devotee = await Devottee.findById(id);
      res.status(201).json(devotee);
    } catch (error:any) {
      res.json({message: error.message});
    }
  }