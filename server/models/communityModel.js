const mongoose = require("mongoose");


const communitySchema = mongoose.Schema(
    {
        title: {
            type: 'string',
            required: true,
        },
        content: {
            type: 'string',
            required: true,
        },
        // pic: {
        //     type: 'string',
        //     default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        // },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        },
        {
            timestamps: true,
        }
    
);

const Post = mongoose.model("Post", communitySchema);

module.exports = Post;