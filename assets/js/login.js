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
        $.post('http://ajax.frontend.itheima.net/api/reguser', { username: $('#form-reg[name=username]').val(), password: $('#form-reg[name=password]').val() }, function(reg) {})
        alert('注册成功');
    })
})