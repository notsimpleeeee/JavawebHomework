package com.example.javawebb.controller;
import com.example.javawebb.Service.ScoreService;
import com.example.javawebb.model.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;


@Controller
//@RestController
@RequestMapping("/api/user")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @PostMapping("/scoreinsert")
    @ResponseBody
    public Integer InsertScore(@RequestBody Score score, Model model){
       Integer i = scoreService.addScore(score);
        model.addAttribute("msg","successful");
        return i;
    }

@ResponseBody
@GetMapping("/scorelist")
    public List<Score> ListScoreByUsername(String uname){
    List<Score> scores = scoreService.queryScoreByUsername(uname);
    return scores;
}

@GetMapping("/scoredelete")
@ResponseBody
    public Integer deleteScore(String uname,Integer course_id){
    Integer i = scoreService.deleteScore(uname,course_id);
    return i ;
}
@GetMapping("/scorelistall")
@ResponseBody
    public List<Score> ListScoreAll(){
    List<Score> scores = scoreService.listScore();
    return scores;
}

}
