//上传音频
$("#fileInput").change(function(){
    var file = $("#fileInput").get(0).files;
    console.log(file.type);
    for(var i = 0;i<file.length;i++){
        var path = URL.createObjectURL(file[i]);
        var audio = document.createElement('audio');
        audio.src = path;
        audio.controls = true;
        audio.volume = '0.2';
        $('#audio1').append(audio);
    }
});

$("#upload").click(function(){
    var file = $("#fileInput").get(0).files;
    var formData = new FormData();
    for(var i = 0;i<file.length;i++){
        formData.append("recording",file[i]);
    }
    console.log(formData.getAll("recording"));
	//ajax上传至后台
	uploadAudio(formData);
});
————————————————
版权声明：本文为CSDN博主「喝碗茶冷静一下」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_22669967/article/details/103510981