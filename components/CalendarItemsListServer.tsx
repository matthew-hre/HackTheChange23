import { CalendarItemsListClient } from "@/components/CalendarItemsListClient";

import getEventsFromCalendar from "@/hooks/getEventsFromCalendar";

const CalendarItemsListServer = async () => {
  const events = await getEventsFromCalendar();

  return <CalendarItemsListClient events={events} />;
};

export default CalendarItemsListServer;
