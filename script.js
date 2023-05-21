const image = document.querySelector('img');
input = document.querySelector('input');

input.addEventListener('change', () =>{
    // image.src =  URL.createObjectURL(input.files[0]); // this is the way to do it without using FileReader
    const file = input.files[0];
    if(file){
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', () =>{
            image.setAttribute('src', reader.result);
        })
    }
})