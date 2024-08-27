// HTML elementlerini seçme
const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card_number");

const cardName = document.getElementById("name");
const nameInp = document.getElementById("card_name");

const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card_month");

const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card_year");

const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card_cvc");

const submitBtn = document.getElementById("submit_btn");

const completed = document.querySelector(".thank");
const form = document.querySelector("form");

// Kart numarasını formatlama fonksiyonu (İsteğe bağlı)
function format(input) {
    return input.replace(/\d{4}(?=.)/g, "$& "); // 4'er haneli bloklara ayırmak için
}

// Kart numarasını güncelleme fonksiyonu
function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value); // Formatlı haliyle kart numarasını göster
}

// Kart üzerindeki adı güncelleme fonksiyonu
function setCardName(e) {
    cardName.innerText = e.target.value; // Girilen adı kart üzerinde göster
}

// Kart üzerindeki ay bilgisini güncelleme fonksiyonu
function setCardMonth(e) {
    cardMonth.innerText = e.target.value; // Girilen ayı kart üzerinde göster
}

// Kart üzerindeki yıl bilgisini güncelleme fonksiyonu
function setCardYear(e) {
    cardYear.innerText = e.target.value; // Girilen yılı kart üzerinde göster
}

// Kart üzerindeki CVC kodunu güncelleme fonksiyonu
function setCardCvc(e) {
    cardCvc.innerText = e.target.value; // Girilen CVC kodunu kart üzerinde göster
}

// Formun gönderilme işlemi
function handleSubmit(e) {
    e.preventDefault();

    // Önceki hataları temizleme
    [nameInp, numberInp, monthInp, yearInp, cvcInp].forEach(input => {
        input.classList.remove("error");
        input.parentElement.classList.remove("error_message");
    });
    
    // Inputları doğrulama
    if (!nameInp.value) {
        nameInp.classList.add("error");
        nameInp.parentElement.classList.add("error_message");
    }
    if (!numberInp.value) {
        numberInp.classList.add("error");
        numberInp.parentElement.classList.add("error_message");
    }
    if (!monthInp.value) {
        monthInp.classList.add("error");
        monthInp.parentElement.classList.add("error_message");
    }
    if (!yearInp.value) {
        yearInp.classList.add("error");
        yearInp.parentElement.classList.add("error_message");
    }
    if (!cvcInp.value) {
        cvcInp.classList.add("error");
        cvcInp.parentElement.classList.add("error_message");
    }

    // Tüm inputlar doluysa formu gizle ve tamamlandı mesajını göster
    if (nameInp.value && numberInp.value && monthInp.value && yearInp.value && cvcInp.value) {
        completed.classList.remove('hidden');
        form.classList.add("hidden");
    }
}

// Event listener'ları ekleme
numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
form.addEventListener("submit", handleSubmit);
