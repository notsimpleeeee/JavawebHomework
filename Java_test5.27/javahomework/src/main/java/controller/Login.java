package controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import pojo.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Component
@Controller
@ComponentScan("pojo")
public class Login {
    @Autowired
    public User user;
    @RequestMapping("login")
    public String login() {
        System.out.println("get request for login");
        return "login";
    }
    @RequestMapping("getuser")
    public String LoginService(HttpServletRequest req, Model model) throws  IOException {
        req.setCharacterEncoding("utf-8");
        HttpSession session = req.getSession();
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        if(username!=null&&password!=null&&!username.equals("")&&!password.equals("")) {
            user.setUsername(username);
            user.setPassword(password);
            if (username.equals("admin"))
                user.setLevel(1);
            else
                user.setLevel(0);
            model.addAttribute("username", username);
            model.addAttribute("password", password);
            String message1 = "You information has been recorded";
            model.addAttribute("msg", message1);
            session.setAttribute("User", user);
            return "verify";
        }else{
            String message2 = "Please login again";
            model.addAttribute("msg", message2);
            return "login";
        }
    }
}