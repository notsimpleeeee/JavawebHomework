package com.example.javawebb.dao;
import com.example.javawebb.model.Score;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Mapper
@Repository
public interface ScoreDao {
    public List<Score> listScore();

    // 添加成绩
    public Integer addScore(Score score);

    // 根据username查询成绩
    public List<Score> queryScoreByUsername(String uname);

//    根据username删除成绩
    public Integer deleteScore(@Param("uname") String uname, @Param("course_id") Integer course_id);

    // 修改成绩
//    public int updateScore(Score score);



}
