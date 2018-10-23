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

})

questionSchema.methods = {
  view (full) {
    let view = {}
    let fields = ['_id', 'description', 'is_active']

    if (full) {
      fields = ['_id', 'description', 'is_active']
    }

    fields.forEach((field) => { view[field] = this[field] })

    return view
  },

  
}
const model = mongoose.model('question', questionSchema)

export const schema = model.schema
export default model