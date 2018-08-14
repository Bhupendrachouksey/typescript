var facebook = /** @class */ (function () {
    function facebook(name, email, facebookId, otherName, friends, familyMembers, work, education, dob, age, phone, livesIn, gender, aboutYou, homeTown) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getFacebookId = function () {
            return _this.facebookId;
        };
        this.getOtherName = function () {
            return _this.otherName;
        };
        this.getNumber0fFriends = function () {
            return _this.friends;
        };
        this.getFamilyMember = function () {
            return _this.familyMembers;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getEducationDetails = function () {
            return _this.education;
        };
        this.getDateOfBirth = function () {
            return _this.dob;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getPhoneNumber = function () {
            return _this.phone;
        };
        this.getLivesIn = function () {
            return _this.livesIn;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getAboutYou = function () {
            return _this.aboutYou;
        };
        this.getHomeTown = function () {
            return _this.homeTown;
        };
        this.lifeEvents = function () {
            console.log("Born on 21 februay 1992. Moved to Noida, India. Started a new job with NTTData Global services");
        };
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
    ;
    return facebook;
}());
var user = new facebook("Sanjay Singhaniya", "sanjay@gmail.com", "sanjay@facebook.com", "Sanju", 476, 20, "NTTDATA Services", "ABC College of Engineering", "21/02/1992", 25, 8888888888, "Noida", "Male", "I never dreamed about success, just worked for it...", "Indore");
var _name = user.getName();
console.log(_name);
var email = user.getEmail();
console.log(email);
var friends = user.getNumber0fFriends();
console.log(friends);
var education = user.getEducationDetails();
console.log(education);
var bday = user.getDateOfBirth();
console.log(bday);
var age = user.getAge();
console.log(age);
var phone = user.getPhoneNumber();
console.log(phone);
var otherName = user.getOtherName();
console.log(otherName);
var gender = user.getGender();
console.log(gender);
var home = user.getHomeTown();
console.log(home);
var facebookId = user.getFacebookId();
console.log(facebookId);
var member = user.getFamilyMember();
console.log(member);
var working = user.getWork();
console.log(working);
var lives = user.getLivesIn();
console.log(lives);
var about = user.getAboutYou();
console.log(about);
var lifeEvents = user.lifeEvents();
lifeEvents;
