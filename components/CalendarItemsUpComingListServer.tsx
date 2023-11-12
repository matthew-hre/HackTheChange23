import { CalendarItemsListClient } from "@/components/CalendarItemsListClient";

import getEventsFromUpComingCalendar from "@/hooks/getEventsFromUpComingCalendar";

const CalendarItemsListServer = async () => {
  const events = await getEventsFromUpComingCalendar();

  return <CalendarItemsListClient events={events} />;
};

export default CalendarItemsListServer;
