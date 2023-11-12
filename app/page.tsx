import CalendarItemsListServer from "@/components/CalendarItemsListServer";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  function getGreetingBasedOnTime() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12 && currentHour > 4) {
      greeting = "Good morning,";
    } else if (currentHour < 18) {
      greeting = "Good afternoon,";
    } else {
      greeting = "Good evening,";
    }

    return greeting;
  }

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="bg-background1 w-full h-[100dvh] sm:w-fit sm:aspect-[9/16] sm:h-[100dvh]">
      <div className="p-5">
        <div className="flex justify-between debug">
          {" "}
          {/*Welcome Message */}
          <div className="flex flex-col h-24 justify-between">
            <p className="font-bold text-2xl">
              {getGreetingBasedOnTime()} <br /> Ariana!
            </p>
            <p className="font-thin text-sm">
              It's a wonderful day to be productive!
            </p>
          </div>
          <div>
            {/* show user photo */}
            <div className="rounded-full h-24 w-24 bg-primary"></div>
          </div>
        </div>
        <div className="font-semibold">
          Today
          <CalendarItemsListServer />
        </div>
        <div className="font-semibold">Upcoming Tasks</div>
      </div>
    </div>
  );
}
