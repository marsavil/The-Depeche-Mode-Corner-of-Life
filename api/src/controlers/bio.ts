import { Request, Response } from 'express'
import axios from 'axios'
import dotenv from 'dotenv'



dotenv.config()

const LAST_FM_KEY = process.env.LAST_FM_KEY

const apiUrl: string = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Depeche%20mode&api_key=${LAST_FM_KEY}&format=json`

//  INTERFACE
interface Bio {
  summary: string
  content: string
  external: string
}

export default async function getBio (_req: Request, res: Response): Promise<Bio | null> {
  try {
    const bio = await axios.get(apiUrl)
    const inBio: Bio = {
      summary: bio.data.artist.bio.summary,
      content: bio.data.artist.bio.content,
      external: `https://musicbrainz.org/artist/${bio.data.artist.mbid}`
    }
    console.log(inBio)
    res.status(200).json(inBio)
    return inBio
  } catch (error) {
    res.status(400).send(error)
    return null
  }
}
