//logo upload
document.getElementById('logoInput').addEventListener('change',function(e){
    const file = e.target.file[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(evt){
            document.getElementById('logoPreview').src=evt.target.result;
        };
        reader.readAsDataURL(file);
    }
});

//apply theme

function applyTheme(){
    const primary = document.getElementById('primaryColor').value;
    const accent = document.getElementById('accentColor').value;

    //update css
    document.documentElement.style.setProperty('#fbc02d',accent);

    //update color header 
    document.querySelector('header').style.background=`linear-gradient(90deg,${primary},${accent})`;

    //update logo if has

    const logo = document.querySelector('.logo');
    if(logo){
        logo.style.background =`linear-gradient(135deg,${primary},${accent})`;
    }
    alert("Theme upload successfuly!");
}

//save theme

document.getElementById('settingsForm').addEventListener('submit',function(e){
    e.preventDefault();
    alert("setting saved successffuly!")
});