$(function() {
    $("#requser h5").on("click", function() {
        $("#requser").hide();
        $(".login").show();
    })
    $(".login h5").on("click", function() {
        $("#requser").show();
        $(".login").hide();
    })
    $("#dl1").on("click", function() {
        console.log("点击了提交按钮");
    })
    var form = layui.form;
    form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ]
    });

    $("#form-reg").on("submit", function(e) {
        e.preventDefault();
        $.post('http://ajax.frontend.itheima.net/api/reguser', { username: $('#form-reg input:eq(0)').val(), password: $('#form-reg input:eq(1)').val() }, function(reg) {

        })
        var lname = $('#form-reg input:eq(0)').val();
        var lpwd = $('#form-reg input:eq(1)').val();
        var lrpwd = $('#form-reg input:eq(2)').val();
        if (lpwd === lrpwd) {
            $(".login h5").click();
        } else {
            alert("两次密码不一致");
        }
        localStorage.setItem('name', lname);
        localStorage.setItem('pwd', lpwd);
        // console.log(lname);
        // console.log(lpwd);
    })
    $("#form-index").on('submit', function(e) {
        e.preventDefault();
        console.log("点击了提交");
        var dname = $("#form-index input:eq(0)").val();
        var dpwd = $('#form-index input:eq(1)').val();
        var lname = localStorage.getItem("name");
        var lpwd = localStorage.getItem("pwd");
        if (dname === lname && dpwd === lpwd) {
            location.href = 'index.html';
        } else {
            alert('用户名或密码错误');
        }
        // console.log(dname);
        // console.log(dpwd);
        // console.log(lname);
        // console.log(lpwd);
    })
})