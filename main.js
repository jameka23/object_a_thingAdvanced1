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
    platform_issues: ["Taxes", "Jobs", "Infrastructure", "Health Care", "Crime and Enforcement"],
    url: "donation.com",
    calendar_events: [],
    vol_info = {
        name: "",
        address: "",
        email: "",
        phone_number: "",
        availability: [],
        tasks: []
    },
    biography: [], // keeping as an array 
    image_gallery = {
        head_shot: [],
        family: [],
        constituents: []
    },
    mission: "",
    vote_url: "",
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
}

function changeBiography (newBiography) {
    campaign.biography.push(newBiography);
}

function changePlatform (topic, newPlatformStatement) {
    for (let i = 0; i < campaign.platform_issues.length; i++){
        if (topic === campaign.platform_issues[i]){
            campaign.platform_issues[i] = newPlatformStatement
        }
    }
}