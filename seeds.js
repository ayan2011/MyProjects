var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data =[
    {
        name: "Shivpuri",
        image: "https://ihplb.b-cdn.net/wp-content/uploads/2015/05/shivpuri.jpg",
        description: "Shivpuri, 16 km from Rishikesh, is a hub of campers and adventure-seekers. The camps are settled on the white-sand river beach, by the Ganges on one side and its tributary on the other. Jungle walks, kayaking, volley-ball, river rafting, mountaineering, jungle trekking, bungee jumping and other such adventure await you. And when you simply want to unwind around the campfire, the soothing gurgles of the river and chirps of beautiful birds will keep you company. From basic to luxury tents, you have options to choose from. You will easily find accommodation and packages that will best suit you."
    },
     {
        name: "Corbett",
        image: "https://ihplb.b-cdn.net/wp-content/uploads/2015/05/corbett.jpg",
        description: "Acclaimed for the population of tigers in all of India, this surely is an ideal place for camping for the lovers of wildlife and wilderness. The buffer zone of corbett national park is where you can find options for camps, from luxurious to basic. There are mainly two types of tented accommodations, namely pakka cottage camps and temporary camps. Near the Sitabani Forest area is where you can find temporary ones. Here, you can enjoy activities such as elephant ride, bird-watching, swimming and much more."
    },
     {
        name: "Nainital",
        image: "https://ihplb.b-cdn.net/wp-content/uploads/2015/05/nainital.jpg",
        description: "Indeed a popular hill-station of India, located on the foothills of the outer Himalayas, Nainital with its glistening pear-shaped lake and scenic beauty has and continues to attract a myriad of travelers. Easy tented accommodation is available, letting you breathe fresh air. Other than boating and camping in Nainital there are mélange of activities for you to try, right from trekking to rafting and paragliding to indulge in. Adventure camps of Nainital provide guides and are normally under budget."
    }
    ];
function seedDB(){
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!!!");
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("added a campground");
                Comment.create(
                    {
                        text: "This place is great, but I wish there internet",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                       
                    });
            }
        });
      });
    });
    
}

module.exports = seedDB;