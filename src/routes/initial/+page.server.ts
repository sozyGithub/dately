import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    initial: async(event) => {
        throw redirect(302, '/dates');
    }
};