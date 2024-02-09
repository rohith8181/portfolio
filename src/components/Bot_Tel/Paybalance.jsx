import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Paybalance.css';
import { useState } from 'react';


function Paybalance() {

    const [accountId, setaccountId] = useState("");
    const [credits, setcredits] = useState("");
    const [adminPass, setadminPass] = useState("");

    const handlesubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(`${process.env.REACT_APP_SERVER_URL}/update/user/balance`);
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/update/user/balance`, {
                admin_pass: adminPass,
                account_id: accountId,
                points: credits,
            })
            toast(response.data.message);
        } catch (err) {
            toast("Error in sending requests");
            console.log(err);
        }
        setaccountId("");
        setadminPass("");
        setcredits("");
    }

    return (
        <>
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Add Balance</h2>
                    <input onChange={(e) => { setadminPass(e.target.value) }} value={adminPass} type="text" autoComplete="off" className="form-control" name="adminPass" placeholder="Enter Admin Password" required />
                    <input onChange={(e) => { setaccountId(e.target.value) }} value={accountId} type="text" autoComplete="off" className="form-control" name="account_id" placeholder="Enter User account no." required autoFocus />
                    <input onChange={(e) => { setcredits(e.target.value) }} value={credits} type="text" autoComplete="off" className="form-control" name="credits" placeholder="Enter no.of credits to be added" required />
                    <button onClick={handlesubmit} className="btn submit_btn" type="submit">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Paybalance