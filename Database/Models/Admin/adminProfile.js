import mongoose from "mongoose";

const { Schema } = mongoose;

const adminProfileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Admin', // Referencing the User model
    },
    created_at: { type: Date, default: Date.now },
    fullName: {
        type: String,
        required: true
    },
    age : {
        type : Number,
        required : true,
    },
    profile_photo : {
        data : Buffer,
        contentType: String
    },
    
});

const AdminProfile = mongoose.model("AdminProfile", adminProfileSchema);

export default AdminProfile;
