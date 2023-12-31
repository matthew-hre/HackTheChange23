import supabase from "@/components/SupabaseClient";

const addMessageToDatabase = async (message: string, fromUser: boolean) => {
  try {

    // insert to messages table in supabase where message is the message and is_from_user is true or false
    const { data, error } = await supabase.from("messages").insert([{ content: message, fromUser: fromUser }]);


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

export default addMessageToDatabase;
