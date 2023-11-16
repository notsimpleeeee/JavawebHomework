<%--
  Created by IntelliJ IDEA.
  User: 86135
  Date: 2023/5/22
  Time: 12:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initialscale=1.0">
    <title>Title</title>
</head>
<body>
    <h2>你的用户信息</h2>
    username：${username}<br/>
    password：${password}<br/>
    ${msg}
    <form action="aopdelete">
    <input type="submit" value="申请注销">
</form>
</body>
</html>
