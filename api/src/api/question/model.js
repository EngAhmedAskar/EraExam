import mongoose, { Schema } from 'mongoose'
const random = require('mongoose-simple-random');


 
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
questionSchema.plugin(random);

const model = mongoose.model('question', questionSchema)

export const schema = model.schema
export default model