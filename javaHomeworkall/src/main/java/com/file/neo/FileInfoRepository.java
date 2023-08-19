package com.file.neo;

import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

public interface FileInfoRepository extends CrudRepository<FileInfo, Integer> {
    FileInfo findByFilename(String filename);
    FileInfo findByFileid(int fileid);
    Iterable<FileInfo> findAllByFileblock(String fileblock);
    @Transactional
    void deleteByFileid(int fileid);
    // 省略其他查询方法
}

