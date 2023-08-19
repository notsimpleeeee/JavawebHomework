package com.example.javawebb.Service;
import com.example.javawebb.model.Score;
import java.util.List;

public interface ScoreService {
    // 查询所有用户
    public List<Score> listScore();


//    根据id删除用户
    public Integer deleteScore(String uname,Integer course_id);

    // 根据id查询用户
    public List<Score> queryScoreByUsername(String uname);

    // 修改用户
//    public Integer updateScore(Score score);

    // 新增用户
    public Integer addScore(Score score);

}
