/* 
You have volunteered your time to a local political candidate, 
Elizabeth Sanger, who wants to become a US representative in Congress for your district. 
Unfortunately, the team discovered that you're a software developer, so they have begged 
you to build an application that lets them track volunteers, and store information about Elizabeth 
and her campaign.

Your job is to define the different objects and arrays, their structure, 
and the corresponding properties for each, to represent the following information about 
Elizabeth's campaign.

Her congressional district (you can use yours here)
Her platform statements for the following issues.
    Taxes
    Jobs
    Infrastructure
    Health care
    Crime and enforcement
URL for donation form
Calendar of events
Volunteer information
    Name
    Address
    Email
    Phone number
    Availability
What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
Biography
Image gallery
    Head shot
    Picture of family
    Picture of constituents
Mission statement
URL for registering to vote
*/
const campaign = {
    congressional_district: "5th",
    platform_issues: {
        Taxes: "tax all you peasants",
        Jobs: "work suckas",
        Infrastructure: "who needs roads?",
        health_care: "medicare for alllllll",
        crime_and_enforcement: "I police myself"
    },
    url: "donation.com",
    calendar_events: ["golf-day with kids"],
    vol_info: {
        name: "Jameka",
        address: "lala land",
        email: "jameka@gmail.com",
        phone_number: "1234567",
        availability: ["tues"],
        tasks: ["writer"]
    },
    biography: ["born in Germany"], // keeping as an array 
    image_gallery: {
        head_shot: ["image1"],
        family: ["image2"],
        constituents: ["image3"]
    },
    mission: "Love people",
    vote_url: "vote.org",
};

// ADVANCED CHALLENGE
/*

After you have defined all the objects for representing the data about Elizabeth's campaign, 
write a corresponding function for each one whose purpose is to change the state of the object. 
Then use your functions to modify the existing data.

Things to think about.

Am I modifying an array? Then the function argument should be added to the target array with 
    the push() method.
Am I modifying an object? Then I should pass both the key name to be modified, 
    and its corresponding value.
This challenge is for you to practice writing functions, so the more you can write, the better. 
It helps make neural connections in your brain at this point since you're still building your 
software vocabulary.

*/

function addToImageGallery (newImage, type) {
    if (type === 'head_shot'){
        campaign.image_gallery.head_shot.push(newImage);
    }else if (type === 'family'){
        campaign.image_gallery.family.push(newImage);
    }else {
        campaign.image_gallery.constituents.push(newImage);
    }
    console.table(campaign.image_gallery)
}

function changeBiography (newBiography) {
    campaign.biography.push(newBiography);
    console.log(campaign.biography);
}

function changePlatform (topic, newPlatformStatement) {
    for (key in campaign.platform_issues){
        if (key === topic){
            campaign.platform_issues[topic] = newPlatformStatement
        }
    }
    // campaign.platform_issues.topic = newPlatformStatement
    console.table(campaign.platform_issues)
}

addToImageGallery("hello", "family");
changeBiography("hello");
changePlatform("Jobs", "equal shit");
