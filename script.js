let apiUsersDatas = document.getElementById('apiUsersDatas')
let view = ""

fetch('https://randomuser.me/api/?results=100').then(response => response.json())
.then(converteddata =>{
    for(let m = 0; m <converteddata.results.length; m++){
    view +=
    `<div class="col-12 col-sm-12 col-md-6 col-xl-3">
    <img src="${converteddata.results[m].picture.large}"class="rounded-circle" alt="">
        <span><hr></span>
    <div class="down-info">
        <p id="name">Name:- ${converteddata.results[m].name.title} ${converteddata.results[m].name.first} ${converteddata.results[m].name.last}</p>
        <p id="gender">Gender:- ${converteddata.results[m].gender}</p>
        <P id="pnumber">Phone Number:- ${converteddata.results[m].phone}</P>
        <p id="location">Location:- ${converteddata.results[m].location.street.number} ${converteddata.results[m].location.street.name}</p>
        <p id="date>D-O-B:- ${converteddata.results[m].dob.date} ${converteddata.results[m].dob.age}</p>
        <p id="email">Email:- ${converteddata.results[m].email}</p>
        <p id="password">Password:- ${converteddata.results[m].login.uuid} ${converteddata.results[m].login.username}${converteddata.results[m].login.password}</p>
        </div>                         
        </div>
</div>`

}
apiUsersDatas.innerHTML += view; 
})