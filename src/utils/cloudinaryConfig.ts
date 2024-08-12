const cloudinary = require('cloudinary').v2;
const uploadImage = async (imagePath:any) => {

    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };

    try {
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result);
        return result.url;
    } catch (error) {
        console.error(error);
    }
};

export default uploadImage