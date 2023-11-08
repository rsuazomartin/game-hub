// Section 8- Building a Video Game Discovery App

// Lesson 28- Handling Games Without an Image

// ACTUAL SITUATION.- We need to handle those games without an image so they display properly.

// 1.- Grab the file 'no-image-placeholder' from the resources compressed file and place it under 
// --- the assets folder. Now open the 'image-url.ts' component (This one).

// 2.- Because this is a static asset, we´re going deploy it with our application, so we´ll import it 
// --- as a regular module on the top. >-(2)->

// >-(2)-> import 'noImage' from the 'no-image-placeholder.webp' file in the assets folder, and return
// --- 'noImage' when there´s no image available for the game

// TESTING OUR APP... Very good !!! 

// END OF LESSON.- Let´s commit our changes under "Handle games with no image"


import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageURL = (url: string) => {   
    // >-(2.a)-> return noImage when the url is not truthy
    if (!url) return noImage;

    const target = "media/";   
    const index = url.indexOf(target) + target.length;   
       return url.slice(0, index) + "crop/600/400/" + url.slice(index);   
}

export default getCroppedImageURL;   