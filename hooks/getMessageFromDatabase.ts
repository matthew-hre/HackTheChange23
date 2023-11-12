import supabase from "@/components/SupabaseClient";

const getMessageFromDatabase = async () => {
  try {

    // insert to messages table in supabase where message is the message and is_from_user is true or false
    const { data, error } = await supabase.from("messages").select("*").order("id", { ascending: false });

    // console.log(data)

    if (error) {
      console.error(error);
      throw error;
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getMessageFromDatabase;
