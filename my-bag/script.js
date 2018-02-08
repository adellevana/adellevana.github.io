document.addEventListener('DOMContentLoaded', function() {
    console.log('reading');

    //capture images into variables
    var earphones = document.getElementById('earphones');
    var phone = document.getElementById('phone');
    var wallet = document.getElementById('wallet');
    var keys = document.getElementById('keys');
    //capture closing variables
    var close1 = document.getElementById('close1');
    var close2 = document.getElementById('close2');
    var close3 = document.getElementById('close3');
    var close4 = document.getElementById('close4');

    //earphones hover event listener
    earphones.addEventListener('mouseover', function() {
        earphones.style.opacity = 1;
        earphones.src = 'images/my-earphones.png';
    });
    //earphones mouseout event listener
    earphones.addEventListener('mouseout', function() {
        earphones.style.opacity = 0;
        earphones.src = 'images/my-earphones.png';
    });
    //earphones click
    earphones.addEventListener('click', function() {
        earphonesInfo.style.opacity = 1;
    });
    //close info
    close1.addEventListener('click', function() {
        earphonesInfo.style.opacity = 0;
    });

    //phone hover event listener
    phone.addEventListener('mouseover', function() {
        phone.style.opacity = 1;
        phone.src = 'images/my-phone.png';
    });
    //phone mouseout event listener
    phone.addEventListener('mouseout', function() {
        phone.style.opacity = 0;
        phone.src = 'images/my-phone.png';
    });
    //phone click
    phone.addEventListener('click', function() {
        phoneInfo.style.opacity = 1;
    });
    //close info
    close2.addEventListener('click', function() {
        phoneInfo.style.opacity = 0;
    });

    //wallet hover event listener
    wallet.addEventListener('mouseover', function() {
        wallet.style.opacity = 1;
        wallet.src = 'images/my-wallet.png';
    });
    //wallet mouseout event listener
    wallet.addEventListener('mouseout', function() {
        wallet.style.opacity = 0;
        wallet.src = 'images/my-wallet.png';
    });
    //wallet click
    wallet.addEventListener('click', function() {
        walletInfo.style.opacity = 1;
    });
    //close info
    close3.addEventListener('click', function() {
        walletInfo.style.opacity = 0;
    });

    //keys hover event listener
    keys.addEventListener('mouseover', function() {
        keys.style.opacity = 1;
        keys.src = 'images/my-keys.png';
    });
    //keys mouseout event listener
    keys.addEventListener('mouseout', function() {
        keys.style.opacity = 0;
        keys.src = 'images/my-keys.png';
    });
    //keys click
    keys.addEventListener('click', function() {
        keysInfo.style.opacity = 1;
    });
    //close info
    close4.addEventListener('click', function() {
        keysInfo.style.opacity = 0;
    });
});
