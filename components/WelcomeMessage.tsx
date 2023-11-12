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
  return "https://avatars.githubusercontent.com/u/46040643?v=4";
  // TODO: get user profile picture from supabase
};

const getUserName = () => {
  return "Ariana";
  // TODO: get user name from supabase
};

const WelcomeMessage = () => {
  return (
    <div className="flex justify-between debug">
      <div className="flex flex-col h-24 justify-between">
        <p className="font-bold text-2xl">
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
          className="h-24 w-24 rounded-full"
          alt="profile picture"
        />
      </div>
    </div>
  );
};

export default WelcomeMessage;
