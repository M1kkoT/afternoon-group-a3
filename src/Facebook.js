import profiles from './berlin.json';

export default function Facebook () {
    
    return(
      <>
        <h2>Bonus3 Facebook</h2>
        <ul className='faceContainer'>
          {profiles.map(profile => (
            <li key={profile.firstName + profile.lastName} className={"faceList"}>
              <img src={profile.img} alt={'profile'}/>
              <article className='info'>
                <p><b>First name: </b>{profile.firstName}</p>
                <p><b>Last Name: </b>{profile.lastName}</p>
                <p><b>Country: </b>{profile.country}</p>
                <p><b>Type: </b>{profile.isStudent ? "Student" : "Teacher"}</p>
              </article>
            </li>
          ))}
        </ul>
      </>
      
    )
}