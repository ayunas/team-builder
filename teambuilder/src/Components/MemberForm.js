import React, { useState } from 'react'


export default function MemberForm(props) {

    const [member, setMember] = useState({ name: '', role: '', email: '' })

    function input(e) {
        setMember({ ...member, [e.target.name]: e.target.value })
        console.log(member);
    }

    function submit(e) {
        e.preventDefault();
        props.add(member);
    }



    return (
        <form onSubmit={submit}>
            <input name="name" placeholder="Enter Name" value={member.name} onChange={input} /><br />
            <input name="role" placeholder="Enter Role" value={member.role} onChange={input} /><br />
            <input name="email" placeholder="Enter Email" value={member.email} onChange={input} /><br />
            <button>Add Member</button>
        </form>
    )
}


