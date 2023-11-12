import { CalendarItemsListClient } from "@/components/CalendarItemsListClient";

import getEventsFromTodayCalendar from "@/hooks/getEventsFromTodayCalendar";

const CalendarItemsListServer = async () => {
  const events = await getEventsFromTodayCalendar();

  return events.length > 0 ? <CalendarItemsListClient events={events} showdate={false} /> :
    <div className="text-center font-normal py-3">
      No Events Today
    </div>;
};

export default CalendarItemsListServer;
