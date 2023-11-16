<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initialscale=1.0">
    <title>Login</title>
</head>
<body>
<h2>注册</h2>

<table align="center" border="1">
    <tr>
            <form action="getuser">
                用户名:<input type="text" name="username"/><br>
                密&emsp;码:<input type="text" name="password"/><br>
                ${msg}
                <input type="submit" value="提交">
            </form>
    </tr>
</table>
<h3>首先用springmvc来控制视图，假设用户名为”admin“为管理员，登陆后就创建一个对象，给它赋予权限值存到session中，在要切入的方法delete()前
    添加一个注解来判断权限，在AOP中获取session中的对象权限值与注解的值比较，从而确定权限
    有权限就执行方法delete()，没权限就报错</h3>
</body>
</html>
