package com.forum.controller;

import com.forum.entity.ForumPosts;
import com.forum.service.ForumService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Log
@CrossOrigin(origins = "https://frontend-dot-my-stackoverflow-app.uc.r.appspot.com")
@RestController
public class ForumController {
    @Autowired
    ForumService forumService;

    @GetMapping(value = "/doFetchForumPosts", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getForumPosts() {
        try {
            log.warning("inside doFetchForumPosts");
            List<ForumPosts> posts = forumService.getForumPosts();
            if (posts != null) {
                return new ResponseEntity<Object>(posts, HttpStatus.OK);
            } else {
                return new ResponseEntity<Object>(posts, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            HashMap<String, Object> responseMap = new HashMap<String, Object>();
            responseMap.put("exception", e.getMessage());
            responseMap.put("message", "exception");
            return new ResponseEntity<Object>(responseMap, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/createForumPost", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> createForumPost(
            @RequestBody ForumPosts fP) {
        try {
            log.warning("inside createForumPost"+ fP.getPersonName());
            if (!fP.getPersonName().isEmpty() && !fP.getQuestion().isEmpty()) {
                fP = forumService.save(fP);
            } else {
                return new ResponseEntity<Object>(
                        new HashMap<String, String>().put("message", "Invalid request"),
                        HttpStatus.BAD_REQUEST);
            }

            if (fP != null) {
                return new ResponseEntity<Object>(fP, HttpStatus.OK);
            } else {
                return new ResponseEntity<Object>(
                        new HashMap<String, String>().put("message", "problem in forum post creation"),
                        HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            HashMap<String, Object> responseMap = new HashMap<String, Object>();
            responseMap.put("exception", e.getMessage());
            responseMap.put("message", "exception");
            return new ResponseEntity<Object>(responseMap, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
