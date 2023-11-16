package controller;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Component
@Controller
public class Delete {
    @RequestMapping("verify")
    public String userdelete(){
        System.out.println("get request for delete");
        return "verify";
    }
    @RequestMapping("aopdelete")
    @PermissionControl(value = 1)
    public String delete(HttpServletRequest request){
        HttpSession session =request.getSession();
        session.removeAttribute("User");
        return "result";
    }
}
