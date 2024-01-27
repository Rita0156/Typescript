let conatainer: any = document.getElementById("main_container") as HTMLElement
let form = document.querySelector("form")
let inpElem: any = document.getElementById("user")
let data: any = []
// getting data from api
function FetchData() {
    fetch('https://api.github.com/users')
        .then((req) => {
            return req.json()
        })
        .then((res) => {
            console.log(res);
            data = res

            // getting response from fetch req
            appendData(data)

        })
}
FetchData()

// searching functionality ;;;

form?.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log

    const search: any = inpElem.value.toUpperCase();

    console.log(search, " input field value");

    let dataS = data.filter((elem: any) => {

        if (search.length > 0 && elem.login.toUpperCase().includes(search)) {

            return true;
        }
        else {

            return false;
        }

    })
    console.log(dataS, " getting with help of search algo")
    appendData(dataS);
});


// creating card moded
function card(login: string, image: any) {
    let div = document.createElement('div');
    let loginName = document.createElement("h3");
    loginName.innerText = login;
    let img = document.createElement('img');
    img.alt = "abc";
    img.src = image;
    div.append(loginName, img);

    return div;
};
type UserData = {
    login: any;
    avatar_url: string;

};

// appending data to card function 
function appendData(alldata: any) {

    conatainer.innerHTML = null;

    alldata.forEach((element: UserData) => {

        conatainer.append(card(element.login, element.avatar_url));

    });

    return conatainer;
};