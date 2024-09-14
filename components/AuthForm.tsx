"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import {bank} from "@/icons"
import "@/css/authForm.css"
import { useRouter } from "next/navigation" 
import { SignIn, SignUp } from '@/lib/actions/user.actions'
// import useRecaptchaV3 from "@/utils/recaptchaV3"
import Cookie from "js-cookie"

const AuthForm = ({type}: {type: string}) => {
    const router = useRouter();
    const [user, setUser] = React.useState<null | string>(null);
    const [errors, setErrors] = React.useState({ name: "", lastname: "", email: "", password: "", address: "", state: "", code: "", date: "", ssn: "", city: "" });
    // const executeRecaptcha = useRecaptchaV3("6LcLZd0pAAAAAEXPUOgyQuTlYmN2Ag4mbgKiDq4B");
    // form
    const [email, setEmail] = React.useState<null | string>(null);
    const [password, setPassword] = React.useState<null | string>(null);
    const [lastName, setLastName] = React.useState<null | string>(null);
    const [name, setName] = React.useState<null | string>(null);
    const [address, setAddress] = React.useState<null | string>(null);
    const [state, setState] = React.useState<null | string>(null);
    const [code, setCode] = React.useState<null | string>(null);
    const [date, setDate] = React.useState<null | string>(null);
    const [ssn, setSsn] = React.useState<null | string>(null);
    const [city, setCity] = React.useState<null | string>(null);

    const emailSet = (value: string) => {
        if(!/^[A-Za-z-0-9\-_[\]()!;:&^%$#?]+@[a-z]{2,6}\.[a-z]{2,6}$/.test(value)) { setErrors({...errors, email: "email"}); }
        else { setErrors({...errors, email: "OK"}); setEmail(value); }
    }
    const passwordSet = (value: string) => {
        if(!/^[A-Za-z0-9-_?!#$%^&*()+]{8,}$/.test(value)) { setErrors({...errors, password: "password"}); }
        else { setErrors({...errors, password: "OK"}); setPassword(value); }
    }
    const nameSet = (value: string) => {
        if(!/^[A-Z]{1}[a-z0-9]{2,}$/.test(value)) { setErrors({...errors, name: "name"}) }
        else { setErrors({...errors, name: "OK"}); setName(value); }
    }
    const lastnameSet = (value: string) => {
        if(!/^[A-Z]{1}[a-z0-9]{2,}$/.test(value)) { setErrors({...errors, lastname: "lastname"}) }
        else { setErrors({...errors, lastname: "OK"}); setLastName(value); }
    }
    const addressSet = (value: string) => {
        if(value.length == 0 || value.length > 50) { setErrors({...errors, address: "address"}) }
        else { setErrors({...errors, address: "OK"}); setAddress(value); }
    }
    const citySet = (value: string) => {
        if(value.length == 0 || value.length > 50) { setErrors({...errors, city: "city"}) }
        else { setErrors({...errors, city: "OK"}); setCity(value); }
    }
    const stateSet = (value: string) => {
        if(!/^[A-Z]{2}$/.test(value)) { setErrors({...errors, state: "state"}) }
        else { setErrors({...errors, state: "OK"}); setState(value); }
    }
    const codeSet = (value: string) => {
        if(!/^[0-9]{3,6}$/.test(value)) { setErrors({...errors, code: "code"}) }
        else { setErrors({...errors, code: "OK"}); setCode(value); }
    }
    const dateSet = (value: string) => {
        if(!/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(value)) { setErrors({...errors, date: "date"}) }
        else { setErrors({...errors, date: "OK"}); setDate(value) }
    }
    const ssnSet = (value: string) => {
        if(!/^[0-9]{3,}$/.test(value)) { setErrors({...errors, ssn: "ssn"}) }
        else { setErrors({...errors, ssn: "OK"}); setSsn(value); }
    }

    const submit = async () => {
        // const token = await executeRecaptcha("login");
        try {
            if(type === "sign-in" && email && password) {
                const resp: any = await SignIn({email, password});
                if(resp.data) {
                    Cookie.set("token", resp.data.token, {expires: 30, secure: true, sameSite: "none"});
                    Cookie.set("id", resp.data.id, {expires: 30, secure: true, sameSite: "none"});
                    Cookie.set("firstname", resp.data.firstname, {expires: 30, secure: true, sameSite: "none"});
                    Cookie.set("email", resp.data.email, {expires: 30, secure: true, sameSite: "none"});
                    Cookie.set("lastname", resp.data.lastname, {expires: 30, secure: true, sameSite: "none"});
                }
            }
            if(type === "sign-up" && email && password && name && lastName && address && state && code && date && ssn && city) {
                const newUser: any = await SignUp({email, password, firstName: name, lastName, address1: address, state, postalCode: code, dateOfBirth: date, ssn, city});
                Cookie.set("token", newUser.data.token, {expires: 30, secure: true, sameSite: "none"});
                Cookie.set("id", newUser.data.id, {expires: 30, secure: true, sameSite: "none"});
                Cookie.set("firstname", newUser.data.firstname, {expires: 30, secure: true, sameSite: "none"});
                Cookie.set("email", newUser.data.email, {expires: 30, secure: true, sameSite: "none"});
                Cookie.set("lastname", newUser.data.lastname, {expires: 30, secure: true, sameSite: "none"});
                setUser(newUser);
            }
        }
        catch(error) {
            console.log(error);
        }
        // finally {
        //     setIsLoading(false);
        // }
    }

  return (
    <section className="form">
        <header>
            <Link href="/" className="sidebar-link">
                <div className="sidebar-link-block">
                    <Image src={bank} width={34} height={34} alt="bank logo" className="link-image" />
                    <h1 className="sidebar-logo">Horizon</h1>
                </div>
            </Link>
            <div className="form-top">
                <h1>{user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}</h1>
                <p>{user ? "Link your account to get started" : "Please enter your details"}</p>
            </div>
        </header>
        {user ? (
            <div>
                {/*PlaidLink*/}
            </div>
        ):(
            <div className="form-block">
                { type === "sign-up" && 
                    <div>
                        <div className="form-name">
                            <div className="form-flex">
                                <div className="form-field">First Name</div>
                                <div className="form-field-input"><input type="text" placeholder="Enter your name" onChange={(e) => nameSet(e.currentTarget.value)}/></div>
                                <div className="form-error">{ errors.name === "name" && "invalid name (Name)"}</div>
                            </div>
                            <div className="form-flex">
                                <div className="form-field">Last Name</div>
                                <div className="form-field-input"><input type="text" placeholder="Enter your last name" onChange={(e) => lastnameSet(e.currentTarget.value)}/></div>
                                <div className="form-error">{ errors.lastname === "lastname" && "invalid lastname (Lastname)"}</div>
                            </div>
                        </div>
                        <div className="form-field">Address</div>
                        <div className="form-field-input">
                            <input type="text" placeholder="Enter your address" onChange={(e) => addressSet(e.currentTarget.value)}/>
                            <div className="form-error">{ errors.address === "address" && "empty address (address <= 50 characters)"}</div>
                        </div>
                        <div className="form-field">City</div>
                        <div className="form-field-input">
                            <input type="text" placeholder="Enter your city" onChange={(e) => citySet(e.currentTarget.value)}/>
                            <div className="form-error">{ errors.city === "city" && "empty city (address <= 50 characters)"}</div>
                        </div>
                        <div className="form-name">
                            <div className="form-flex">
                                <div className="form-field">State</div>
                                <div className="form-field-input">
                                    <input type="text" placeholder="Enter your state" onChange={(e) => stateSet(e.currentTarget.value)}/>
                                    <div className="form-error">{ errors.state === "state" && "invalid state (NY)"}</div>
                                </div>
                            </div>
                            <div className="form-flex">
                                <div className="form-field">Postal Code</div>
                                <div className="form-field-input">
                                    <input type="text" placeholder="Enter your postal code" onChange={(e) => codeSet(e.currentTarget.value)}/>
                                    <div className="form-error">{ errors.code === "code" && "invalid code (51234)"}</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-name">
                            <div className="form-flex">
                                <div className="form-field">Date of Birth</div>
                                <div className="form-field-input">
                                    <input type="text" placeholder="YYYY-MM-DD" onChange={(e) => dateSet(e.currentTarget.value)}/>
                                    <div className="form-error">{ errors.date === "date" && "invalid date (2024-09-09)"}</div>
                                </div>
                            </div>
                            <div className="form-flex">
                                <div className="form-field">SSN</div>
                                <div className="form-field-input">
                                    <input type="text" placeholder="ex: 1234" onChange={(e) => ssnSet(e.currentTarget.value)}/>
                                    <div className="form-error">{ errors.ssn === "ssn" && "invalid ssn (2315)"}</div>
                                </div>
                            </div>
                        </div>    
                    </div> 
                }
                <div className="form-field">Email</div>
                <div className="form-field-input"><input type="email" placeholder="Enter your email" onChange={(e) => emailSet(e.currentTarget.value)}/></div>
                <div className="form-error">{ errors.email === "email" && "invalid email (aleks@gmail.com)"}</div>
                <div className="form-field">Password</div>
                <div className="form-field-input"><input type="password" placeholder="Enter your password" onChange={(e) => passwordSet(e.currentTarget.value)}/></div>
                <div className="form-error">{ errors.password === "password" && "invalid password (password)"}</div>
                <div className="form-submit"><button type="submit" onClick={() => submit()}>{type === "sign-in" ? "Sign In" : "Sign Up"}</button></div>
            </div>
        )}
        { !user && (
            <footer className="form-footer">
                <p>{type === "sign-in" ? "Don`t have an account?" : "Alredy have an account?"}</p>
                <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"}>
                    {type === "sign-in" ? "Sign up" : "Sign in"}
                </Link>
            </footer>
        )}
    </section>
  )
}

export default AuthForm