package com.file.neo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.file.neo.controller") // 指定控制器类所在的包路径
public class MaterialApplication {
    public static void main(String[] args) {
        SpringApplication.run(MaterialApplication.class, args);
      
          
        
    }
}