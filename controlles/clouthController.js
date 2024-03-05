import clouthModel from "../model/clouthModel.js";

export const addClouth = async (req,res) =>{
  try {
    const addClouth = await clouthModel.create(req.body)
    
    res.status(201).json({success : true, message :"Clouths added successfully" , clouths : addClouth}) 
  } catch (error) {
   res.status(400).json({success : false, message :"Error while adding the clouths" , error:error.message}) 
  }
}


export const getclouth=async(req,res)=>{
  try {
    const clouths = await clouthModel.find()
    res.status(200).json({success : true , clouth : clouths})
  } catch (error) {
    
    res.status(400).json({success : false, message :"Error while adding the clouths" , error:error.message}) 
  }

}
export const getclouthById=async(req,res)=>{
  try {
  
    const clouth = await clouthModel.findById(req.params.id)
    // console.log(clouth)
    res.status(200).json({success : true , clouth : clouth})
  } catch (error) {
    
    res.status(400).json({success : false, message :"Error while adding the clouths" , error:error.message}) 
  }

}
