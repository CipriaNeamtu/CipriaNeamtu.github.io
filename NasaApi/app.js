var url = 'https://api.nasa.gov/planetary/apod?api_key=i4poT7AEhsKN2f1cZQ9Pl8ea1C0f53MdGU7cKQzN&date=';
var theDate = new Date();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var month00 = ("0" + (theDate.getMonth() + 1)).slice(-2);
var day00 = ("0" + theDate.getDate()).slice(-2);
var year = theDate.getFullYear();
var monthsString = months[theDate.getMonth()];

function deleteData() {
    let Data = getDate();
    let dayTitle = document.getElementById('dayTitle');
    let dayPhoto = document.getElementById('image');
    let section = document.getElementById("error");
    if ((Data === undefined || Data !== undefined) && (dayTitle !== null && dayPhoto !== null)) {
        dayTitle = document.getElementById('dayTitle');
        dayTitle.remove();
        dayPhoto = document.getElementById('image');
        dayPhoto.remove();
    }
    else if (section.innerText !== '') {
        deleteError()
    }
};

function getInputDate() {
    let getInputDate = document.getElementById('start').value;
    if (getInputDate === '') {
        return url;
    } else {
        let inputUrl = url + getInputDate;
        return inputUrl;
    }
};

function getDate() {
    let InputDate = getInputDate();
    if (InputDate !== url) {
        showLoader()
        fetch(InputDate, { method: 'GET' })
            .then(handleResponse)
            .then(function (response) {
                if (response.error) {
                    throw new Error(response.error);
                } else {
                    displayResponse(response);
                }
            })
            .catch(function (error) {
                displayError(error);
            })
            .finally(hideLoader);
        return InputDate;
    }
    else {
        showLoader()
        fetch(url, { method: 'GET' })
            .then(handleResponse)
            .then(function (response) {
                if (response.error) {
                    throw new Error(response.error);
                } else {
                    displayResponse(response);
                }
            })
            .catch(function (error) {
                displayError(error);
            })
            .finally(hideLoader);
    }
};

function displayResponse(response) {
    let getInputDate = document.getElementById('start').value;
    let thisDay = year + '-' + month00 + '-' + day00;
    if (response.media_type !== 'image') {
        throw new Error('Selected day doesn`t have a picture! Please try another day!');
    } else if (getInputDate === '') {
        var newDayList = document.getElementById('newDay');
        var newDayTitle = document.createElement('h3');
        newDayTitle.setAttribute('id', 'dayTitle');
        newDayTitle.innerHTML = 'Today`s picture: ' + response.title;
    } else if (getInputDate === thisDay) {
        var newDayList = document.getElementById('newDay');
        var newDayTitle = document.createElement('h3');
        newDayTitle.setAttribute('id', 'dayTitle');
        newDayTitle.innerHTML = 'Today`s picture: ' + response.title;
    } else {
        var newDayList = document.getElementById('newDay');
        var newDayTitle = document.createElement('h3');
        newDayTitle.setAttribute('id', 'dayTitle');
        newDayTitle.innerHTML = getInputDate + ' picture: ' + response.title;
    }
    let newDayPhoto = document.createElement('img');
    newDayPhoto.setAttribute('id', 'image');
    newDayPhoto.src = response.url;
    newDayList.append(newDayTitle, newDayPhoto);
};

function showLoader() {
    let loader = document.getElementById('myLoader');
    loader.style.display = 'block';
};

function hideLoader() {
    let loader = document.getElementById("myLoader");
    let imageLoad = document.getElementById('image');
    if (imageLoad === null) {
        loader.style.display = 'none';
    } else if (imageLoad !== null) {
        imageLoad.addEventListener('load', function () {
            loader.style.display = 'none';
        });
    }
};

function handleResponse(response) {
    if (response.status === 400) {
        let thisDate = monthsString + ' ' + day00 + ', ' + year;
        let error = 'Date must be between Jun 16, 1995 and ' + thisDate + '.';
        throw new Error(error);
    }
    else if (response.status === 200) {
        return response.json();
    }
};

function displayError(error) {
    let section = document.getElementById("newDay");
    let newErr = document.createElement('h4');
    newErr.setAttribute('id', 'error');
    newErr.innerText = error;
    section.append(newErr);
};

function deleteError() {
    let section = document.getElementById("error");
    if (section === null) {
        return;
    } else {
        section.remove();
    }
};

document.getElementById('button').onclick = getInputDate;
document.getElementById('button').onclick = getDate;
document.getElementById('button').onclick = deleteData;

getDate();