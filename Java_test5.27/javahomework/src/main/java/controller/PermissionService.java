package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import pojo.User;

import javax.servlet.http.HttpServletRequest;

@Component
@ComponentScan("pojo")
public class PermissionService {
    @Autowired
    public User user;
    public User getUser() throws Exception{
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        return (User) request.getSession().getAttribute("User");
    }
}
