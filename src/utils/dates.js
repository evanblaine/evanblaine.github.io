function getTimeBetween(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var timeBetween = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        timeBetween--;
    }
    return timeBetween;
}

export {
    getTimeBetween
}