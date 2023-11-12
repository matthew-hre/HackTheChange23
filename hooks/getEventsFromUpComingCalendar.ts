import SupabaseClient from "@/components/SupabaseClient";

export default async function getEventsFromUpComingCalendar() {
	//get todays date
	const today = new Date();

	try {
		const { data, error } = await SupabaseClient.from("calendar_events")
			.select("*")
			.order("start_datetime", { ascending: true })
			.filter("start_datetime", "gt", today.toISOString());
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
