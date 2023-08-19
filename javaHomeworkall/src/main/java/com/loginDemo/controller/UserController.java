package com.loginDemo.controller;

import com.loginDemo.domain.User;
import com.loginDemo.service.UserService;
import com.loginDemo.utils.Result;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;

@RestController
@RequestMapping(path = "/user", method={RequestMethod.POST,RequestMethod.GET})
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/login")//处理post请求，路由为/user/login
    public Result<User> loginController(@RequestParam String uname, @RequestParam String password){
        User user = userService.loginService(uname, password);
        if(user!=null){
            System.out.println("成功运行");
            return Result.success(user,"登录成功！");
        }else{
            return Result.error("123","账号或密码错误！");
        }
    }

    @PostMapping("/register")//处理post请求，路由为/user/register
    public Result<User> registController(@RequestBody User newUser){
        User user = userService.registService(newUser);
        if(user!=null){
            return Result.success(user,"注册成功！");
        }else{
            return Result.error("456","用户名已存在！");
        }
    }
}
