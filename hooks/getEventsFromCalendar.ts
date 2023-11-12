import SupabaseClient from "@/components/SupabaseClient";

export default async function getEventsFromCalendar() {
  try {
    const { data, error } = await SupabaseClient.from("calendar_events").select(
      "*"
    );
    if (error) {
      console.error(error);
      throw error;
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
