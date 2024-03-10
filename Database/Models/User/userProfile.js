import mongoose from "mongoose";

const { Schema } = mongoose;

const userProfileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Referencing the User model
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

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
