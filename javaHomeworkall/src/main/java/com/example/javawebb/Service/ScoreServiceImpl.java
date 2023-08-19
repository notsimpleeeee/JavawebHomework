package com.example.javawebb.Service;
import com.example.javawebb.Service.ScoreService;
import com.example.javawebb.model.Score;
import com.example.javawebb.dao.ScoreDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
//@ComponentScan("com.example.javawebb.dao.ScoreDao")
public class ScoreServiceImpl implements ScoreService {
    @Autowired
    private ScoreDao scoreDao;
    @Override
    public List<Score> listScore() {
        return scoreDao.listScore();
    }

    @Override
    public Integer addScore(Score score) {
         return scoreDao.addScore(score);

    }
    @Override
    public Integer deleteScore(String uname,Integer course_id) {
        return scoreDao.deleteScore(uname,course_id);
    }

    @Override
    public List<Score> queryScoreByUsername(String uname) {
        return scoreDao.queryScoreByUsername(uname);
    }


}




