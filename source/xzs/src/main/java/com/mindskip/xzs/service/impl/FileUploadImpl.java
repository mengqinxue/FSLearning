package com.mindskip.xzs.service.impl;

import com.mindskip.xzs.configuration.property.FuConfig;
import com.mindskip.xzs.configuration.property.QnConfig;
import com.mindskip.xzs.configuration.property.SystemConfig;
import com.mindskip.xzs.service.FileUpload;
import com.google.gson.Gson;
import com.qiniu.common.QiniuException;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.Region;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileUploadImpl implements FileUpload {
    private final Logger logger = LoggerFactory.getLogger(FileUpload.class);
    private final SystemConfig systemConfig;


    @Autowired
    public FileUploadImpl(SystemConfig systemConfig) {
        this.systemConfig = systemConfig;
    }

    @Override
    public String uploadFile(InputStream inputStream, long size, String extName) {
//        QnConfig qnConfig = systemConfig.getQn();
//        Configuration cfg = new Configuration(Region.region2());
//        UploadManager uploadManager = new UploadManager(cfg);
//        Auth auth = Auth.create(qnConfig.getAccessKey(), qnConfig.getSecretKey());
//        String upToken = auth.uploadToken(qnConfig.getBucket());
//        try {
//            Response response = uploadManager.put(inputStream, null, upToken, null, null);
//            DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
//            return qnConfig.getUrl() + "/" + putRet.key;
//        } catch (QiniuException ex) {
//            logger.error(ex.getMessage(), ex);
//        }

        FuConfig fuConfig = systemConfig.getFu();
        try {

//            String workingDir = System.getProperty("user.dir");
//            logger.info("Current working directory: " + workingDir);
//
//            String filePath = workingDir + "/upload/images/" + extName;
            String filePath = fuConfig.getPath() + "/" + extName;
            Path path = Paths.get(filePath);

            // 确保目标目录存在
            Files.createDirectories(path.getParent());

            // 将输入流中的内容复制到目标文件
            Files.copy(inputStream, path, StandardCopyOption.REPLACE_EXISTING);

            return filePath;

        } catch (Exception ex){
            logger.error("Failed to upload file: {}", ex.getMessage(), ex);
        }

        return null;
    }
}
