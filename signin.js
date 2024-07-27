document.querySelector('#create-acc-btn').addEventListener('click', (e) => {
    e.preventDefault();
    location.replace('signup.html');
})

var switchesEl = document.getElementById('switches');
var switchSignChoice = document.querySelector('#signWithnumber')

//   switchSignChoice.innerHTML =""

switchSignChoice.addEventListener('click', (e) =>{

    e.preventDefault()
    emailInput.innerHTML = `
              <div id="phone-number-switch">
                    <span
                        style="border-bottom: solid 1px grey; padding: 12px 0px; border-right: solid 1px grey; padding-right: 10px;">+237</span><input
                        style="width: 290px; border: none; background-color: transparent; border-bottom: solid 1px grey;"
                        type="tel" name="tel" id="tel-input" placeholder="Enter Moblie Number">
                </div>
    `
    switchSignChoice.innerHTML = ` <button onclick='location.replace("signin.html")'>Email sign in</button>`

});