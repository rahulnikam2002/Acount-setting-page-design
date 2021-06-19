let saveChanges = document.getElementById('saveProfile');
let userNameAccount = document.getElementById('userNameAccount');
let displayName = document.getElementById('displayName');
let headerAccName = document.getElementById('headerAccName')
let UserBioDisplay = document.getElementById('UserBioAccount');
let userBioInput = document.getElementById('userBioInput');
displayData()

    function displayData(){

        
    saveChanges.addEventListener('click', function (event) {
        event.preventDefault()
    
    
        let localData = localStorage.getItem('userData');
        let dataArr;
        let userData;
        if (userData == null) {
            dataArr = [];
        }
        else {
            dataArr = JSON.parse(userData);
        }
        let dataObb = {
            displayName: displayName.value,
            displayBio: userBioInput.value
        }
        dataArr.push(dataObb);
        localStorage.setItem("userData", JSON.stringify(dataArr));
        

        dataArr.forEach(function(element){
    
            // function displayData(){
            if(displayName.value != 0 && userBioInput.value != 0){
                userNameAccount.innerText = `${element.displayName}`;
                headerAccName.innerText = `${element.displayName}`;
                UserBioAccount.innerText = `${element.displayBio}`;
                // localStorage.setItem("userData", JSON.stringify(dataArr));
            }
            else{
                confirm("Please Enter All Data")
                // localStorage.setItem("userData", JSON.stringify(dataArr));
            }
        })
    })
}  



// javaScript for Notification area

let notificationSection = document.getElementById('notificationSection')
let notificationItem = document.getElementById('notificationItem')
let accountSection = document.getElementById('accountSection')
let accountItem = document.getElementById('accountItem')

notificationItem.addEventListener('click', function(){
    accountSection.style.display = 'none'
    notificationSection.style.display = 'block'
    notificationItem.setAttribute('style', `background-color: #ddebfe;
    margin: 10px 0px;
    padding: 5px 10px;
    border-radius: 50px;
    cursor: pointer;
    `)

    accountItem.style.backgroundColor = 'white';
})

accountItem.addEventListener('click', function(){
    accountSection.style.display = 'block'
    notificationSection.style.display = 'none'
    accountItem.setAttribute('style', `background-color: #ddebfe;
    margin: 10px 0px;
    padding: 5px 10px;
    border-radius: 50px;
    cursor: pointer;
    `)

    notificationItem.style.backgroundColor = 'white';
})



// JavaScript for oppening account menu section

let mobileAccMenuSection = document.getElementById('mobileAccMenuSection');
let accMenuThreeDots = document.getElementById('accMenuThreeDots')
let accMenuCross = document.getElementById('accMenuCross');
// console.log(mobileAccMenuSection, accMenuCross, accMenuThreeDots);


accMenuThreeDots.addEventListener('click', function(){
    mobileAccMenuSection.style.display = 'block'
})

accMenuCross.addEventListener('click', function(){
    mobileAccMenuSection.style.display = 'none'

})




// JavaScript for Notification open


let accountItemMobile = document.getElementById('accountItemMobile');
let notificationItemMobile = document.getElementById('notificationItemMobile');

console.log(accountItemMobile, notificationItemMobile)


notificationItemMobile.addEventListener('click', function(){
    accountSection.style.display = 'none'
    notificationSection.style.display = 'block'
    mobileAccMenuSection.style.display = 'none'
    notificationItemMobile.style.backgroundColor = '#ddebfe'
    accountItemMobile.style.backgroundColor = 'white'
})

accountItemMobile.addEventListener('click', function(){
    accountSection.style.display = 'block'
    notificationSection.style.display = 'none'
    mobileAccMenuSection.style.display = 'none'
    notificationItemMobile.style.backgroundColor = 'white'
    accountItemMobile.style.backgroundColor = '#ddebfe'
})