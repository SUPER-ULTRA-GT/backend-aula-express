import { supabase } from "./supabaseClient";

async function getCoffeeBreak () {
    try {
        const { data, error } = await supabase
            .from('coffe_sexta')
            .select('*');

        if (error) {
            console.error()
        }
    }
}