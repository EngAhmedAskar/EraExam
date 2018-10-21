import mongoose, { Schema } from 'mongoose'

 
const questionSchema = new Schema({
  description: {
    type: String,
    required: true,
    unique: true,
  },
  is_active: {
    type: Boolean,
    required: true
  },
  name: {
    type: String,
    index: true,
    trim: true
  }
})

const model = mongoose.model('question', questionSchema)

export const schema = model.schema
export default model