import express from 'express'
import { addClouth, getclouth, getclouthById } from '../controlles/clouthController.js'
const clouthRouter = express.Router()

clouthRouter.post('/addclouth', addClouth)

clouthRouter.get("/getclouths",getclouth)
clouthRouter.get("/getclouths/:id",getclouthById)


export default clouthRouter