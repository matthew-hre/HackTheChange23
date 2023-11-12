import { CalendarItemsListClient } from "@/components/CalendarItemsListClient";

import getEventsFromTodayCalendar from "@/hooks/getEventsFromTodayCalendar";

const CalendarItemsListServer = async () => {
  const events = await getEventsFromTodayCalendar();

  return <CalendarItemsListClient events={events} />;
};

export default CalendarItemsListServer;
