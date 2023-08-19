package com.example.javawebb.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Score {
//    private Integer id;
    private String uname;
    private Integer class_id;
    private Integer course_id;
    private Integer final_score;
    private Integer mid_score;
    private Integer total_score;

}
