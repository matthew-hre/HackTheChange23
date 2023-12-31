import CalendarItemsTodayListServer from "@/components/CalendarItemsTodayListServer";
import CalendarItemsUpComingListServer from "@/components/CalendarItemsUpComingListServer";
import ChatInterfaceServer from "@/components/ChatInterfaceServer";
import WelcomeMessage from "@/components/WelcomeMessage";
import NavBar from "@/components/NavBar";

export default async function Index() {
  function humanreadableDate(date: Date) {
    // Create a new Date object for the current date and time
    const today = new Date();

    // Array of month names
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the day, month, and year from the date object
    const day = date.getDate(); // Day (1-31)
    const month = months[date.getMonth()]; // Month name
    const year = date.getFullYear(); // Year

    // Format the date as a string in the format "Month DD, YYYY"
    const readableDate = `${month} ${day}, ${year}`;

    // Output the formatted date
    return readableDate;
  }

  return (
    <>
      <div className="h-full overflow-auto">
        <div className="p-5 mb-28">
          <WelcomeMessage />
          <div className="font-semibold mt-5">
            Today's Plan - {humanreadableDate(new Date())}
            <CalendarItemsTodayListServer />
          </div>
          <div className="font-semibold">
            Upcoming Tasks
            <CalendarItemsUpComingListServer />
          </div>
        </div>
      </div>
      <NavBar />
    </>

  );
}
