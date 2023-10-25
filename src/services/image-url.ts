// Section 8- Building a Video Game Discovery App

// Lesson 14- Getting Optimized Images

// ACTUAL SITUATION.-
// This images are pretty big, so in slow connections will take time to load them. In this lesson We are going 
// --- to learn how to convert them to smaller formats without loosing definition to increase speed up the page load.

// From the 'useGames' component -(2)-> Create a new utility/service to modify the image URL (with the crop parameter
// inserted) called "image.URL.ts" in the 'services' folder (this one)

// 3.- In this module we´ll define a function "const getCroppedImageURL" with one parameter, which is the URL of
// --- type string, that will return another URL, don´t forget to export it.

// 4.- Now we´ll use the "const index" and assign it the 'indexOf' method on the 'url' variable to find the 
// --- start of the "media/" literal. 
// --- -(5)-> We must create also a 'const target' add the ".length" of this literal to find the place to 
// --- start the insertion, and then slice the 'url' from position 0 to "index", add the crop parameter and 
// --- the rest of the url after the slice(0, index). Then >-(6)-> return it.

// 7.- Now go to our "GameCards" component and call "getCroppedImageURL" with the original URL as parameter

const getCroppedImageURL = (url: string) => {   // <-(3)-<
    const target = "media/";   // <-(4)-<
    const index = url.indexOf(target) + target.length;   // <-(4)-<
       // <-(6)-< return it
       return url.slice(0, index) + "crop/600/400/" + url.slice(index);   // <-(5)-<
}

export default getCroppedImageURL;   // <-(3)-<