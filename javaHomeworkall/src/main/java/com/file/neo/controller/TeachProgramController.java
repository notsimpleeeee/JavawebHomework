package com.file.neo.controller;

import com.file.neo.FileInfo;
import com.file.neo.FileInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Controller
public class TeachProgramController {
	
	
	  @Autowired
	    private FileInfoRepository fileInfoRepository;
	  @ResponseBody
	  @GetMapping("/viewfile")
	    public Iterable<FileInfo> upload(@RequestParam("option") String option) {
		 Iterable<FileInfo> fileInfoiterable = fileInfoRepository.findAllByFileblock(option); // Your Iterable<FileInfo> object
	        List<FileInfo> fileInfoList = new ArrayList<FileInfo>();
	        for (FileInfo fileInfo : fileInfoiterable) {
	        	fileInfoList.add(fileInfo);
	        }
	        return fileInfoList;
	      
	    }
		//@RequestMapping(value="/uploadfile",method={RequestMethod.POST,RequestMethod.GET})
		@ResponseBody
	    @PostMapping("/uploadfile") // //new annotation since 4.3
	    public int singleFileUpload(@RequestParam("file") MultipartFile file,
	    		@RequestParam("option") String option,Model model) {
	      String UPLOADED_FOLDER = "D:\\temp\\";
	    	if(option.equals("teachplan")) {
	    	UPLOADED_FOLDER=UPLOADED_FOLDER+"teachplan\\";
	    	}
	    	else if(option.equals("teachprecis")) {
		    	UPLOADED_FOLDER=UPLOADED_FOLDER+"teachprecis\\";
		    	}
	    	else if(option.equals("courseware")) {
		    	UPLOADED_FOLDER=UPLOADED_FOLDER+"courseware\\";
		    	}
	    	else if(option.equals("learnprofile")) {
		    	UPLOADED_FOLDER=UPLOADED_FOLDER+"learnprofile\\";
		    	}
	    	else if(option.equals("homework")) {
		    	UPLOADED_FOLDER=UPLOADED_FOLDER+"homework\\";
		    	}
	    	
	        if (file.isEmpty()||option.isEmpty()) {
	        
	        	return 2;}

	        try {
	            // Get the file and save it somewhere
	            byte[] bytes = file.getBytes();
	            Path dir = Paths.get(UPLOADED_FOLDER);
	            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
	            // Create parent dir if not exists
	            if(!Files.exists(dir)) {
	                Files.createDirectories(dir);
	            }
	           
	            Files.write(path, bytes);
	            FileInfo fileInfo = new FileInfo();
	            fileInfo.setFilename(file.getOriginalFilename());
	            fileInfo.setFilepath(path.toString());
	            fileInfo.setFileblock(option);
	            fileInfoRepository.save(fileInfo);
	            model.addAttribute("message","You successfully uploaded");
	        	return 1;    
	        } catch (IOException e) {
	        	model.addAttribute("message","Server throw IOException");
        	    return 0;
	        }
	         
	    }


	    @ResponseBody
	    @GetMapping("/downloadfileview")
	    public Iterable<FileInfo> downloadfileview(@RequestParam("option") String option) {
			 Iterable<FileInfo> fileInfoiterable = fileInfoRepository.findAllByFileblock(option); // Your Iterable<FileInfo> object
		        List<FileInfo> fileInfoList = new ArrayList<FileInfo>();
		        for (FileInfo fileInfo : fileInfoiterable) {
		        	fileInfoList.add(fileInfo);}
		        	 return fileInfoList;
		        }
	    
	    @GetMapping("/deletefile")
	    @ResponseBody
	    public int deleteFile(@RequestParam("fileid") int fileid) {
	        
	        
	        try {
	        	fileInfoRepository.deleteByFileid(fileid);
	            return 1;
	        } catch (Exception e) {
	            e.printStackTrace();
	            // 处理异常
	            return 0;
	        }
	    }
	    
	    @GetMapping("/downloadfile")
	    @ResponseBody
	    public ResponseEntity<FileSystemResource> downloadFile(@RequestParam("fileid") int fileid) {
	        
	        FileInfo fileInfo = fileInfoRepository.findByFileid(fileid);
	        String filePath = fileInfo.getFilepath();
	        String filename=fileInfo.getFilename();
	        System.out.println(filename);	
	        try {
	            // 创建一个Resource对象，用于包装要下载的文件
	        	FileSystemResource fileResource = new FileSystemResource(filePath);

	            // 设置响应头信息
	            HttpHeaders headers = new HttpHeaders();
	            String encodedFilename = URLEncoder.encode(filename, StandardCharsets.UTF_8.toString());
	            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + encodedFilename + "\"");
	            System.out.println(fileResource);
	            // 返回ResponseEntity对象，包含要下载的文件Resource和一些响应头信息
	            return ResponseEntity.ok()
	                    .headers(headers)
	                    .body(fileResource);
	        } catch (Exception e) {
	            e.printStackTrace();
	            // 处理异常
	            return ResponseEntity.notFound().build();
	        }
	    }
	    
}
