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

        // console.dir(e.target);
        // Array.from(e.target.children).forEach(elem => elem.value = '');

        // const found = team.find(teamMember => member === teamMember)
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


