import { SignUpParams, signInProps } from "@/utils/types";
import axios from "../axios"

export const SignIn = async ({email, password}: signInProps) => {
    try {
        const data = await axios.get(`/users/login?email=${email}&password=${password}`);
        return data;
    }
    catch(error) {
        console.log("Error", error);
    }
}

export const SignUp = async ({email, password, firstName, lastName, address1, state, postalCode, dateOfBirth, ssn, city}: SignUpParams) => {
    try {
        const data = await axios.post(`/users/register`, {email, password, firstName, lastName, address1, state, postalCode, dateOfBirth, ssn, city});
        return data;
    }
    catch(error) {
        console.log("Error", error);
    }
}