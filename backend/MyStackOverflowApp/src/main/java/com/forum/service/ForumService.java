package com.forum.service;

import com.forum.entity.ForumPosts;

import java.util.List;

public interface ForumService {
    public List<ForumPosts> getForumPosts();
    public ForumPosts save(ForumPosts fP);
}
