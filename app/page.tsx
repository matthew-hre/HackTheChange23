import CalendarItemsListServer from "@/components/CalendarItemsListServer";
import WelcomeMessage from "@/components/WelcomeMessage";

export default async function Index() {
  return (
    <div className="bg-background1 w-full h-[100dvh] sm:w-fit sm:aspect-[9/16] sm:h-[100dvh]">
      <div className="p-5">
        <WelcomeMessage />
        <div className="font-semibold">
          Today
          <CalendarItemsListServer />
        </div>
        <div className="font-semibold">Upcoming Tasks</div>
      </div>
    </div>
  );
}
