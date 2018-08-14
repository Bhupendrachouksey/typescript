class facebook{

    name : string;
    email: string;
    facebookId: string;
    otherName: string;
    friends: number;
    familyMembers: number;
    work: string;;
    education : string;
    dob : string;
    age : number;
    phone: number;
    livesIn: string;
    gender: string;
    aboutYou: string;
    lifeEvent: string;
    homeTown: string;



    constructor(name : string,
        email: string, facebookId : string, otherName: string,
        friends : number,familyMembers: number, work: string,
        education : string,
        dob : string,
        age : number,
        phone: number, livesIn: string, gender: string, aboutYou: string, homeTown: string){
        this.name = name;
        this.friends = friends;
        this.education = education;
        this.dob = bday;
        this.age = age;
        this.phone = phone;
        this.email = email;
        this.aboutYou = aboutYou;
        this.facebookId = facebookId;
        this.gender = gender;
        this.familyMembers = familyMembers;
        this.homeTown = homeTown;
        this.work = work;
        this.otherName = otherName;
        this.livesIn = livesIn;
    }

    getName = () =>{
        return this.name;
    }

    getEmail = () =>{
        return this.email;
    }

    getFacebookId = () => {
        return this.facebookId;
    }

    getOtherName = () => {
        return this.otherName;
    }

    getNumber0fFriends = () =>{
        return this.friends;
    }

    getFamilyMember = () => {
        return this.familyMembers;
    }

    getWork = () => {
        return this.work;
    }

    getEducationDetails = () =>{
        return this.education;
    }

    getDateOfBirth = () =>{
        return this.dob;
    }

    getAge = () =>{
        return this.age;
    }

    getPhoneNumber = () =>{
        return this.phone;
    }

    getLivesIn = () => {
        return this.livesIn;
    }

    getGender = () => {
        return this.gender;
    }

    

    getAboutYou = () => {
        return this.aboutYou;
    }

    getHomeTown = () => {
        return this.homeTown;
    }

    lifeEvents = () => {
        console.log("Born on 21 februay 1992. Moved to Noida, India. Started a new job with NTTData Global services");
    }


}

let user = new facebook("Sanjay Singhaniya","sanjay@gmail.com","sanjay@facebook.com","Sanju", 476, 20, "NTTDATA Services", "ABC College of Engineering","21/02/1992",25,8888888888, "Noida", "Male","I never dreamed about success, just worked for it...", "Indore")

let _name = user.getName();
console.log(_name);

let email = user.getEmail();
console.log(email);

let friends = user.getNumber0fFriends();
console.log(friends);

let education = user.getEducationDetails();
console.log(education);

let bday = user.getDateOfBirth();
console.log(bday);

let age = user.getAge();
console.log(age);

let phone = user.getPhoneNumber();
console.log(phone);

let otherName = user.getOtherName();
console.log(otherName);

let gender = user.getGender();
console.log(gender);

let home = user.getHomeTown();
console.log(home);

let facebookId = user.getFacebookId();
console.log(facebookId);

let member = user.getFamilyMember();
console.log(member);

let working = user.getWork();
console.log(working);

let lives = user.getLivesIn();
console.log(lives);

let about = user.getAboutYou();
console.log(about);

let lifeEvents = user.lifeEvents();
lifeEvents;
