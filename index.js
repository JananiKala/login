const upload=document.getElementById("upload");
const profilepic=document.getElementById("profile-pic");
upload.onchange=function(){
    const reader=new FileReader();
    reader.onload=function() {
    profilepic.src=reader.result;
};
reader.eraderAsDataUrl(upload.file[0]);
};