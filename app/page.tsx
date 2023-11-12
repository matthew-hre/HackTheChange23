import CalendarItemsTodayListServer from "@/components/CalendarItemsTodayListServer";
import CalendarItemsUpComingListServer from "@/components/CalendarItemsUpComingListServer";
import WelcomeMessage from "@/components/WelcomeMessage";

export default async function Index() {
  return (
    <div className="bg-background1 w-full h-[100dvh] sm:w-fit sm:aspect-[9/16] sm:h-[100dvh] overflow-auto">
      <div className="p-5">
        <WelcomeMessage />
        <div className="font-semibold mt-5">
          Today
          <CalendarItemsTodayListServer />
        </div>
        <div className="font-semibold">
          Upcoming Tasks
          <CalendarItemsUpComingListServer />
        </div>
      </div>
    </div>
  );
}
