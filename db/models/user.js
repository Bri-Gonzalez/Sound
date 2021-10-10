import mongoose from 'mongoose'
const Schema = mongoose.Schema

const User = new Schema(
  {
    firstname: { type: String, required: true, },
    lastname: { type: String, required: true, },
    email: { type: String, required: true, },
    password_digest: { type: String, requried: true, select: false },
  },
  { timestamps: true }
)

export default mongoose.model('users', User)
