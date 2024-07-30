let res = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    
document.getElementById('sub').onclick = () => {
    let valid = document.getElementById('num').value;
    if (valid.match(res)) {
        alert("Valid PAN Number");
    } else {
        alert("Invalid PAN Number");
    }
};