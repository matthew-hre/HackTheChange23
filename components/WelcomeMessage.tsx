import ariana from "@/images/Ariana_icon.png";

function getGreetingBasedOnTime() {
  const currentHour = new Date().getHours();

  if (currentHour < 12 && currentHour > 4) {
    return "Good morning,";
  } else if (currentHour < 18) {
    return "Good afternoon,";
  } else {
    return "Good evening,";
  }
}

const getUserProfilePicture = () => {
  return "https://raw.githubusercontent.com/matthew-hre/HackTheChange23/main/images/Ariana_icon.png";
  // TODO: get user profile picture from supabase
};

const getUserName = () => {
  return "Ariana";
  // TODO: get user name from supabase
};

const WelcomeMessage = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col h-20 justify-between">
        <p className="font-bold text-xl">
          {getGreetingBasedOnTime()} <br />
          {getUserName()}!
        </p>
        <p className="font-thin text-sm">
          It's a wonderful day to be productive!
        </p>
      </div>
      <div>
        <img
          src={getUserProfilePicture()}
          className="h-20 w-20 rounded-full"
          alt="profile picture"
        />
      </div>
    </div>
  );
};

export default WelcomeMessage;
