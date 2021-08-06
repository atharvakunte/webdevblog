const{ DateTime } = require('luxon');

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/main.css");
    eleventyConfig.addPassthroughCopy("./src/media");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addFilter("postDate",(dateobj)=>{
        return DateTime.fromJSDate(dateobj).toLocaleString(DateTime.DATE_MED);
    } );
    return{
        dir:{
            input:"src",
            output:"public"
        }
    }
}