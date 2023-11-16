package controller;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import pojo.User;
import org.apache.shiro.authz.UnauthorizedException;
@Aspect
@Component
public class UserAccessControlAspect {
    @Autowired
    public PermissionService permissionService;
    @Pointcut("@annotation(controller.PermissionControl)")
    public void PermissionControlPointcut(){}

//    @Pointcut("execution(* controller.Delete.delete())")
//    private void getByAuth(){
//
//    }
    @Around(value = "PermissionControlPointcut()")
//    @Around("getByAuth()")
        public Object controlPermission(ProceedingJoinPoint jointpoint) throws Throwable{
            // 获取方法级别的权限要求
            MethodSignature signature = (MethodSignature) jointpoint.getSignature();
            PermissionControl permissionControl = signature.getMethod().getAnnotation(PermissionControl.class);
            int levelRequired = permissionControl.value();
        User currentUser = permissionService.getUser();
            // 如果没有登录或权限不足，抛出异常
            if (currentUser == null || currentUser.getLevel() != levelRequired) {
                throw new UnauthorizedException("permission denied");
            }
            // 执行方法
            return jointpoint.proceed();
    }
}

