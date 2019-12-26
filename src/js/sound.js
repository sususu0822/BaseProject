$(function () {
    //获取点击事件的对象
    $(".nav li").click(function () {
        //获取要显示或隐藏的对象
        var divShow = $(".content").children('.list');
        var divShow1 = $("#rightside").children('.list');
        var divShow2 = $(".show-chat").children('.list');
        //判断当前对象是否被选中，如果没选中的话进入if循环
        if (!$(this).hasClass('selected')) {
            //获取当前对象的索引
            var index = $(this).index();
            //当前对象添加选中样式并且其同胞移除选中样式；
            $(this).addClass('selected').siblings('li').removeClass('selected');
            //索引对应的div块显示
            $(divShow[index]).show();
            $(divShow1[index]).show();
            $(divShow2[index]).show();
            //索引对应的div块的同胞隐藏
            $(divShow[index]).siblings('.list').hide();
            $(divShow1[index]).siblings('.list').hide();
            $(divShow2[index]).siblings('.list').hide();
        }
    });
});

/*语音使用者1*/
document.addEventListener('DOMContentLoaded', function () {

    var oSendBtn = document.getElementById('sendBtn');
    var soundClips = document.querySelector('.sound-clips');
    var mediaRecorder;
    var oChatList = document.getElementById('chatList');
    navigator.getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(
            // constraints - only audio needed for this app
            {
                audio: true
            })
            // Success callback
            .then(function (stream) {
                rec(stream);
            })

            // Error callback
            .catch(function (err) {
            }
            );
    } else {
    }
    function rec(stream) {
        mediaRecorder = new MediaRecorder(stream);
        oSendBtn.addEventListener('touchstart', function (ev) {
            ev.preventDefault();
            this.innerHTML = '松开 结束';
            this.classList.add('activeBtn');
            mediaRecorder.start();
        }, false);
        oSendBtn.addEventListener('touchend', function (ev) {
            ev.preventDefault();
            this.innerHTML = '按下 说话';
            this.classList.remove('activeBtn');
            mediaRecorder.stop();
        }, false);
        mediaRecorder.ondataavailable = function (e) {
            var clipContainer = document.createElement('li');
            var audio = document.createElement('audio');
            clipContainer.classList.add('item_audio');
            clipContainer.innerHTML = `
                <div class = "redDot"></div>
                <div class="chatContent">
                        <i class="material-icons material-icons_wifi">...</i>
                    <span class="bot"></span>
                    <span class="top"></span>
                </div>
                <div class="avatar">
                    <img src="../img/我的大头.jpg" alt="晓" style="height:40px">
                </div>`;
            audio.setAttribute('controls', '');
            oChatList.appendChild(clipContainer);
            var audioURL = window.URL.createObjectURL(e.data);
            audio.src = audioURL;
            oChatList.addEventListener('touchstart', function (ev) {
                if (ev.srcElement.parentNode.className !== 'item_audio') return;
                audio.play();
                ev.srcElement.parentNode.removeChild(ev.srcElement.parentNode.children[0])
            }, false);
        };
    }
}, false);

/*语音使用者2*/
document.addEventListener('DOMContentLoaded', function () {

    var oSendBtn = document.getElementById('sendBtn2');
    var soundClips = document.querySelector('.sound-clips');
    var mediaRecorder;
    var oChatList = document.getElementById('chatList2');
    navigator.getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(
            // constraints - only audio needed for this app
            {
                audio: true
            })
            // Success callback
            .then(function (stream) {
                rec(stream);
            })

            // Error callback
            .catch(function (err) {
            }
            );
    } else {
    }
    function rec(stream) {
        mediaRecorder = new MediaRecorder(stream);
        oSendBtn.addEventListener('touchstart', function (ev) {
            ev.preventDefault();
            this.innerHTML = '松开 结束';
            this.classList.add('activeBtn');
            mediaRecorder.start();
        }, false);
        oSendBtn.addEventListener('touchend', function (ev) {
            ev.preventDefault();
            this.innerHTML = '按下 说话';
            this.classList.remove('activeBtn');
            mediaRecorder.stop();
        }, false);
        mediaRecorder.ondataavailable = function (e) {
            var clipContainer = document.createElement('li');
            var audio = document.createElement('audio');
            clipContainer.classList.add('item_audio');
            clipContainer.innerHTML = `
                <div class = "redDot"></div>
                <div class="chatContent">
                        <i class="material-icons material-icons_wifi">...</i>
                    <span class="bot"></span>
                    <span class="top"></span>
                </div>
                <div class="avatar">
                    <img src="../img/我的大头.jpg" alt="晓" style="height:40px">
                </div>`;
            audio.setAttribute('controls', '');
            oChatList.appendChild(clipContainer);
            var audioURL = window.URL.createObjectURL(e.data);
            audio.src = audioURL;
            oChatList.addEventListener('touchstart', function (ev) {
                if (ev.srcElement.parentNode.className !== 'item_audio') return;
                audio.play();
                ev.srcElement.parentNode.removeChild(ev.srcElement.parentNode.children[0])
            }, false);
        };
    }
}, false);

/*语音使用者3*/
document.addEventListener('DOMContentLoaded', function () {

    var oSendBtn = document.getElementById('sendBtn3');
    var soundClips = document.querySelector('.sound-clips');
    var mediaRecorder;
    var oChatList = document.getElementById('chatList3');
    navigator.getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(
            // constraints - only audio needed for this app
            {
                audio: true
            })
            // Success callback
            .then(function (stream) {
                rec(stream);
            })

            // Error callback
            .catch(function (err) {
            }
            );
    } else {
    }
    function rec(stream) {
        mediaRecorder = new MediaRecorder(stream);
        oSendBtn.addEventListener('touchstart', function (ev) {
            ev.preventDefault();
            this.innerHTML = '松开 结束';
            this.classList.add('activeBtn');
            mediaRecorder.start();
        }, false);
        oSendBtn.addEventListener('touchend', function (ev) {
            ev.preventDefault();
            this.innerHTML = '按下 说话';
            this.classList.remove('activeBtn');
            mediaRecorder.stop();
        }, false);
        mediaRecorder.ondataavailable = function (e) {
            var clipContainer = document.createElement('li');
            var audio = document.createElement('audio');
            clipContainer.classList.add('item_audio');
            clipContainer.innerHTML = `
                <div class = "redDot"></div>
                <div class="chatContent">
                        <i class="material-icons material-icons_wifi">...</i>
                    <span class="bot"></span>
                    <span class="top"></span>
                </div>
                <div class="avatar">
                    <img src="../img/我的大头.jpg" alt="晓" style="height:40px">
                </div>`;
            audio.setAttribute('controls', '');
            oChatList.appendChild(clipContainer);
            var audioURL = window.URL.createObjectURL(e.data);
            audio.src = audioURL;
            oChatList.addEventListener('touchstart', function (ev) {
                if (ev.srcElement.parentNode.className !== 'item_audio') return;
                audio.play();
                ev.srcElement.parentNode.removeChild(ev.srcElement.parentNode.children[0])
            }, false);
        };
    }
}, false);


/*语音使用者4*/
document.addEventListener('DOMContentLoaded', function () {

    var oSendBtn = document.getElementById('sendBtn4');
    var soundClips = document.querySelector('.sound-clips');
    var mediaRecorder;
    var oChatList = document.getElementById('chatList4');
    navigator.getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(
            // constraints - only audio needed for this app
            {
                audio: true
            })
            // Success callback
            .then(function (stream) {
                rec(stream);
            })

            // Error callback
            .catch(function (err) {
            }
            );
    } else {
    }
    function rec(stream) {
        mediaRecorder = new MediaRecorder(stream);
        oSendBtn.addEventListener('touchstart', function (ev) {
            ev.preventDefault();
            this.innerHTML = '松开 结束';
            this.classList.add('activeBtn');
            mediaRecorder.start();
        }, false);
        oSendBtn.addEventListener('touchend', function (ev) {
            ev.preventDefault();
            this.innerHTML = '按下 说话';
            this.classList.remove('activeBtn');
            mediaRecorder.stop();
        }, false);
        mediaRecorder.ondataavailable = function (e) {
            var clipContainer = document.createElement('li');
            var audio = document.createElement('audio');
            clipContainer.classList.add('item_audio');
            clipContainer.innerHTML = `
                <div class = "redDot"></div>
                <div class="chatContent">
                        <i class="material-icons material-icons_wifi">...</i>
                    <span class="bot"></span>
                    <span class="top"></span>
                </div>
                <div class="avatar">
                    <img src="../img/我的大头.jpg" alt="晓" style="height:40px">
                </div>`;
            audio.setAttribute('controls', '');
            oChatList.appendChild(clipContainer);
            var audioURL = window.URL.createObjectURL(e.data);
            audio.src = audioURL;
            oChatList.addEventListener('touchstart', function (ev) {
                if (ev.srcElement.parentNode.className !== 'item_audio') return;
                audio.play();
                ev.srcElement.parentNode.removeChild(ev.srcElement.parentNode.children[0])
            }, false);
        };
    }
}, false);

/*语音使用者5*/
document.addEventListener('DOMContentLoaded', function () {

    var oSendBtn = document.getElementById('sendBtn5');
    var soundClips = document.querySelector('.sound-clips');
    var mediaRecorder;
    var oChatList = document.getElementById('chatList5');
    navigator.getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(
            // constraints - only audio needed for this app
            {
                audio: true
            })
            // Success callback
            .then(function (stream) {
                rec(stream);
            })

            // Error callback
            .catch(function (err) {
            }
            );
    } else {
    }
    function rec(stream) {
        mediaRecorder = new MediaRecorder(stream);
        oSendBtn.addEventListener('touchstart', function (ev) {
            ev.preventDefault();
            this.innerHTML = '松开 结束';
            this.classList.add('activeBtn');
            mediaRecorder.start();
        }, false);
        oSendBtn.addEventListener('touchend', function (ev) {
            ev.preventDefault();
            this.innerHTML = '按下 说话';
            this.classList.remove('activeBtn');
            mediaRecorder.stop();
        }, false);
        mediaRecorder.ondataavailable = function (e) {
            var clipContainer = document.createElement('li');
            var audio = document.createElement('audio');
            clipContainer.classList.add('item_audio');
            clipContainer.innerHTML = `
                <div class = "redDot"></div>
                <div class="chatContent">
                        <i class="material-icons material-icons_wifi">...</i>
                    <span class="bot"></span>
                    <span class="top"></span>
                </div>
                <div class="avatar">
                    <img src="../img/我的大头.jpg" alt="晓" style="height:40px">
                </div>`;
            audio.setAttribute('controls', '');
            oChatList.appendChild(clipContainer);
            var audioURL = window.URL.createObjectURL(e.data);
            audio.src = audioURL;
            oChatList.addEventListener('touchstart', function (ev) {
                if (ev.srcElement.parentNode.className !== 'item_audio') return;
                audio.play();
                ev.srcElement.parentNode.removeChild(ev.srcElement.parentNode.children[0])
            }, false);
        };
    }
}, false);

function sendMessage1(){
    var input = document.getElementById("message1").value;/*從輸入框取資料 */
    console.log()
    if(input == ""){
    }
    else{
        var newbox = document.createElement("li");/*新建li */
        newbox.classList.add('item_me');    /*爲他加 class */
        newbox.innerHTML = `<div class="chatContent">
                                <span class="bot"></span>`+input+`
                                <span class="top"></span>
                            </div>

                            <div class="avatar">
                                <img src="../img/我的大头.jpg" alt="晓" style="height:33px">
                            </div> `;              
        document.getElementById("chatList").appendChild(newbox);
        document.getElementById("renew1").innerHTML = input;
        document.getElementById("message1").value = "";/*訊息發出去后 自動清空*/
    }
}
function sendMessage2(){
    var input = document.getElementById("message2").value;/*從輸入框取資料 */
    console.log()
    if(input == ""){
    }
    else{
        var newbox = document.createElement("li");/*新建li */
        newbox.classList.add('item_me');    /*爲他加 class */
        newbox.innerHTML = `<div class="chatContent">
                                <span class="bot"></span>`+input+`
                                <span class="top"></span>
                            </div>

                            <div class="avatar">
                                <img src="../img/我的大头.jpg" alt="晓" style="height:33px">
                            </div> `;            
        document.getElementById("chatList2").appendChild(newbox);
        document.getElementById("renew2").innerHTML = input;
        document.getElementById("message2").value = "";/*訊息發出去后 自動清空*/
    }
}
function sendMessage3(){
    var input = document.getElementById("message3").value;/*從輸入框取資料 */
    console.log()
    if(input == ""){
    }
    else{
        var newbox = document.createElement("li");/*新建li */
        newbox.classList.add('item_me');    /*爲他加 class */
        newbox.innerHTML = `<div class="chatContent">
                                <span class="bot"></span>`+input+`
                                <span class="top"></span>
                            </div>

                            <div class="avatar">
                                <img src="../img/我的大头.jpg" alt="晓" style="height:33px">
                            </div> `;
        /*var child = document.createTextNode(input);
        newbox.appendChild(child);  */                
        document.getElementById("chatList3").appendChild(newbox);
        document.getElementById("renew3").innerHTML = input;
        document.getElementById("message3").value = "";/*訊息發出去后 自動清空*/
    }
}
function sendMessage4(){
    var input = document.getElementById("message4").value;/*從輸入框取資料 */
    console.log()
    if(input == ""){
    }
    else{
        var newbox = document.createElement("li");/*新建li */
        newbox.classList.add('item_me');    /*爲他加 class */
        newbox.innerHTML = `<div class="chatContent">
                                <span class="bot"></span>`+input+`
                                <span class="top"></span>
                            </div>

                            <div class="avatar">
                                <img src="../img/我的大头.jpg" alt="晓" style="height:33px">
                            </div> `;            
        document.getElementById("chatList4").appendChild(newbox);
        document.getElementById("renew4").innerHTML = input;
        document.getElementById("message4").value = "";/*訊息發出去后 自動清空*/
    }
}
function sendMessage5(){
    var input = document.getElementById("message5").value;/*從輸入框取資料 */
    console.log()
    if(input == ""){
    }
    else{
        var newbox = document.createElement("li");/*新建li */
        newbox.classList.add('item_me');    /*爲他加 class */
        newbox.innerHTML = `<div class="chatContent">
                                <span class="bot"></span>`+input+`
                                <span class="top"></span>
                            </div>

                            <div class="avatar">
                                <img src="../img/我的大头.jpg" alt="晓" style="height:33px">
                            </div> `;            
        document.getElementById("chatList5").appendChild(newbox);
        document.getElementById("renew5").innerHTML = input;
        document.getElementById("message5").value = "";/*訊息發出去后 自動清空*/
    }
}
function sendMessage6(){
    var input = document.getElementById("message6").value;/*從輸入框取資料 */
    console.log()
    if(input == ""){
    }
    else{
        var newbox = document.createElement("li");/*新建li */
        newbox.classList.add('item_me');    /*爲他加 class */
        newbox.innerHTML = `<div class="chatContent">
                                <span class="bot"></span>`+input+`
                                <span class="top"></span>
                            </div>

                            <div class="avatar">
                                <img src="../img/我的大头.jpg" alt="晓" style="height:33px">
                            </div> `;            
        document.getElementById("chatList6").appendChild(newbox);
        document.getElementById("renew6").innerHTML = input;
        document.getElementById("message6").value = "";/*訊息發出去后 自動清空*/
    }
}
function sendMessage7(){
    var input = document.getElementById("message7").value;/*從輸入框取資料 */
    console.log()
    if(input == ""){
    }
    else{
        var newbox = document.createElement("li");/*新建li */
        newbox.classList.add('item_me');    /*爲他加 class */
        newbox.innerHTML = `<div class="chatContent">
                                <span class="bot"></span>`+input+`
                                <span class="top"></span>
                            </div>

                            <div class="avatar">
                                <img src="../img/我的大头.jpg" alt="晓" style="height:33px">
                            </div> `;            
        document.getElementById("chatList7").appendChild(newbox);
        document.getElementById("renew7").innerHTML = input;
        document.getElementById("message7").value = "";/*訊息發出去后 自動清空*/
    }
}








document.oncontextmenu = function() {
    return false;
}
// 创建一个录音对象
var recorder = new MP3Recorder({
    funCancel: function (msg) {
        console.log(msg);
        recorder = null;
    }
});
var mp3Blob,
    oBtn = document.querySelector('input[type="button"]'),
    oHideTips = document.querySelector('.hide-tips-wrap'),
    oMarkIcon = oHideTips.querySelector('.tips-icon'),
    oTipsTxt = oHideTips.querySelector('.tips-txt');
oBtn.addEventListener('touchstart', function() {
    recorder.start();
    oHideTips.style.display = 'block';
});
oBtn.addEventListener('touchend', function() {
    recorder.stop();
    recorder.getMp3Blob(function (blob) {
        mp3Blob = blob;
        var url = URL.createObjectURL(mp3Blob),
            // 获取语言列表容器
            oWrap = document.querySelector('.voice-wrap'),
            // 创建li
            oLi = document.createElement('li'),
            // 创建audio标签
            oAudio = document.createElement('audio'),
            // 创建a标签
            oHref = document.createElement('a'),
            // 创建播放语音显示按钮
            oSpanPlay = document.createElement('span'),
            // 创建播放语音总时间
            oNumberBox = document.createElement('i'),
            // 创建头像img
            oImg = new Image();
        // 给audio标签添加媒体链接
        oAudio.src = url;
        // 给a标签添加下载链接
        oHref.href = url;
        oHref.download = new Date().toISOString() + '.mp3';
        oHref.innerHTML = oHref.download;
        // 给图片添加路径
        oImg.src = '../images/picture.jpg';
        oSpanPlay.className = 'play-wrap';
        oNumberBox.className = 'num-box';
        setTimeout(function() {
            var nDuration = conversionTime( oAudio.duration );
            // 判断时间是否少于一秒
            if( isNaN(nDuration) || nDuration == 0 ) {
                oMarkIcon.style.backgroundImage = 'url(../images/mark.png)';
                oTipsTxt.innerText = '说话时间太短';
                // 关闭提示层
                setTimeout(function() {
                    oHideTips.style.display = 'none';
                    oMarkIcon.style.backgroundImage = 'url(../images/voice.png)';
                    oTipsTxt.innerText = '松开发送消息';
                }, 500);
            } else {
                oNumberBox.innerText = nDuration + '″';
                // 将创建好的对象放入li标签
                oLi.appendChild(oAudio);
                oLi.appendChild(oHref);
                oLi.appendChild(oImg);
                oLi.appendChild(oSpanPlay);
                oLi.appendChild(oNumberBox);
                oLi.className = 'clearfix';
                // 将li标签放入语言列表容器
                oWrap.appendChild(oLi);
                // 获取播放语音按钮总的宽度
                var nSpanTotalWidth = parseFloat(getStyle(oLi, 'width')) * 0.7 - oSpanPlay.offsetWidth;
                // 当前播放按钮宽度  当前距离 = 当前时间 / 总时间 * 总距离 + 初始距离
                oSpanPlay.style.width = nDuration / 60 * nSpanTotalWidth + oSpanPlay.offsetWidth - 2 + 'px';
                var bMark = true;
                // 播放语音
                oSpanPlay.onclick = function() {
                    if( bMark ) {
                        this.style.backgroundImage = 'url(../images/voiceplayer1.gif)';
                        oAudio.play();
                        oAudio.addEventListener('timeupdate', function() {
                            if( this.ended ) {
                                oSpanPlay.style.backgroundImage = 'url(../images/voice2.png)';
                            }
                        });
                    } else {
                        this.style.backgroundImage = 'url(../images/voice2.png)';
                        oAudio.pause();
                    }
                    bMark = !bMark;
                }
                // 关闭提示层
                setTimeout(function() {
                    oHideTips.style.display = 'none';
                }, 500);
            }
        }, 100);
    });
});
// 转换毫秒时间为秒
function conversionTime( t ){
    var s = Math.floor( t % 60 );
    return s;
}
// 获取样式
function getStyle( obj, attr ) {
    return window.getComputedStyle(obj, null)[attr]
}