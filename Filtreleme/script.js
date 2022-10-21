//!Algoritma

//Her klavye girişi olduğunda
    //Girilen değeri al (Büyük harfe çevir)
    //Listeyi döngüye sok.
    //Listenin değerini, girilen karakterlerle karşılaştır
        //Eğer eşleşme var ise listenin görünümü açık kalsın
        //Eşleşme yoksa listeyi sakla.


function searchMenu(){

    const searchInput = document.querySelector('.input');
    //console.log(searchInput);

    searchInput.addEventListener("keyup", function(){

        let data = this.value.toUpperCase();
        //console.log(data);

        let li = document.querySelectorAll('li');
        //console.log(li);

        for(let i = 0; i < li.length; i++){
            //console.log(li[i].innerHTML);
            if(li[i].innerHTML.toUpperCase().indexOf(data) > -1){
                li[i].style.display = "";
            }
            else{
                li[i].style.display = "none";
            }
        }

    });

}

searchMenu();