import React from 'react'


export default function Members(props) {

    return (
        <>
            <div>Team</div>
            {props.team.map(member => {
                return (
                    <div class="member-card">
                        <p>{member.name}</p>
                        <p>{member.role}</p>
                        <p>{member.email}</p>
                        <button onClick={() => props.edit(member)}>edit</button>
                    </div>
                )
            }
            )}
        </>
    )
}
