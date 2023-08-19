package com.file.neo;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity   //表示这个类是一个实体类
@Table(name = "file")    //对应的数据库中表名称
public class FileInfo {

    @GeneratedValue(strategy = GenerationType.IDENTITY)   //生成策略，这里配置为自增
    @Column(name = "fileid")    //对应表中id这一列
    @Id     //此属性为主键
    int fileid;

    @Column(name = "filename")   
    String filename;

    @Column(name = "filepath")   
    String filepath;
    
    @Column(name = "fileblock")   
    String fileblock;

    public int getFileid() {
        return fileid;
    }

    public void setFileid(int fileid) {
        this.fileid = fileid;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFilepath() {
        return filepath;
    }

    public void setFilepath(String filepath) {
        this.filepath = filepath;
    }

    public String getFileblock() {
        return fileblock;
    }

    public void setFileblock(String fileblock) {
        this.fileblock = fileblock;
    }
}